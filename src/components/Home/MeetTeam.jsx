// Note: Meet The Team Component
'use client'
import { TeamCarousel } from '../TeamCarousel';
import Link from 'next/link';


const MeetTeam = () => {
    return (
        <section className='bg-[#E5F6FF] py-14'>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36'>
                <div className='flex flex-col justify-center items-center text-center gap-12'>
                    <h2 className='text-5xl text-black font-bold'>Meet The Team</h2>
                    <p className='md:text-xl max-w-7xl text-left'>
                        Meet the Heart of our Dental Family! Our team of dedicated dentists, hygienists,
                        assistants, and admins are here to welcome you with warm smiles. Together, we
                        are committed to promoting optimal health for your teeth, gums, and bite. Scroll
                        through to get to know the friendly faces behind the masks.  
                        <Link href={'/our-team'} onClick={()=> window.scroll(0,0)} className='text-black font-semibold inline-flex pl-2'>
                            <span className='flex gap-2 items-center hover:opacity-80 hover:transition-opacity hover:duration-150'>Meet Our Team <img src='/assets/images/icons/link-icon.png' height='18px' width='18px' alt="Link Icon" /></span>
                        </Link> 
                    </p>
                    <TeamCarousel />
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
