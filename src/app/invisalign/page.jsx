import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import WhiteSection from '@/components/WhiteSection'
import BlueSection from '@/components/BlueSection'

const invisalignFAQ = [
  { 
    index: 1, 
    label: 'How often should I wear my Invisalign aligners?', 
    content: 'For optimal results, it is recommended to wear your aligners for 20-22 hours per day, only removing them for eating, drinking, and oral hygiene.' 
  },
  { 
    index: 2, 
    label: 'Can I eat with my Invisalign aligners in place?', 
    content: 'The trays are strong enough to allow you to eat with them, however they may get scratches or stained from the food. If you choose to eat with them, it is mandatory to take them out after your meal to clean the trays and to clean your teeth.'
  },
  { 
    index: 3, 
    label: 'Can I drink with my Invisalign aligners in place?', 
    content: 'Drinking water is safe. For any other drink, it is recommended to take them off to drink or to drink with the trays on but it is mandatory to take the trays after, rinse and clean the trays and your teeth. Especially if you are drinking juice, pop, wine, or tea &amp; coffee with sugar or cream.'
  },
  { 
    index: 4, 
    label: 'How long does Invisalign treatment typically take?', 
    content: 'Treatment duration varies depending on individual cases. On average, it takes about 12-18 months, but this can be longer or shorter based on your specific needs.'
  },
  {
    index: 5,
    label: 'Are there any restrictions on the types of cases Invisalign can treat?',
    content: 'Invisalign is effective for a wide range of orthodontic issues, but severe cases may require alternative treatments. Our dentist will assess your eligibility during the consultation.'
  },
  {
    index: 6,
    label: 'Is Invisalign suitable for teenagers?',
    content: 'Yes, Invisalign offers a specific line designed for teenagers, addressing the unique orthodontic needs of younger patients.'
  },
  {
    index: 7,
    label: 'Will Invisalign aligners affect my speech?',
    content: 'Initially, you may experience a slight adjustment period as you get used to wearing the aligners. However, most patients adapt quickly, and any impact on speech is usually temporary.'
  },
  {
    index: 8,
    label: 'How do I clean my Invisalign aligners?',
    content: 'Cleaning your aligners is simple. Rinse them with lukewarm water and use a soft toothbrush to gently brush away any debris. Avoid using hot water, as it can deform the aligners. Specialized cleaning crystals or solutions can also be used as recommended.'
  },
  {
    index: 9,
    label: 'Can I still play musical instruments or participate in contact sports while wearing Invisalign?',
    content: 'Yes, you can continue to play musical instruments and participate in most sports with Invisalign. If you are involved in contact sports, it is advisable to use a protective mouthguard, which can be custom-made to fit over your aligners.'
  },
  {
    index: 10,
    label: 'What happens if I lose or damage one of my Invisalign aligners?',
    content: 'If you lose or damage an aligner, contact our office immediately. Depending on your stage of treatment, we will advise whether to move on to the next set of aligners or wear the previous set until a replacement is provided. Never skip ahead without consulting our team.'
  },
  // Add more options as needed
];

const Invisalign = () => {

  return (
    <>
        <Header />
        <WhiteSection
            header={['Invisalign Dentistry']}
            isHeaderH1={true}
            content={[
              `Clear aligners work by utilizing a series of custom-made, transparent trays that gradually shift your teeth into the desired position. With the following easy steps, you will start your journey:

                <b>Digital Impressions:</b> Our team will take digital impressions and records of your teeth, creating a precise 3D model of your bite.
                
                <b>Treatment Plan:</b> the dentist will design a personalized treatment plan that maps out the gradual movement of your teeth from their current position to the final desired alignment.
                
                <b>Trays Fabrication:</b> a series of custom aligner trays will be fabricated specifically to fit your unique dental structure.
                
                <b>Wearing the Aligners:</b> Patients wear each set of aligners for about 20-22 hours a day, changing to a new set approximately every 7 days.
                
                <b>Monitoring Progress:</b> Regular check-ups are necessary to allow our dentist to monitor your progress and make any necessary adjustments to ensure your teeth are moving according to the treatment plan.
              `
          ]}
        >
          <img src={'/assets/images/invisalign.jpg'} alt='Invisalign' />
        </WhiteSection>
        <BlueSection 
            header={['Smileview Simulator']} 
            content={[`Visualize a simulation of potential results of your Invisalign journey using the SmileView app – a powerful tool that provides a personalized simulation of your post-treatment smile. It's an innovative and easy way to see the transformative impact of Invisalign before even starting.`]}
            buttonText='Try it now'
            link='https://providerbio.invisalign.com/sv/1399318#start'
            linkType='anchor'
        >
          <img src={'/assets/SmileView_Animation.gif'} className='rounded-xl h-[400px] w-[450px] object-cover shadow-md' alt='Smileview animation' />
        </BlueSection>
        <section className='flex flex-col items-center justify-center gap-8'>
            <h2 className='mt-28 text-5xl text-black font-bold'>Cases</h2>
            <p className='text-lg text-left md:text-xl max-w-7xl'>Check out these before and after cases and see how Invisalign can transform your teeth and bite.</p>
            <p className='text-md text-center mx-6 md:mx-28'>16 year old female 8 months in treatement</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <img className='w-96 h-72 rounded-lg' src={'/assets/images/before-after/PB-before.jpg'} />
                <img className='w-96 h-72 rounded-lg' src={'/assets/images/before-after/PB-after.jpg'} />
            </div>
            <p className='text-md text-center mx-6 md:mx-28'>59 year old female 9 months in treatment</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <img className='w-96 h-72 rounded-lg' src={'/assets/images/before-after/LF-before.jpg'} />
                <img className='w-96 h-72 rounded-lg' src={'/assets/images/before-after/LF-after.jpg'} />
            </div>
            <p className='text-md text-center mx-6 md:mx-28'>51 year old male, 9 months in treatment</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <img className='w-96 h-56 rounded-lg' src={'/assets/images/before-after/SS-before.jpg'} />
                <img className='w-96 h-56 rounded-lg' src={'/assets/images/before-after/SS-after.jpg'} />
            </div>
        </section>
        <section className='bg-[#E5F6FF] pt-14 my-14'>
          <h2 className='text-5xl text-center text-black font-bold'>Frequently Asked Questions</h2>
          <Faq arr={invisalignFAQ} />
        </section>
        <Footer />
    </>
  )
}

export default Invisalign;
