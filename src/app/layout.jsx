
import "./globals.css"

export const metadata = {
    title: 'Dentist in Kitsilano - Vancouver Clinic',
    description: 'Do you want to go to your dentist calm and confident? Get to know Broadway Smiles dental clinic in Vancouver. Read more about our services, schedule a visit.',
    keywords: 'dentist, Kitsilano, Vancouver, dental care, family dentist',
    robots:'index, follow',
  }
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>        
                {/* <!-- Social Media Meta Tags (Open Graph) --> */}
                <meta property="og:title" content="Dentist in Kitsilano, Vancouver Clinic" />
                <meta property="og:description" content="Your dental care provider in Kitsilano, Vancouver. Offering a range of dental services for you and your family." />
                <meta property="og:image" content="https://broadwaysmiles.ca/wp-content/uploads/2022/05/IMG_4819-scaled.jpeg" /> {/* URL to your main image */} 
                <meta property="og:url" content="https://broadwaysmiles.ca/" />
                <meta property="og:type" content="website" />
                {/* <!-- Google Search Console --> */}
                <meta name="google-site-verification" content="ij65qxOiyBaUFEiL4e25Fg9Vl129AW2S7Xgjg4h32Iw" />

                {/* <!-- Other SEO and Meta Tags --> */}
                <meta name="robots" content="index, follow" />  {/* <!-- Search engine instructions --> */}
                <link rel="canonical" href="https://broadwaysmiles.ca/" /> {/* <!-- Canonical URL --> */} 
            </head>
            <body>
                {/* <script type="module" src="/src/main.jsx"></script>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script> */}
                {children}
            </body>
        </html>

    )
  }