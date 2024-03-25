'use client'

import { useState } from 'react';

const doctors = [
    {
        name: 'Dr. Dhia Mahmud',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/our-team/dhia-edited.jpg',
        bio: 'Dr. Dhia travelled to Europe to earn his dental degree from Semmelweis University in Budapest, Hungary. After obtaining his dental license in Canada, he travelled north to serve the rural communities of the Yukon practicing patient-centric dentistry. He spent much of his time there exploring the wild and spectacular landscapes of the North. Dhia strives to provide painless dentistry and aims to deliver all treatments in a low-stress and anxiety-free environment. Dhia is trained in minimal sedation techniques which he can offer to his apprehensive patients. He is excited to be back home with his wife living in the beautiful Kitsilano neighborhood, exploring the beautiful bike trails of the west coast, and playing tennis and soccer by the beach.'
    },
    {
        name: 'Dr. Asif Tejani',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/our-team/asif.jpg',
        bio: 'Dr. Asif Tejani completed his dental degree and post-graduate AEGD [Advanced Education in General Dentistry] program at the University of Pennsylvania.  He relocated to Vancouver to complete his GPR [General Practice Residency] program at UBC.  However, one year was just not enough to hike all the mountains, kayak all the fjords, bike all the trails and swim in all the water bodies of this beautiful province.  He has thus resigned himself to live here as long as BC will have him.  Asif served as Clinic Coordinator of the VGH, Department of Dentistry for 15 years and is currently a consultant and clinician at Oral Oncology, BC Cancer Hospital.  He is passionate about a holistic approach to dental care and likes to believe that he works hard and plays hard too.'
    },
    {
        name: 'Melanie Lee',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/our-team/melanie-edited.jpg',
        bio: 'Melanie came to Vancouver to study biology at UBC followed by dental hygiene at VCC.  She enjoys meeting new people in the clinic as well as reconnecting with familiar faces. Melanie values her work as part of a collaborative process with clients to achieve their oral health care goals. Outside the clinic, she can be found cooking, gardening, nordic skiing, or cycling the local roads and gravel trails.  '
    },
    {
        name: 'Jen Pendleton',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/our-team/jen-edited.jpg',
        bio: 'Jen received her diploma in dental hygiene with honours from the Canadian National Institute of Health in Ottawa. Her passion for dentistry started at an early age in her parent’s dental office in Kelowna where she spent her free time exploring and gathering knowledge about the profession. She strives to provide gentle, efficient, and effective treatment while developing fun and interactive environment for her patients. When Jen is not in the office, she is usually planning her next trip to other countries all over the world. Since 2015, she has traveled from Europe to Asia and everything in between and lived in Australia for 2 years. She is happy to call Vancouver home and is continuing to explore everything our beautiful city has to offer.'
    }
];


const Doctors = () => {
    const initialState = doctors.map(() => false);
    const [showMore, setShowMore] = useState(initialState);

    function showMoreText(index) {
        const newShowMore = showMore.map((item, i) => {
            if (i === index) 
                return !showMore[i];
            else
                return showMore[i];
        })
        setShowMore(newShowMore);
    }

    return (
        <section className='py-14 mx-12 md:mx-24 flex flex-col items-center justify-center gap-14'>
            <h2 className='text-5xl text-black font-bold'>Meet Our Providers</h2>

            {
                // Map through the doctors array and return a div for each doctor
                doctors.map((doctor, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center md:flex-row gap-8'>
                            <img className='w-full sm:w-[55%] md:w-72 md:h-full rounded-lg' alt={`${doctor.name} - ${doctor.title}`} src={doctor.img} />
                            <div className='flex flex-col sm:w-[55%] md:w-full items-start gap-1'>
                                <h2 className='text-2xl font-bold text-[#0184C9]'>{doctor.name}</h2>
                                <h3 className='text-lg text-center font-bold text-black'>{doctor.title}</h3>
                                <p className={'text-lg hidden md:block'}>{doctor.bio} </p>
                                <span className='block md:hidden'>
                                    {showMore[index] ? <p className='text-lg'>{doctor.bio}</p> : <p className='text-lg'>{doctor.bio.slice(0, 201)}...</p>}
                                    {showMore[index] ? <button onClick={() => showMoreText(index)} className='text-lg text-[#0184C9]'>Show Less</button> : <button onClick={() => showMoreText(index)} className='text-lg text-[#0184C9]'>Show More</button>}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default Doctors;
