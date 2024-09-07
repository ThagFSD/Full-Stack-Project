import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center">
        {/* {left} */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Thang's
            </span>
            BLog
          </Link>
          <p className="mt-5 text-sm">
            Welcome back to my blog! Sign in with your email and password
          </p>
        </div>
        {/* {right} */}
        <div className="flex-1">
          <div className="">
            <form className="flex flex-col gap-4">
              <div className="">
                <Label value="Your email"></Label>
                <TextInput
                  type="email"
                  placeholder="name@gmail.com"
                  id="email"
                  onChange={handleChange}
                ></TextInput>
              </div>
              <div className="">
                <Label value="Your password"></Label>
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                ></TextInput>
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign In
              </Button>
              <Button gradientDuoTone="purpleToPink" outline>
                <FaGoogle className="mt-0.5 mr-2"></FaGoogle>
                <p>Sign in with Google account</p>
              </Button>
            </form>
            <div className="flex gap-2 mt-5 text-sm">
              <span>Don't have an account ?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
