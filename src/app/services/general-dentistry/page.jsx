import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhiteSection from '@/components/WhiteSection'
import Procedures from '@/components/Procedures'
import Faq from '@/components/Faq'


import {dentalProcedures, RCT, Crown, Bridge, wisdomTeeth, Veneers, inlayOnlay, PostCore } from '@/data/generalDentistry'

const GeneralDentistry = () => {
  return (
    <>
        <Header />
        <WhiteSection
            header={['General Dentistry']}
            isHeaderH1={true}
            content={[
              'Whether you require restorations due to decay or need to restore a tooth from a break or fracture, we will help guide you through the process to the best option. We work with high-end materials that are meticulously matched to the need of your teeth, providing not only strength but also aesthetic appeal.',
              '',
              'If a tooth is compromised beyond repair, we can help you navigate the best course of action. Our compassionate team is experienced in tooth extractions and will guide you through the process with utmost care and attention. Moreover, we understand the importance of restoring the spaces left by extracted teeth. We offer a range of acceptable substitutes, ensuring your smile remains complete and functional.'
          ]}
            buttonText='Request Appointment'
            link='/contact'
        >
          <img src={'/assets/images/general-dentistry.png'} alt='General Dentistry' />
        </WhiteSection>

        <Procedures />

        <section className='my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Dental Procedures</h2>
          </div>
          <Faq arr={dentalProcedures} />
        </section>
        <section className='bg-[#E5F6FF] pt-14 my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about RCT</h2>
          </div>
          <Faq arr={RCT} />
        </section>
        <section className='my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Crown</h2>
          </div>
          <Faq arr={Crown} />
        </section>
        <section className='bg-[#E5F6FF] pt-14 my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Bridge</h2>
          </div>
          <Faq arr={Bridge} />
        </section>
        <section className='my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Wisdom Teeth Extraction</h2>
          </div>
          <Faq arr={wisdomTeeth} />
        </section>
        <section className='bg-[#E5F6FF] pt-14 my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Veneers</h2>
          </div>
          <Faq arr={Veneers} />
        </section>
        <section className='my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Inlay/Onlay</h2>
          </div>
          <Faq arr={inlayOnlay} />
        </section>
        <section className='bg-[#E5F6FF] pt-14 my-14'>
          <div className='flex flex-col justify-center items-center text-center gap-12'>
              <h2 className='text-5xl text-black font-bold'>FAQ about Post and Core</h2>
          </div>
          <Faq arr={PostCore} />
        </section>
        <Footer />
    </>
  )
}

export default GeneralDentistry