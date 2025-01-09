import React from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode]= usestate(false);

    const toogleDarkMode=()=>{
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };
  return (
    <div>
        <button onClick={toogleDarkMode} className='bg-lightGreen text-black py-2 px-4 rounded'>Theme</button>
      
    </div>
  )
}

export default DarkMode;
