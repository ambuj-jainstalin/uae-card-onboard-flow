
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOnboarding } from '@/context/OnboardingContext';
import { toast } from "sonner";

const EmiratesIdVerification: React.FC = () => {
  const { emiratesId, setEmiratesId, setCurrentStep } = useOnboarding();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmiratesId = (id: string) => {
    // Simple validation for Emirates ID format (784-YYYY-NNNNNNN-C)
    const pattern = /^784-\d{4}-\d{7}-\d{1}$/;
    return pattern.test(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmiratesId(emiratesId)) {
      toast.error("Please enter a valid Emirates ID in format: 784-YYYY-NNNNNNN-C");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to credit bureau
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(3);
      toast.success("Emirates ID verification successful!");
    }, 1500);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-md mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold mb-2 text-center">Emirates ID Verification</h1>
      <p className="text-gray-600 mb-8 text-center">
        Please enter your Emirates ID for credit assessment
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="emiratesId">Emirates ID</Label>
          <Input
            id="emiratesId"
            placeholder="784-YYYY-NNNNNNN-C"
            value={emiratesId}
            onChange={(e) => setEmiratesId(e.target.value)}
            className="py-6 px-4"
            required
          />
          <p className="text-sm text-gray-500">Format: 784-YYYY-NNNNNNN-C</p>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-gray-600 mb-4">
            By proceeding, you consent to:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 mb-6">
            <li>Verification of your Emirates ID with relevant authorities</li>
            <li>Credit bureau check to assess your eligibility</li>
            <li>Open banking data access with your authorization in the next step</li>
          </ul>
        </div>
        
        <div className="flex justify-between">
          <Button 
            type="button" 
            onClick={handleBack}
            variant="outline" 
            className="px-6"
          >
            Back
          </Button>
          <Button 
            type="submit" 
            className="px-6 bg-bank-red hover:bg-bank-red/90"
            disabled={!emiratesId || isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmiratesIdVerification;
