
import React, { createContext, useContext, useState } from 'react';

export type CardCategory = 'travel' | 'rewards' | 'cashback' | 'business' | 'premium';

export type BankAccount = {
  type: string;
  number: string;
  selected: boolean;
};

export type CardOffer = {
  id: string;
  name: string;
  category: CardCategory;
  annualFee: string;
  interestRate: string;
  rewardRate: string;
  creditLimit: string;
  imageUrl: string;
};

interface OnboardingContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedCategory: CardCategory | null;
  setSelectedCategory: (category: CardCategory | null) => void;
  emiratesId: string;
  setEmiratesId: (id: string) => void;
  bankAccounts: BankAccount[];
  setBankAccounts: (accounts: BankAccount[]) => void;
  toggleBankAccountSelection: (index: number) => void;
  selectedOffer: CardOffer | null;
  setSelectedOffer: (offer: CardOffer | null) => void;
  referenceNumber: string;
  setReferenceNumber: (ref: string) => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<CardCategory | null>(null);
  const [emiratesId, setEmiratesId] = useState('');
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { type: 'Savings Account', number: '123 456 789', selected: false },
    { type: 'Current Account', number: '987 654 321', selected: false }
  ]);
  const [selectedOffer, setSelectedOffer] = useState<CardOffer | null>(null);
  const [referenceNumber, setReferenceNumber] = useState('');

  const toggleBankAccountSelection = (index: number) => {
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[index].selected = !updatedAccounts[index].selected;
    setBankAccounts(updatedAccounts);
  };

  const resetOnboarding = () => {
    setCurrentStep(1);
    setSelectedCategory(null);
    setEmiratesId('');
    setBankAccounts([
      { type: 'Savings Account', number: '123 456 789', selected: false },
      { type: 'Current Account', number: '987 654 321', selected: false }
    ]);
    setSelectedOffer(null);
    setReferenceNumber('');
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedCategory,
        setSelectedCategory,
        emiratesId,
        setEmiratesId,
        bankAccounts,
        setBankAccounts,
        toggleBankAccountSelection,
        selectedOffer,
        setSelectedOffer,
        referenceNumber,
        setReferenceNumber,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
