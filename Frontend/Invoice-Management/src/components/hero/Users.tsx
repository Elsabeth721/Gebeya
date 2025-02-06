import React from 'react';

const Users: React.FC = () => {
  return (
    <div className='mx-10 bg-[#0077B6] text-gray-800 px-8 py-4 rounded-br-[15px] rounded-tl-[15px] rounded-b-[50px] rounded-tr-[50px] shadow-md mb-8 '>
      <div className='mb-6 text-white items-center text-center'>
        <h2 className='text-2xl font-bold'>Join Over 10,000 Users</h2>
        <p className='mt-2'>Manage your invoices effortlessly and streamline your billing process.</p>
        <a href="#" className='bg-white text-[#003B5C]  hover:bg-[#003B5C] hover:text-white py-2 px-4 rounded-lg mt-4 inline-block'>Get Started</a>
      </div>
    </div>
  );
};

export default Users;