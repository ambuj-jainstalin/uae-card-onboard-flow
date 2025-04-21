
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useOnboarding, CardOffer } from '@/context/OnboardingContext';
import { toast } from "sonner";

const CardOffers: React.FC = () => {
  const { selectedCategory, setSelectedOffer, setCurrentStep, setReferenceNumber } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);

  // Mock card offers based on selected category
  const offers: CardOffer[] = [
    {
      id: '1',
      name: 'Platinum Rewards',
      category: 'rewards',
      annualFee: 'AED 500',
      interestRate: '19.99%',
      rewardRate: '3 points per AED 1',
      creditLimit: 'Up to AED 100,000',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/05/08/21/29/visa-3384206_1280.png'
    },
    {
      id: '2',
      name: 'Travel Elite',
      category: 'travel',
      annualFee: 'AED 750',
      interestRate: '21.99%',
      rewardRate: '2 miles per AED 1',
      creditLimit: 'Up to AED 150,000',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/10/04/08/37/card-1713326_1280.jpg'
    },
    {
      id: '3',
      name: 'Everyday Cashback',
      category: 'cashback',
      annualFee: 'AED 300',
      interestRate: '18.99%',
      rewardRate: '2% on all purchases',
      creditLimit: 'Up to AED 75,000',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/09/26/18/50/payment-2789206_1280.jpg'
    },
    {
      id: '4',
      name: 'Business Select',
      category: 'business',
      annualFee: 'AED 650',
      interestRate: '17.99%',
      rewardRate: '2.5% on business expenses',
      creditLimit: 'Up to AED 200,000',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/08/12/09/59/debit-card-1588096_1280.jpg'
    },
    {
      id: '5',
      name: 'Infinite Premium',
      category: 'premium',
      annualFee: 'AED 1,500',
      interestRate: '16.99%',
      rewardRate: '4 points per AED 1',
      creditLimit: 'Up to AED 500,000',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/01/19/19/45/bank-3942396_1280.jpg'
    }
  ];

  // Filter offers based on selected category or show all if none selected
  const filteredOffers = selectedCategory
    ? offers.filter(offer => offer.category === selectedCategory)
    : offers;

  const handleSelectOffer = (offer: CardOffer) => {
    setSelectedOffer(offer);
    setIsLoading(true);
    
    // Generate a random reference number for the application
    const refNumber = `CARD-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(refNumber);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(5);
      toast.success("Card application submitted successfully!");
    }, 1500);
  };

  const handleBack = () => {
    setCurrentStep(3);
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2 text-center">Select Your Card Offer</h1>
      <p className="text-gray-600 mb-8 text-center">
        Based on your profile, we have pre-approved the following card offers for you
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
          >
            <div className="h-48 bg-gradient-to-r from-bank-blue to-bank-darkBlue flex items-center justify-center p-4">
              <img 
                src={offer.imageUrl} 
                alt={offer.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{offer.name}</h3>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Fee:</span>
                  <span className="font-medium">{offer.annualFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-medium">{offer.interestRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rewards:</span>
                  <span className="font-medium">{offer.rewardRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Credit Limit:</span>
                  <span className="font-medium">{offer.creditLimit}</span>
                </div>
              </div>
              
              <Button 
                onClick={() => handleSelectOffer(offer)} 
                className="w-full bg-bank-red hover:bg-bank-red/90"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Select This Card"}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          type="button" 
          onClick={handleBack}
          variant="outline" 
          className="px-6"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default CardOffers;
