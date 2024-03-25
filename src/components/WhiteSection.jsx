'use client'
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';
import React from "react";

const WhiteSection = (props) => {
    const HeaderTag = props.isHeaderH1 ? 'h1' : 'h2';

    return (
        <section className={props.header ? 'py-44' : 'py-16'}>
            <div className='flex flex-col-reverse md:flex-row md:justify-between mx-12 sm:mx-18 md:mx-18 lg:mx-36 gap-12'>
                <div className='flex flex-col gap-12'>
                    {/* Header & Content */}
                    <HeaderTag className='text-5xl text-black font-bold'>
                        {props.header.map((header, index) => (
                            <React.Fragment key={index}>
                                {ReactHtmlParser(header)}
                                <br/>
                            </React.Fragment>
                        ))}
                    </HeaderTag>
                    <p className='md:text-xl max-w-2xl whitespace-pre-line leading-9'>
                        {props.content.map((paragraph, index) => (
                            <React.Fragment key={index}>
                                {ReactHtmlParser(paragraph)}
                                <br/>
                            </React.Fragment>
                        ))}
                    </p>
                    {props.buttonText && 
                        <Link href={props.link} onClick={() => window.scroll(0, 0)}>
                            <button className='bg-[#0184C9] inline-block text-white px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500'>
                                {props.buttonText}
                            </button>
                        </Link>
                    }
                </div>
                {/* Photo */}
                <div className='relative flex justify-center items-center'>
                    {props.children}
                </div>
            </div>
        </section>
    );
};

export default WhiteSection;
