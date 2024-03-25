

const TeamHero = () => {
    return (
        <section className='py-14 mx-6 md:mx-28 flex flex-col items-center gap-8'>
            <h1 className='mt-28 text-5xl text-black font-bold'>Our Team</h1>
            <p className='text-lg text-left md:text-xl max-w-7xl'>Meet Our Incredible Team - The Heartbeat of Broadway Smiles! Every day, our
dedicated staff comes to work with a singular mission – to provide an elevated
patient experience. Get to know the faces behind your care, and discover why
Broadway Smiles is a truly special place for your oral well-being.</p>
            <div className='hidden md:grid md:grid-cols-2 gap-8'>
                <img className='w-96 h-72 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo.jpg'} alt='team photo 1' />
                <img className='w-96 h-72 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo2.jpg'} alt='team photo 2' />
                <img className='w-96 h-72 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo3.jpg'} alt='team photo 3' />
                <img className='w-96 h-72 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo4.jpg'} alt='team photo 4' />
            </div>
            <div className='carousel md:hidden space-x-4'>
                <div className='carousel-item'>
                    <img className='w-72 h-60 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo.jpg'} alt='team photo 1' />
                </div>
                <div className='carousel-item'>
                    <img className='w-72 h-60 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo2.jpg'} alt='team photo 2' />
                </div>
                <div className='carousel-item'>
                    <img className='w-72 h-60 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo3.jpg'} alt='team photo 3' />
                </div>
                <div className='carousel-item'>
                    <img className='w-72 h-60 rounded-lg object-cover' src={'/assets/images/staff-photos/team-photo4.jpg'} alt='team photo 4' />
                </div>
            </div>
        </section>
    );
};

export default TeamHero;
