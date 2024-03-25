import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq';
// Visit Hero

import WhiteSection from '@/components/WhiteSection';
import BlueSection from '@/components/BlueSection';


const radioData = [
  { 
    index: 1, 
    label: 'How do I schedule my first appointment?', 
    content: 'To schedule your first appointment, you can call our office during business hours, or use our online appointment request form to request an appointment. Our friendly team will assist you in finding a convenient time for your visit.' 
  },
  { 
    index: 2, 
    label: 'What should I bring to my first appointment?', 
    content: 'Please bring any dental insurance information, a list of current medications, and, if applicable have any previous dental records or X-rays be sent to our office. If you have completed new patient forms beforehand, it will help expedite your check-in process.' 
  },
  { 
    index: 3, 
    label: 'Do you accept my dental insurance?', 
    content: 'We accept a variety of dental insurance plans. Our team is experienced in navigating different insurance policies. Feel free to provide your insurance details when scheduling your appointment, and we will help verify your coverage.' 
  },
  { 
    index: 4, 
    label: 'How does direct billing to insurance work?', 
    content: 'At Broadway Smiles, we offer direct billing to many insurance providers. This means that, once you\'ve provided your insurance information, we\'ll handle the billing process on your behalf, saving you time and paperwork.' 
  },
  { 
    index: 5, 
    label: 'Is there a cost for the first visit, and what payment options do you accept?', 
    content: 'The cost of your first visit will depend on the services provided and your insurance coverage. We accept various payment options, including cash, credit cards, and personal checks. Our team can provide you with an estimate of costs before your appointment.' 
  },
  { 
    index: 6, 
    label: 'What COVID-19 safety measures are in place at the clinic?', 
    content: 'Your safety is our priority. We have implemented rigorous COVID-19 safety protocols, including enhanced sanitation, screening procedures, and social distancing measures. Please review our COVID-19 safety guidelines on our website for more details.' 
  },
  { 
    index: 7, 
    label: 'Do I need to arrive early for my appointment?', 
    content: 'We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and ensure a smooth check-in process. If you\'ve already submitted your new patient forms online, this step can be expedited.' 
  },
  { 
    index: 8, 
    label: 'What if I have dental anxiety?', 
    content: 'We understand that some patients may experience dental anxiety. Our dentists and team are trained to provide a comforting environment, and we encourage open communication about any concerns you may have.' 
  },
];

const BeforeFirstVisit = () => {

  return (
    <>
        <Header />
        <WhiteSection
            header={['Before Your First Visit']}
            content={
              [
              'We are thrilled that you chose Broadway Smiles to be your dental home. To ensure a seamless and comfortable experience, we have prepared this guide to familiarize you with what to expect before your first visit.', 
              '', 
              'We understand that a visit to the dentist can be a new experience for some. Rest assured, our friendly and knowledgeable team is here to guide you through every step of your visit. From the moment you walk through our doors, our goal is to make you feel welcomed, informed, and well-cared for.'
            ]}
            buttonText={'Request Appointment'}
            link={'/contact'}
        >
          <img src={'/assets/images/BeforeFirstVisit.png'} alt='team photo' />
        </WhiteSection>
        <BlueSection 
          header={['Understanding Your Insurance']}
          content={[`Navigating insurance information can be overwhelming, but we're here to help. Before your first visit, take a moment to review your insurance details. If you have any questions or concerns, don't hesitate to reach out to our team. We're more than happy to assist you in understanding your coverage and benefits. To make your experience even more hassle-free, we offer direct billing to your insurance. Our team will work closely with you to streamline the billing process, allowing you to focus on your dental care rather than paperwork. If you have specific questions about the direct billing process, feel free to inquire during your visit or contact us beforehand.`]}
        >
          <img src={'/assets/images/insurance.png'} alt='team photo' />
        </BlueSection>

        <WhiteSection
            header={['Virtual Clinic Tour']}
            content={['Curious about what awaits you, we invite you to take a virtual tour of our clinic. Explore our modern and inviting space from the comfort of your own home, so you can arrive for your first visit with a sense of familiarity.']}
        >
          <img src={'/assets/images/BeforeFirstVisit.png'} alt='team photo' />
        </WhiteSection>
        <section className='bg-[#E5F6FF] pt-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>Frequently Asked Questions</h2>
          </div>
          <Faq arr={radioData} />
        </section>
        <Footer />
    </>
  )
}

export default BeforeFirstVisit
