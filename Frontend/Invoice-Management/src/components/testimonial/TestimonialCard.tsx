import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  image,
}) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <p className="text-gray-700 italic mb-3">"{text}"</p>
      <h3 className="text-[#0E0B3D] font-bold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;
