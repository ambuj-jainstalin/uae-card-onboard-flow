
import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
  steps: string[];
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center mb-12 px-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${
            currentStep === index + 1
              ? 'active'
              : currentStep > index + 1
              ? 'complete'
              : ''
          } mb-8 md:mb-0`}
        >
          <div className="step">
            {currentStep > index + 1 ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              index + 1
            )}
          </div>
          <p className="text-center text-sm mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
