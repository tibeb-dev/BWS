import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'

const Contact = () => {

  return (
    <>
        <Header />
        <section className='flex flex-col gap-8 mx-8 sm:mx-12 md:mx-44'>
            <h1 className='text-5xl text-center font-bold text-black pt-44'>Get In Touch</h1>
            <p className='text-xl text-center'>Contact us to request an appointment</p>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <ContactForm /> 
                <ContactInfo />
            </section>
        </section>
        <Footer />
    </>
  )
}

export default Contact
