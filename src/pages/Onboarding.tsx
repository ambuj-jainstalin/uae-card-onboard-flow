
import React from 'react';
import Layout from '@/components/Layout';
import ProgressSteps from '@/components/ProgressSteps';
import CategorySelection from '@/components/CategorySelection';
import EmiratesIdVerification from '@/components/EmiratesIdVerification';
import OpenBankingConsent from '@/components/OpenBankingConsent';
import CardOffers from '@/components/CardOffers';
import Success from '@/components/Success';
import { useOnboarding } from '@/context/OnboardingContext';

const Onboarding: React.FC = () => {
  const { currentStep } = useOnboarding();

  const steps = [
    'Select Category',
    'Verify ID',
    'Bank Consent',
    'Select Card',
    'Confirmation'
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <ProgressSteps currentStep={currentStep} steps={steps} />
        
        <div className="py-8">
          {currentStep === 1 && <CategorySelection />}
          {currentStep === 2 && <EmiratesIdVerification />}
          {currentStep === 3 && <OpenBankingConsent />}
          {currentStep === 4 && <CardOffers />}
          {currentStep === 5 && <Success />}
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;
