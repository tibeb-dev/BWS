import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamHero from '@/components/OurTeam/TeamHero'
import Doctors from '@/components/OurTeam/Doctors'
import Assistants from '@/components/OurTeam/Assistants'
import FrontDesk from '@/components/OurTeam/FrontDesk'

const OurTeam = () => {

  return (
    <>
        <Header />
        <TeamHero />
        <Doctors />
        <Assistants />
        <FrontDesk />
        <Footer />
    </>
  )
}

export default OurTeam
