/** @format */

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactUs({ reference }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    const mailObj = {
      name: data.name,
      email: data.email,
      subject: 'Contacting From Landing Page',
      message: data.message,
    };
    let response = await axios.post(`http://54.196.153.108:8080/api/contact`, mailObj);
    // console.log(response.data);
    alert(response.data.message || 'Please try again later, Thank You.');
    if (response.data.success) {
      reset();
    }
  };
  // console.log(errors)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBlock: '5vw',
        boxSizing: 'border-box',
        paddingInline: '5vw',
      }}
    >
      <h1
        ref={reference}
        style={{
          fontWeight: 700,
          marginBottom: 50,
          color: '#2F77AD',
          fontSize: 'calc(16px + 3vw)',
        }}
      >
        Contact Us
      </h1>
      <div
        style={{
          boxShadow: '3px 9px 31px rgb(208, 208, 208)',
          backgroundColor: 'white',
          borderRadius: 13,
          maxWidth: 650,
          width: '100%',
          paddingInline: 'calc( 3vw + 20px )',
          paddingBlock: 50,
          boxSizing: 'border-box',
          marginInline: 20,
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <label style={{ color: '#4F4F4F' }} htmlFor='Name'>
            Full Name *
          </label>
          <input
            style={{
              border: errors.name ? '2px solid red' : '1px solid #B4BEC8',
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.name ? 0 : 16,
            }}
            placeholder='Full Name'
            id='Name'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p style={{ color: 'red', margin: '5px 0 10px 0' }}>This field is required</p>
          )}

          <label style={{ color: '#4F4F4F' }} htmlFor='Email'>
            Email Address *
          </label>
          <input
            style={{
              border: errors.email ? '2px solid red' : '1px solid #B4BEC8',
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.email ? 3 : 16,
            }}
            placeholder='Email Address'
            id='Email'
            {...register('email', {
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p style={{ color: 'red', margin: '5px 0 10px 0' }}>{errors.email.message}</p>
          )}

          <label style={{ color: '#4F4F4F' }} htmlFor='Message'>
            Your Message *
          </label>
          <textarea
            style={{
              border: errors.message ? '2px solid red' : '1px solid #B4BEC8',
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.message ? 3 : 16,
              minHeight: 50,
              resize: 'vertical',
            }}
            placeholder='Type Here...'
            id='Message'
            {...register('message', { required: true })}
          />
          {errors.message && (
            <p style={{ color: 'red', margin: '5px 0 20px 0' }}>This field is required</p>
          )}

          <input
            type='submit'
            value='SEND MESSAGE'
            style={{
              marginBlock: 20,
              backgroundColor: '#2F77AD',
              borderRadius: 6,
              color: 'white',
              appearance: 'none',
              border: 'none',
              paddingBlock: 12,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 16,
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
