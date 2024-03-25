'use client'
import { useEffect } from "react";

const Instagram = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          const link = document.querySelector('.elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9 a[href*="elfsight.com"]');
          if (link) {
            link.style.display = 'none';
            clearInterval(interval);
          }
        }, 100);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <section className='bg-[#E5F6FF] py-14'>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-12'>
                <h2 className='text-5xl text-black font-bold'>Our Instagram</h2>
                <p className='md:text-xl max-w-3xl text-left'>Follow us on our social media pages to stay connected with us between visits!
Catch all the latest tips and advice for optimal oral health from our dental
professionals.</p>
                <div className="elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9" data-elfsight-app-lazy></div>
                <style>{`
                    .elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9 a[href*="elfsight.com"] {
                        display: none !important;
                        z-index: 0;
                    }
                `}
                </style>
            </div>
        </section>
    );
};

export default Instagram;
