
import React from 'react';

const BankLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/Emirates-Islamic-Bank-logo-1024x537.jpeg" 
      alt="ADCB Bank"
      className={className}
    />
  );
};

export default BankLogo;
