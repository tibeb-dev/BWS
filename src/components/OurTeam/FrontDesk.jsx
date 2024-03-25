

const assistants = [
    {
        name: 'Oxana Popkova',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team3/oxana.jpg'
    },
    {
        name: 'Alifa Rachma',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team3/alifa.jpg'
    },
];


const FrontDesk = () => {
    return (
        <section className='py-14'>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-4 md:gap-0'>
                <div className='flex flex-col justify-center items-center text-center gap-12'>
                    <h2 className='text-5xl text-black font-bold'>Our <br></br> Fantastic Front Desk Team</h2>
                    <p className='text-lg text-left md:text-xl max-w-6xl'>
                        Oxana and Alifa are dedicated to help you figure out all the logistics related to your appointments.
                        They are experts in helping you understand the fees of your treatments and guiding you in dealing with your insurance providers.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:p-12 md:space-x-4 rounded-box'>
                    {
                        // Map through the assistants array and return a div for each assistant
                        assistants.map((assistant, index) => {
                            return (
                                <div key={index} className='relative flex flex-col items-center justify-center rounded-lg border-2 drop-shadow-xl '>
                                    <img src={assistant.img} alt={assistant.name} className='object-cover rounded-lg  w-72 h-96' />
                                    <div className='absolute bottom-5 bg-[#111111] opacity-90 text-white rounded-lg p-3 w-[90%]'>
                                        <h3 className='text-xl font-medium'>{assistant.name}</h3>
                                        <p className='text-gray-400'>{assistant.title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FrontDesk;
