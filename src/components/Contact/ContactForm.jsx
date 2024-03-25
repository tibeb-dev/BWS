'use client'
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';


const ContactForm = () => {

    const form = useRef();
    const [submitState, setSubmitState] = useState(null);
    const { 
        register, 
        handleSubmit, 
        reset,
        formState,
        formState: { errors, isSubmitSuccessful } 
    } = useForm();

    useEffect(() => {
      if (formState.isSubmitSuccessful) {
        reset()
      }
    }, [formState, reset])

    const sendEmail = async (e) => {
      try {
        const result = await emailjs.sendForm('service_w8jj89f', 'template_p3zqdtf', form.current, '3iYWUt2TZCahDAGie');
        console.log(result.text);
        setSubmitState('success');
      } catch (error) {
        console.error(error);
        setSubmitState('error');
      }
  
      setTimeout(() => {
        setSubmitState(null);
      }, 3000);
    };

    return (
      <div className='border-2 border-[#25B4F8] h-auto md:h-auto overflow-hidden rounded-lg'>
        <form
          className='flex flex-col m-10 gap-12'
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className='flex flex-col form-lg:flex-row justify-between gap-8'>
            <div className='flex flex-col flex-grow'>
              <label>
                First Name <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='text'
                {...register('first_name', {
                  required: 'This is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                placeholder='First Name'
                className={`border border-${errors.first_name?.message ? 'rose-500' : 'gray-300' } rounded-md p-3 md:p-4`}
              />
              <p className='text-red-500 font-semibold'>
                {errors.first_name?.message}
              </p>
            </div>
            <div className='flex flex-col flex-grow'>
              <label>
                Last Name <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='text'
                {...register('last_name', {
                  required: 'This is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                placeholder='Last Name'
                className={`border border-${errors.last_name?.message ? 'rose-500' : 'gray-300' } rounded-md p-3 md:p-4`}
              />
              <p className='text-red-500 font-semibold'>
                {errors.last_name?.message}
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <label>
              Email <span className='text-red-500 font-bold'>*</span>
            </label>
            <input
              type='email'
              {...register('client_email', {
                required: 'This is required',
                pattern: {
                  value: /^([A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder='Email'
              className={`border border-${errors.client_email?.message ? 'rose-500' : 'gray-300' } rounded-md p-3 md:p-4`}
            />
            <p className='text-red-500 font-semibold'>
              {errors.client_email?.message}
            </p>
          </div>
          <div className='flex flex-col'>
            <label>
              Phone Number <span className='text-red-500 font-bold'>*</span>
            </label>
            <input
              type='tel'
              {...register('client_phone', {
                required: 'This is required',
                pattern: {
                  value: /^(?:\+?1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: 'Invalid phone number',
                },
              })}
              placeholder='+1 (604) 000-0000'
              className={`border border-${errors.client_phone?.message ? 'rose-500' : 'gray-300' } rounded-md p-3 md:p-4`}
            />
            <p className='text-red-500 font-semibold'>
              {errors.client_phone?.message}
            </p>
          </div>
          <div className='flex flex-col'>
            <label>Message</label>
            <textarea
              {...register('client_message')}
              className='border border-gray-300 rounded-md px-2 pb-6 md:px-4 md:pt-4 md:pb-24 resize-none'
            />
            <p className='text-red-500 font-semibold'>
              {errors.client_message?.message}
            </p>
          </div>
          <button className='mx-auto bg-[#0184C9] text-white px-4 py-3 rounded-lg hover:bg-[#1B9EE3] duration-500 '>
            Request Appointment
          </button>
        </form>
        {submitState === 'success' && (
          <div role='alert' className='toast'>
            <div className='alert alert-success text-white'>
              <span>Message Sent Successfully</span>
            </div>
          </div>
        )}
        {submitState === 'error' && (
          <div role='alert' className='toast'>
            <div className='alert alert-error text-white'>
              <span>Error, please try again</span>
            </div>
          </div>
        )}
      </div>
    );
}
        
export default ContactForm;