import React from 'react';

const HeroText: React.FC = () => (
  <div className="flex flex-col justify-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-4">
      Master Your <br />
      <span className="text-blue-500">Invoicing </span> Process
    </h1>
    <p className="text-gray-700 font-normal mb-8">
      Effortlessly create, send, and manage invoices with our intuitive platform. 
      Keep track of payments, streamline your billing workflow, and enhance your cash flow.
    </p>
  </div>
);

export default HeroText;