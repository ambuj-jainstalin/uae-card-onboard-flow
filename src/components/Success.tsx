
import React from 'react';
import { Button } from "@/components/ui/button";
import { useOnboarding } from '@/context/OnboardingContext';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Success: React.FC = () => {
  const { referenceNumber, selectedOffer, resetOnboarding } = useOnboarding();

  return (
    <div className="max-w-lg mx-auto text-center animate-fade-in">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-12 w-12 text-green-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Application Successful!</h1>
      
      <p className="text-gray-600 mb-6">
        Your application for the {selectedOffer?.name} has been submitted successfully.
      </p>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4">Application Details</h2>
        
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Reference Number:</span>
          <span className="font-bold">{referenceNumber}</span>
        </div>
        
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Card Type:</span>
          <span>{selectedOffer?.name}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Status:</span>
          <span className="text-green-600 font-medium">Submitted</span>
        </div>
      </div>
      
      <div className="bg-bank-lightBlue rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-3">What happens next?</h3>
        <ol className="text-left list-decimal pl-5 space-y-2">
          <li>Our team will review your application within 1-2 business days</li>
          <li>You'll receive an email confirmation with application details</li>
          <li>Once approved, your card will be delivered to your registered address</li>
          <li>You'll need to activate your card following the instructions provided</li>
        </ol>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button 
          onClick={resetOnboarding}
          variant="outline"
          className="px-6"
        >
          Apply for Another Card
        </Button>
        <Button 
          asChild
          className="px-6 bg-bank-red hover:bg-bank-red/90"
        >
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
