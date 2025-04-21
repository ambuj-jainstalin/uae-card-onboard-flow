
import React from 'react';

const BankLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/cfed4b12-413a-446f-9085-adcf9de91b60.png" 
      alt="ADCB Bank"
      className={className}
    />
  );
};

export default BankLogo;
