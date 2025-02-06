import React from 'react';
import { RiFileLine, RiMoneyDollarCircleLine, RiBarChartLine, RiContactsLine } from 'react-icons/ri';
import hero from '../../assets/hero.png';
import back from '../../assets/back.png';
import HeroText from '../hero/heroText';
import FeatureCard from '../hero/FeaturedCard';

const Hero: React.FC = () => {
  return (
    <header className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <HeroText />
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cover bg-center bg-no-repeat rounded-full opacity-50 z-0"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
          <img src={hero} alt="header" className="max-w-[600px] h-auto relative z-10 -translate-x-10" />
          <FeatureCard icon={RiFileLine} text="Invoice Creation" position="top-[25%] left-0 transform -translate-x-1/2 -translate-y-1/2" />
          <FeatureCard icon={RiMoneyDollarCircleLine} text="Payment Tracking" position="top-[10%] right-8 transform -translate-y-1/2" />
          <FeatureCard icon={RiBarChartLine} text="Reporting" position="top-[60%] left-0 transform -translate-x-1/2 -translate-y-1/2" />
          <FeatureCard icon={RiContactsLine} text="Client Management" position="top-[70%] right-8 transform translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </header>
  );
};

export default Hero;