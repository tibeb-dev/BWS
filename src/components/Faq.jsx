'use client'
import React from "react";
import ReactHtmlParser from 'react-html-parser';


const Faq = props => {
    const [selectedOption, setSelectedOption] = React.useState(null); // State to manage the selected option

    const handleRadioChange = (index) => {
        if (selectedOption === index) {
            // If the same option is clicked again, collapse it
            setSelectedOption(null);
          } else {
            // Otherwise, expand the selected option
            setSelectedOption(index);
          }
    };

    return (
        <div className='flex flex-col justify-center items-center p-12 rounded-box'>
            {
            props.arr.map(item => (
                <div key={item.index} className='group collapse collapse-plus text-black bg-white shadow-3xl w-full md:w-[70%] my-4 p-4'>
                    <input
                        type='checkbox'
                        name='my-accordion-3'
                        checked={selectedOption === item.index}
                        onChange={() => handleRadioChange(item.index)}
                    />
                    <div className={`collapse-title text-sm sm:text-md md:text-xl font-semibold ${selectedOption === item.index ? 'text-[#0184C9]' : ''}`}>{item.label}</div>
                    <div className='collapse-content'>
                    {
                        Array.isArray(item.content) ? <ul className='list-disc list-outside pl-5'>{item.content.map((content, index) => (
                            // <li className='list-outside ' key={index}>{content}</li>
                            <li key={index}>
                                <React.Fragment>
                                    {ReactHtmlParser(content)}
                                    <br/>
                                </React.Fragment>
                            </li>
                        ))}</ul> : <React.Fragment>
                            {ReactHtmlParser(item.content)}
                            <br/>
                        </React.Fragment>
                    }
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default Faq;
