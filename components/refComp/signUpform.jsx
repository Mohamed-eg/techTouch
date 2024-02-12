"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LogImg from "../../public/background@2x.png";
import { auth } from "../../src/firebase/firebase";
import lock from "../../public/icons/Lock.svg";
import call from "../../public/icons/Call.svg";
import profile from "../../public/icons/Profile.svg";
import send from "../../public/icons/Send.svg";
import message from "../../public/icons/Message.svg";
import axios from "axios"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLock } from "";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const milliseconds = Date.now();
  const isoDate = new Date(milliseconds).toISOString();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    phoneNumberTwo: Yup.string().min(11,"Phone number must be at least 11 Num"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const router = useRouter();
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const postUser = async (userData) => {
    const url = `https://backend.touchtechco.com/gen?coll=users`
    console.log(userData)
    try {
      const response = await axios.post(url ,userData);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  const createUser = async (data) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((authUser) => {
        const id =authUser.user.uid
        const userData={
          "id": id,
          "name": data.fullName,
          "email": data.email,
          "createdAt": isoDate,
          "imageLink": "http/lolol.com",
          "local": false,
          "userType": "user",
          "primaryPhone":data.phoneNumber,
          "secondaryPhone":data.phoneNumberTwo,
          "needEmailVerification": false
        }
        console.log("Success. The user is created in Firebase");
         postUser(userData ).then((res) => {
          console.log(res)
          router.push(`./`)
        });
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // const mutation = useMutation(createUser);

  const onSubmit = (data) => {
    // mutation.mutate(data);
    createUser(data);
    console.log(data);
  };

  return (
    <div className="flex  justify-between pt-[150px] min-h-screen !text-black">
      <div className="flex-1 flex flex-col justify-center w-[50%] py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link href={"/"}>
              <Image
                className="mb-6"
                src={require("../../public/touch-tech-logo-final-2@2x.png")}
                alt="logo"
                width={319}
                height={220}
              />
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign up now
            </h2>
            <p className="mt-2 text-sm text-gray-900">
              Please fill the details to create your account
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-900">
                    Full name
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("fullName")}
                      type="text"
                      id="fullName"
                      autoComplete="given-name"
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="message" src={profile} />
                  </div>
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-900">
                    Phone number
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      id="phoneNumber"
                      autoComplete="tel"
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="message" src={call} />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="phoneNumberTwo"
                    className="block text-sm font-medium text-gray-900">
                    Phone number two
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("phoneNumberTwo")}
                      type="tel"
                      id="phoneNumberTwo"
                      autoComplete="tel"
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="message" src={call} />
                  </div>
                  {errors.phoneNumberTwo && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.phoneNumberTwo.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="message" src={message} />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("password")}
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      className="mt-1 block w-[80%] bg-[#56165000]  border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="lock" src={lock} />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-900">
                    Confirm password
                  </label>
                  <div className="w-full div-shadow rounded-md flex flex-row items-center justify-between px-2  hover:border-indigo-500 hover:ring-indigo-500">
                    <input
                      {...register("confirmPassword")}
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      className="mt-1 block w-[80%] bg-[#56165000] border-none outline-none sm:text-sm focus:ring-0 focus:ring-offset-0"
                    />
                    <Image className="formIcon" alt="lock" src={lock} />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-md border-none outline-none font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg focus:ring-indigo-500">
                    Sign up
                    <Image className="ml-1" alt="lock" src={send} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </div>
          </div>

          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
        </div>
      </div>
      <div className="hidden lg:block w-[50%] relative flex-1">
        <Image
          className="inset-0 right-0 h-full w-full object-contain"
          src={LogImg}
          width={screen.width / 2}
          height={screen.width / 1.5}
          alt="shop"
        />
        <div className="img-shadow w-full top-0 right-0 min-h-full z-10"></div>
      </div>
    </div>
  );
};

export default Signup;
