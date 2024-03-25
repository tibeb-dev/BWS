'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Link from "next/link";

const services = [
    {
        name: 'Sedation',
        img: '/assets/images/services/sedation.png',
        description: 'At Broadway Smiles we understand that dental visits can be challenging for some patients, and we\'re here to create a calming experience tailored just for you. Don\'t let fear or anxiety delay your visits – our Minimal Sedation Services ensure a soothing environment for routine treatments.',
        link: '/services/sedation',
    },
    {
        name: 'Oral Recare Program',
        img: '/assets/images/services/oral-recare.png',
        description: 'The Oral recare Program – the personalized path to dental Wellness! At Broadway Smiles, we go beyond routine check-ups; we embrace a proactive approach to optimal dental health. With our meticulous Oral Recare Program, we tailor a plan for each patient, closely monitoring their teeth and gums and occlusion.',
        link: '/services/oral-recare-program',
    },
    {
        name: 'Intra Oral Health Scan',
        img: '/assets/images/services/oral-recare.png',
        description: 'Where Precision Meets Prevention! At Broadway Smiles, we take immense pride in enrolling all our patients in our monitoring program. Our radiation-free scanner captures detailed 3D models of your mouth, allowing us to meticulously track any shifts in teeth, traumatic wear, and assess gum health and recession levels with accuracy.',
        link: '/services/intra-oral-scan',
    },
    {
        name: 'General Dentistry',
        img: '/assets/images/services/general-dentistry.png',
        description: 'Whether you require restorations due to decay or need to restore a tooth from a break or fracture, we will help guide you through the process to the best option. We work with high-end materials that are meticulously matched to the need of your teeth, providing not only strength but also aesthetic appeal.',
        link: '/services/general-dentistry',
    },
    {
        name: 'Professional Whitening',
        img: '/assets/images/services/professional-whitening.png',
        description: 'Philips Zoom Professional Whitening is a popular dental procedure designed to effectively whiten teeth and provide patients with a brighter, whiter smile. The procedure involves the use of a hydrogen peroxide-based gel and an LED light source.',
        link: '/services/professional-whitening',
    },
    {
        name: 'Botox treatment',
        img:'/assets/images/services/botox-treatment.png',
        description: 'At Broadway smiles, we offer specialized Botox services designed to provide both therapeutic relief and aesthetic enhancement. Our experienced dentist combines precision and expertise to safely administer the neurotoxin',
        link: '/services/botox-treatment',
    },
]

const Services = () => {
  return (
    <>
        <Header />
        <section className='flex flex-col items-center gap-14 pt-44 mx-6 md:mx-28'>
            <h1 className='text-5xl text-black font-bold'>Services</h1>
            <p className='md:text-xl max-w-[80%] text-left'>
                Broadway smiles is dedicated to comprehensive, safe, and comfortable oral health care. 
                We prioritize your well-being with advanced dentistry, top-quality equipment, a cozy office, and a friendly staff, ensuring painless and exceptional dental experiences.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%]'>
                {
                    services.map((service, index) => {
                        return (
                            <Link href={service.link} 
                                key={index} 
                                className='bg-white flex flex-col gap-4 shadow-2xl rounded-xl transition-transform ease-out delay-150 hover:-translate-y-2 hover:scale-100 duration-400'
                                onClick={()=> window.scroll(0,0)}
                            >
                                <img className='w-full rounded-t-xl active:opacity-80' alt={service.name} src={service.img} />
                                <div className='flex flex-col items-start gap-1 px-4 pb-8'>
                                    <h2 className='text-2xl font-bold text-[#0184C9] hover:text-[#0184C9]'>{service.name}</h2>
                                    <p className='text-lg line-clamp-2'>{service.description}</p>
                                    <p className='text-lg text-[#0184C9] hover:underline'>Learn More →</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>  
        </section>
        <Footer />
    </>
  )
}

export default Services
