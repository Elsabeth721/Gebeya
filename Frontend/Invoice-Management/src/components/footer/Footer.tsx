import React from 'react'
import SocialMedia from './SocialMedia'
import CompanyLinks from './CompanyLinks'
import HelpfulLink from './HelpfulLink'
import ContactInfo from './ContactInfo'

const Footer:React.FC = () => {
  return (
    <footer className='mt-60 bg-blue-300 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <div className='-mt-20 bg-[#0077B6] text-gray-800 px-8 py-6 rounded-br-[15px] rounded-tl-[15px] rounded-b-[50px] rounded-tr-[50px] shadow-md mb-8 flex justify-between items-center' >
                <div className='mb-6 text-white'>
                    <h2 className='text-2xl font-bold'>Create your account</h2>
                    <p className='mt-2'>You can just check the features in detail</p>
                </div>
                <div>
                    <a href="" className='bg-white text-[#003B5C]  hover:bg-[#003B5C] hover:text-white py-2 px-4 rounded-lg '>Get Started</a>
                </div>
            </div>
            {/* link section that I have put is as components */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <SocialMedia/>
                <CompanyLinks/>
                <HelpfulLink/>
                <ContactInfo/>
            </div>

            <hr className='my-8 border-gray-500 '/>
            <div className='text-center text-lg text-gray-800'>
                <p>Designed by Elsabeth Zeleke 2025. All right reserved.</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
