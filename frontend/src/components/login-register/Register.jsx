import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

import { registerValidations } from '@/validations/registerValidations';

import { useAuth } from '@/context/AuthContext';

import Input from '@/components/login-register/Input';
import Button from '@/components/login-register/Button';

function Register() {
    const navigate = useNavigate();
    const {
        register, 
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(registerValidations)
    })
    
    const { setMessage, setError } = useAuth();
    const apiUrl = import.meta.env.VITE_API_URL;

    const onSubmit = async (data) =>{
        const { email, password, username } = data;
        const user = {
          username,
          email,
          password
        }
        try {
          const response = await axios.post(`${apiUrl}/api/users/register`, user);
          console.log("User succefully added", response.data);
          setMessage("Registered successfully")
          setTimeout(()=> setMessage("Please login"), 1000)
          setTimeout(()=> setMessage(""), 3000)
          navigate("/login-register/login")
        } catch (error) {
          const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
          setError(errorMessage);
          setTimeout(()=> setError(""), 3000)
          console.log("Error registering", error);
        } 
        // clear form after submitting
        reset({
            username: '',
            password: '',
            email: ''
        })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' border h-full w-[70%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4 ' >
        <div className=' mb-8 '>
            <Input type={'text'} placeholder={'Username'} name={'username'} register={register} />
            { errors.username && (
                <p className=' bg-red-500  '>{errors.username.message}</p>
            ) }
        </div>
        <div  className='mb-8 '>
            <Input type={'email'} placeholder={'Email'} name={'email'} register={register} />
            { errors.email && (
                <p className=' bg-red-500  '>{errors.email.message }</p>
            ) }
        </div>
        <div>
            <Input type={'password'} placeholder={'Password'} name={'password'} register={register} />
            { errors.password && (
                <p className=' bg-red-500  '>{errors.password.message}</p>
            )}
        </div>
        <Button name={'REGISTER'} />
    </form>
  )
}

export default Register