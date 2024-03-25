'use client'
import Link from 'next/link';

const Footer = () => {

    return (
      <footer className='bg-white text-black mt-12 mx-8 sm:mx-10 md:mx-14 h-[25%] z-50 flex-col'>
        <div className='py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2'>
            <Link href='/' onClick={()=> window.scroll(0,0)}><img src='/assets/images/bws-logo.png' className='w-60 md:w-72 mb-4' alt='BWS logo' /></Link>
            <ul className='pl-4 flex flex-col md:flex-row gap-4 md:gap-8 whitespace-nowrap text-md'>
                <li><Link href='/' className='hover:text-[#0184C9] duration-500' onClick={()=> window.scroll(0,0)} >Home</Link></li>
                <li><Link href='/our-team' className='hover:text-[#0184C9] duration-500'onClick={()=> window.scroll(0,0)}>Our Team</Link></li>
                <li><Link href='/services' className='hover:text-[#0184C9] duration-500' onClick={()=> window.scroll(0,0)}>Services</Link></li>
                <li><Link href='/contact' className='hover:text-[#0184C9] duration-500'onClick={()=> window.scroll(0,0)}>Contact</Link></li>
                <li><Link href='/before-first-visit' className='hover:text-[#0184C9] duration-500'onClick={()=> window.scroll(0,0)}>Before First Visit</Link></li>
                <li><Link href='/blog' className='hover:text-[#0184C9] duration-500' onClick={()=> window.scroll(0,0)}>Blog</Link></li>
            </ul>
        </div>
        <hr className='border-black w-full py-4 ' />
        <div className='flex flex-col-reverse md:flex-row justify-between items-center md:justify-between'>
            <p>Copyright &copy; 2023 All Rights Reserved.</p>
            <div className='flex gap-4 pb-4'>
                <a href='https://www.instagram.com/broadwaysmiles/' target='_blank' rel='noopener noreferrer' className='hover:opacity-80'>
                  <img className='w-6' src='/assets/images/icons/insta.png' alt='instagram icon' />
                </a>
                <a href='https://www.facebook.com/broadwayssmiles/' target='_blank' rel='noopener noreferrer' className='hover:opacity-80'>
                  <img className='w-6' src='/assets/images/icons/linked.png' alt='linkedin icon' />
                </a>
                <a href='https://maps.app.goo.gl/odY85EAaz46MsmD37' target='_blank' rel='noopener noreferrer' className='hover:opacity-80'>
                  <img className='w-6' src='/assets/images/icons/business.png' alt='linkedin icon' />
                </a>
            </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  