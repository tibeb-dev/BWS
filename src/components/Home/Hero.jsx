import Link from 'next/link';

function Hero() {

  return (
    <section className='overflow-x-hidden flex justify-center items-center'>
        <video src={'/assets/images/icons/phone.png'} poster={'/assets/images/videoPoster.png'} autoPlay loop muted playsInline className='w-full h-screen absolute object-cover -z-10 top-0 left-0 shadow-2xl' />
        {/* Grey Overlay */}
        <div className='w-full h-screen absolute top-0 left-0 bg-gray-950 opacity-60 -z-10'></div>
        <div className='px-0 sm:px-36 lg:px-72 w-[80%] h-screen flex flex-col justify-center text-white space-y-5 text-5xl sm:text-6xl md:text-7xl font-bold z-20 gap-8'>
            {/* Header */}
            <h1 className=''>Welcome To
              <br />
              <span className='text-[#25B4F8]'>Broadway Smiles</span>
            </h1>
            {/* Content */}
            <div className='flex gap-4'>
              <Link href='/contact' className='flex items-center bg-[#0184C9] font-normal text-xs sm:text-sm md:text-lg text-white px-4 py-0 rounded-lg hover:bg-[#1B9EE3] duration-500 shadow-lg'>Request Appointment</Link>
              <a href='tel:604-736-7377' className='flex items-center bg-white font-normal text-xs sm:text-sm md:text-lg text-[#1B9EE3] pr-4 py-1 rounded-lg border-2 border-[#0184C9] hover:border-[#1B9EE3] duration-500 shadow-lg'>
                <img src='/assets/images/icons/phone.png' alt='phone icon' />
                604-736-7377
              </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
