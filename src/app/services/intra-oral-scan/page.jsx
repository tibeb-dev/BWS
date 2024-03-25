import Header from '@/components/Header'
import Footer from '@/components/Footer'

import WhiteSection from '@/components/WhiteSection'
import BlueSection from '@/components/BlueSection'

const IntraOralHealthScan = () => {
  return (
    <>
        <Header />
        <WhiteSection
            header={['Intra Oral Health Scan']}
            content={['IOS- Intra-Oral Scanning', 'Where Precision Meets Prevention! At Broadway Smiles, we take immense pride in enrolling all our patients in our monitoring program. Our radiation-free scanner captures detailed 3D models of your mouth, allowing us to meticulously track any shifts in teeth, traumatic wear, and assess gum health and recession levels with accuracy.']}
            buttonText='Request Appointment'
            link='/contact'
        >
            <img src={'/assets/images/intra-oral.png'} alt='Intra Oral Health Scan' />
        </WhiteSection>
        <BlueSection
          header={['Why we choose to consume our time with you using the iTero?']}
          content={[
            `<b>Comprehensive Monitoring:</b> offers a comprehensive view of your oral health, enabling us to identify potential issues early on
            `,
            `<b>Occlusion Diagnosis:</b> Occlusion is the medical term for our bite: how the
            top and lower jaw meet during chewing. A traumatic occlusion is linked to many other conditions in the mouth. Causing gum recession, bone loss, failing restorations, and even tooth cracks and fractures. Many of these conditions can be diagnosed earlier and addressed proactively.
            `,
            `<b>Bite Map Visualization:</b> view your bite with the bite map, helping us identify teeth making too much contact and preventing long-term traumatic bite issues that could lead to wear and fractures of fillings, crowns, or teeth.`
        ]}
        >
            <img src={'/assets/images/staggered.png'} alt='staggered images of intra health scan' />
        </BlueSection>
        <WhiteSection
          header={['Niri Imaging']}
          content={['Niri is a new technology that uses near-infrared light to detect cavities in teeth. It is a safe, non-invasive, and painless way to detect cavities in their earliest stages.']}
        >
            <img src={'/assets/occlusal-view.gif'} className='rounded-lg' alt='Occlusal view' />
        </WhiteSection>
        {/* <BlueSection
          header={['Occlusion Bite Map']}
          content={['Detects cavities in their earliest stages','No radiation exposure','No discomfort','No need for x-rays','Can detect cavities under existing fillings','Can detect cavities in between teeth']}
          contentType='list'
          buttonText='Learn More'
        >
            <img src={intraOralHealthScanImage2} alt='Intra Oral Health Scan' />
        </BlueSection> */}
        <Footer />
    </>
  )
}

export default IntraOralHealthScan