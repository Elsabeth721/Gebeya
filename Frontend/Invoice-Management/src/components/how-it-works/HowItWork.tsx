import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const steps = [
  {
    title: 'One-time customer setup',
    description: 'Your customer enters their payment details securely online, authorizing you to collect payments by Direct Debit.',
  },
  {
    title: 'Schedule payments',
    description: 'Set up a payment schedule that works for you and your customers.',
  },
  {
    title: 'Get paid automatically',
    description: 'Once set up, payments are collected automatically on the schedule you chose.',
  },
  {
    title: 'Keep track',
    description: 'Easily track payments and manage your accounts through our dashboard.',
  },
];

const HowItWorks: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">How it works</h2>
      <div className='flex'>
        <img src="" alt="" />
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="border border-gray-200 rounded-lg bg-gray-50">
            
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-medium text-gray-800">{step.title}</h3>
              <button
                className="text-blue-500 focus:outline-none"
                onClick={() => toggleStep(index)}
              >
                {openIndex === index ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
              </button>
            </div>
            {openIndex === index && (
              <p className="p-4 text-gray-600">{step.description}</p>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;