'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useScrollPosition } from '../hooks/useScrollPosition';
import NavElement from './NavElement';
import ServicesDropDown from './ServicesDropDown';

const Header = () => {

    const scrollPosition = useScrollPosition();

    const [menuOpen, setMenuOpen] = useState(false);
    const openedText = 'hidden whitespace-nowrap md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full bg-none md:bg-none left-0 md:w-auto md:py-0 pt-0 pb-6 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[90px] transition-all ease-in duration-500';
    const closedText = 'whitespace-nowrap md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full bg-white text-black md:bg-none left-0 md:w-auto md:py-0 pt-0 pb-6 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[90px] transition-all ease-in duration-500 shadow-md';

    function toggleMenu(e) {
        e.preventDefault();
        setMenuOpen(prevState => !prevState); // toggle menuOpen state
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <nav className={classNames(scrollPosition > 0 ? 'shadow-md' : 'shadow-none', 
        'transition-shadow bg-white fixed w-full z-50 px-2 sm:px-6 md:px-22')}>
        <div className='p-5 flex items-center justify-between'>
            <Link href='/' className='flex-shrink-0' onClick={()=> window.scroll(0,0)}>
                <img src={'/assets/images/bws-logo.png'} className='w-60 md:w-72' alt='BWS logo' />
           </Link>

            {/* Mobile Icons */}
            <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
                <ion-icon name={menuOpen ? "close" : "menu"}   onClick={toggleMenu}></ion-icon>
            </span>

            {/* Nav Bar Elements */}
            <ul className={menuOpen? closedText : openedText}>
                <NavElement color={'text-black'} link='/our-team' text='Our Team' />
                <NavElement color={'text-black'} link='/invisalign' text='Invisalign' />
                <ServicesDropDown color={'text-black'} />
                <NavElement color={'text-black'} link='/contact' text='Contact' />
                <NavElement color={'text-black'} link='/before-first-visit' text='Before First Visit' />
                <Link href='/contact' className='mx-4 bg-[#0184C9] text-white px-4 py-3 rounded-lg hover:bg-[#1B9EE3] hover:duration-500' onClick={()=> window.scroll(0,0)}>Request Appointment</Link>
            </ul>
        </div>
      </nav>
    )
  }
  
  export default Header
  