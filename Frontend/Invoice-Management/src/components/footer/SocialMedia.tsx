import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
const SocialMedia:React.FC = () => {
  return (
    <div>
        <h3 className='font-semibold text-lg text-gray-800'>Follow us</h3>
        <div className='flex space-x-4 mt-2'>
            <a href="" aria-label='Facebook' className='text-gray-800'><FaFacebookF/></a>
            <a href="" aria-label='Facebook' className='text-gray-800'><FaTwitter/></a>
            <a href="" aria-label='Facebook' className='text-gray-800'><FaLinkedinIn/></a>
            <a href="" aria-label='Facebook' className='text-gray-800'><FaInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia
