import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidations } from '../../validations/registerValidations';
import { useNavigate } from "react-router-dom";
import { GrStatusGood } from 'react-icons/gr';
import { TiCancel } from 'react-icons/ti';
import axios from "axios";
import { useAuth } from '../../context/AuthContext';

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
    
    const [ error, setError ] = useState(null);
    const { message, setMessage } = useAuth();

    const onSubmit = async (data) =>{
        const { email, password, username } = data;
        const user = {
          username: username,
          email: email,
          password: password
        }
        try {
          const response = await axios.post("http://localhost:7000/api/users/register", user);
          console.log("User succefully added", response.data);
          setMessage("Registered successfully")
          setTimeout(()=> setMessage("Please login"), 1000)
          setTimeout(()=> setMessage(""), 3000)
          navigate("/login-register/login")
        } catch (error) {
          setError(error.message);
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
        {error && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-red-400 sm:w-full ">
          <TiCancel className="text-white" />
          <p>{error}</p>
        </div>
      )}
        <div className=' mb-8 '>
            <Input type={'text'} placeholder={'Username'} name={'username'} register={register} />
            { errors.username && (
                <p className=' bg-red-500  '>{errors.username.message}</p>
            ) }
        </div>
        <div className='mb-8 '>
            <Input type={'password'} placeholder={'Password'} name={'password'} register={register} />
            { errors.password && (
                <p className=' bg-red-500  '>{errors.password.message}</p>
            )}
        </div>
        <div>
            <Input type={'email'} placeholder={'Email'} name={'email'} register={register} />
            { errors.email && (
                <p className=' bg-red-500  '>{errors.email.message }</p>
            ) }
        </div>
        

        <Button name={'REGISTER'} />
    </form>
  )
}

export default Register