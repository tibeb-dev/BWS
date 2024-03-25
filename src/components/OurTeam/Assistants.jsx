

const assistants = [
    {
        name: 'Anabelle',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/anabelle.jpg'
    },
    {
        name: 'Lois',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/anabelle.jpg'
    },
    {
        name: 'Aisling',
        title: 'Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/anabelle.jpg'
    },
];


const Assistants = () => {
    return (
        <section className=''>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-4 md:gap-0'>
                <div className='flex flex-col justify-center items-center text-center gap-12'>
                    <h2 className='text-5xl text-black font-bold'>Our <br></br>Awesome Assistants</h2>
                    <p className='text-lg text-left md:text-xl max-w-6xl'>
                        We would love for you to get to know our assistants more. They will be accompanying the dentist in all your visits. They are involved in your care and can help answer any questions about your procedures. They would love to know how they can make your visit more comfortable.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row md:p-12 space-y-4 md:space-y-0 md:space-x-4 rounded-box'>
                    {
                        // Map through the assistants array and return a div for each assistant
                        assistants.map((assistant, index) => {
                            return (
                                <div key={index} className='relative flex flex-col items-center justify-center drop-shadow-lg border-2 rounded-lg'>
                                    <img src={assistant.img} alt={assistant.name} className='object-cover rounded-lg w-72 h-96' />
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

export default Assistants;
