'use client'
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';
import React from "react";

const BlueSection = props => {
    const HeaderTag = props.isHeaderH1 ? 'h1' : 'h2';

    return (
        <section className='bg-[#E5F6FF] py-14'>
            <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-row md:justify-between mx-12 sm:mx-18 md:mx-18 lg:mx-36 gap-12'>
                {/* Team Photo */}
                <div className='flex justify-center items-center'>
                    {props.children}
                </div>
                <div className='flex flex-col gap-12'>
                    {/* Header & Content */}
                    <HeaderTag className='text-5xl max-w-3xl text-black font-bold'>
                        {props.header.map((header, index) => {
                            return <span key={index}>{header}<br/></span>
                        })}
                    </HeaderTag>
                    {props.contentType === 'list' ? (
                        <ol className='list-decimal pl-5 text-xl space-y-3 max-w-3xl'>
                            {props.content.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ol>
                    ) : (
                        <p className='md:text-xl max-w-2xl whitespace-pre-line leading-9'>
                            {props.content.map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {ReactHtmlParser(paragraph)}
                                    <br/>
                                </React.Fragment>
                            ))}
                        </p>
                    )}
                    {props.buttonText && props.linkType === 'anchor' ? (
                        <a href={props.link} target='_blank' rel='noopener noreferrer'>
                            <button className='bg-[#0184C9] inline-block text-white px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500'>{props.buttonText}</button>
                        </a>
                    ) : props.buttonText && (
                        <Link href={props.link} onClick={()=> window.scroll(0,0)}>
                            <button className='bg-[#0184C9] inline-block text-white px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500'>{props.buttonText}</button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlueSection;
