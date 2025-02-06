import React from "react";

type FeatureCardProps = {
  icon: React.ElementType;
  text: string;
  position: string;
};

const FeaturedCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  text,
  position,
}) => (
  <div className={`absolute ${position} bg-white p-2 rounded-md shadow-lg`}>
    <Icon size={24} className="text-blue-500" />
    <span>{text}</span>
  </div>
);

export default FeaturedCard;
