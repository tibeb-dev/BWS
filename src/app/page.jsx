

import TransparentHeader from '@/components/TransparentHeader'
import Hero from '@/components/Home/Hero'
import MeetTeam from '@/components/Home/MeetTeam'
import GoogleReviews from '@/components/Home/GoogleReviews'
import Instagram from '@/components/Home/Instagram'
import Footer from '@/components/Footer'
import GoogleMaps from '@/components/GoogleMaps'

import WhiteSection from '@/components/WhiteSection'
import BlueSection from '@/components/BlueSection'

const Home = () => {

  const whiteSectionsData = [
    {
      header: ['We Create', 'Beautiful Smiles'],
      isHeaderH1: false,
      content: ['Welcome to Broadway Smiles where your healthy smile is our top priority! Step into a comfortable space of dental excellence, where state-of-the-art equipment meets advanced techniques, ensuring the overall well-being of your teeth, gums and bite.'],
      buttonText: 'Learn More',
      image: '/assets/images/hero-image.jpg'
    },
    {
      header: ['Located In Kitsilano'],
      isHeaderH1: false,
      content: ["The office enjoys a prime location near UBC, ensuring a quick and convenient 30-minute bus ride to the vibrant Kitsilano area. By opting for the 99 bus route, specifically heading to Commercial Broadway, you'll find yourself effortlessly arriving at the clinic. This strategic placement underscores our dedication to offering accessible services, particularly for students, and we look forward to welcoming you with ease."],
      buttonText: 'Request Appointment',
      link: '/contact',
      component: <GoogleMaps />
    }
  ];

  return (
    <>
        <TransparentHeader />
        <Hero />
        <WhiteSection 
            header={['We Create', 'Beautiful Smiles']} 
            isHeaderH1={true}
            content={[
              `Welcome to Broadway Smiles where your healthy smile is our top priority! Step into a comfortable space of dental excellence, where state-of-the-art equipment meets advanced techniques, ensuring the overall well-being of your teeth, gums and bite.

               At Broadway Smiles, we go beyond routine check-ups – we are dedicated to the art of prevention, safeguarding your dental health with precision and care. Our commitment starts by close monitoring your overall health to ensure a radiant smile that lasts a lifetime.
            `]}
        >
          <img src='/assets/images/hero-image.jpg' alt='team photo' />
        </WhiteSection>
        <BlueSection 
            header={['What To Expect']} 
            content={['Welcome to our clinic! I\'m Dhia, your dedicated dentist and proud owner of this community-focused dental clinic nestled in the heart of beautiful Kitsilano. As a preventative dentist, my passion is to empower my patients with the knowledge to prevent dental issues. At Broadway Smiles, we believe in the power of education to pave the way for the best oral health. It\'s not just about fixing problems; it\'s about preventing them from occurring in the first place.']}
            buttonText={'Request Appointment'}
            link={'/contact'}
        >
          <img src='/assets/images/dhia.png' className='' alt='Dhia' />
        </BlueSection>

        {/* <WhatToExpect /> */}

        <WhiteSection
          header={['Located In Kitsilano']}
          isHeaderH1={false}
          content={["Living in this vibrant Kitsilano neighbourhood is not just a choice; it's a privilege! We are committed to keep our community’s smiles radiate with health and happiness. The office enjoys a prime location near UBC, ensuring a quick and convenient 30-minute bus ride to the vibrant Kitsilano area. By opting for the 99 bus route, specifically heading to Commercial Broadway, you'll find yourself effortlessly arriving at the clinic. This strategic placement underscores our dedication to offering accessible services, particularly for students, and we look forward to welcoming you with ease."]}
          buttonText={'Request Appointment'}
          link={'/contact'}
        >
          <GoogleMaps />
        </WhiteSection>
        <MeetTeam />
        <GoogleReviews />
        <Instagram />
        <Footer />
    </>
  )
}

export default Home