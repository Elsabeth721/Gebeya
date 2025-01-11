import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Example icons

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(()=>{
    const savedMode =localStorage.getItem('darkMode');// returns string or null 
    return savedMode ? JSON.parse(savedMode):false;// it converts the string from localStorage back into a boolean using JSON.parse & if saveMode is null it return false then default in my case the light background will be set
  });
useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));  
  };


  return (
    <div className="flex items-center mt-6">
      <span className="mr-2 text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <div
        onClick={toggleDarkMode}
        className={`w-10 h-5 flex items-center bg-gray-500 rounded-full p-1 cursor-pointer ${darkMode ? 'bg-gray-600' : 'bg-lightGreen'}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
        />
        
      </div>
    </div>
  );
};

export default DarkModeToggle;
 