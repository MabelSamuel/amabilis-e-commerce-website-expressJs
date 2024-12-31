import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../login-register/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginValidations } from "../../validations/adminLoginValidations";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(adminLoginValidations),
  });

  const navigate = useNavigate();

  const onSubmit = async (data, e) =>{
    e.preventDefault();
    navigate("/admin/dashboard")
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen px-48 md:px-8 md:py-16 sm:px-4 sm:py-16">
      <h2 className="text-lilac font-bold text-2xl mb-5">Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="border  w-[50%] shadow-md p-20 md:w-full md:p-20 sm:w-full sm:py-10 sm:px-4">
        <div className=" mb-8 ">
          <Input
            type={"text"}
            placeholder={"Email"}
            name={"email"}
            register={register}
          />
          {errors.email && (
            <p className=" text-red-500  ">{errors.email.message}</p>
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
            <p className=" text-red-500  ">{errors.password.message}</p>
          )}
        </div>
        <button className="text-[0.938rem] font-medium bg-gray-300 w-full rounded-sm h-10 mt-7 transition-colors duration-100 ease-linear delay-75 transform hover:bg-lilac hover:text-white md:text-sm sm:text-sm sm:h-9">LOGIN</button>
      </form>
    </section>
  );
};

export default Login;
