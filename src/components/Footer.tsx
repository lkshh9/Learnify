import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>About Me</h2>
                <p className='mb-4'>
                    Projects of full stack category are culmination of several technologies, frameworks and languages used together to build a useful product
                </p>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
                <ul>
                    <li>
                        <a href='#' className='hover:text-white transition-colors duration-300'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white transition-colors duration-300'>About</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white transition-colors duration-300'>Courses</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white transition-colors duration-300'>Contact</a>
                    </li>
                </ul>
            </div>
            <div> 
                <h2 className='text-white text-lg font-semibold mb-4'>Follow us</h2>
                <div className='flex  space-x-4'>
                    <a href='#' className='hover:text-white transition-colors duration-300'>GitHub</a>
                    <a href='#' className='hover:text-white transition-colors duration-300'>Twitter</a>
                    <a href='#' className='hover:text-white transition-colors duration-300'>LinkedIn</a>
                </div>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Contact us</h2>
                <p>Jaipur, India</p>
                <p> Pink City 10001</p>
                <p>Email: info@lokeshdev007.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
        <p className='text-center text-xs pt-8'>© 2024 Course Project. All rights reserved.</p>
    </footer>
  )
}

export default Footer
