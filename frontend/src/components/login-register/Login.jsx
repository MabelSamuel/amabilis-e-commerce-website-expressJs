import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginValidations } from "@/validations/loginValidations";
import { useAuth } from "@/context/AuthContext";

import axios from "axios";

import Button from "@/components/login-register/Button";
import Input from "@/components/login-register/Input";

function Login() {
  const navigate = useNavigate();
  const { login, setIsLoggedIn, setMessage, setError, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginValidations),
  });

  const apiUrl = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    const { username, password, rememberMe } = data;
    const userData = {
      username,
      password,
      rememberMe,
    };
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/login`,
        userData
      );
      const { token, user } = response.data;

      if (rememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }
      setIsLoggedIn(true);
      setUser(user);
      navigate("/my-account");
      setMessage("Login successful");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
      setError(errorMessage);
      setTimeout(()=> setError(""), 3000)
      console.log("Error login in", error);
    }

    // Clear the form fields
    reset({
      username: "",
      password: "",
      rememberMe: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border h-full w-[70%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4 "
    >
      <div className=" mb-8 ">
        <Input
          type={"text"}
          placeholder={"Username"}
          name={"username"}
          register={register}
        />
        {errors.username && (
          <p className=" bg-red-500  ">{errors.username.message}</p>
        )}
      </div>
      <div className=" mb-8 ">
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          register={register}
        />
        {errors.password && (
          <p className=" bg-red-500  ">{errors.password.message}</p>
        )}
      </div>
      <div className=" flex justify-between ">
        <div>
          <input
            type="checkbox"
            name="rememberMe"
            {...register("rememberMe")}
          />
          <span className=" ml-2 text-[0.938rem]">Remember me</span>
        </div>
        <div>
          <Link className=" text-[0.938rem] ">Forgot password?</Link>
        </div>
      </div>

      <Button name={"LOGIN"} />
    </form>
  );
}

export default Login;
