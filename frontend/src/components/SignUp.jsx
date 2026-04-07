import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Verify from "./Verify";
const SignUp = () => {
 const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/v1/auth/register",
        formData
      );

      console.log("SUCCESS:", res.data);

      alert("Registered successfully! Check your email for OTP");

        navigate("/verify", { state: { email: formData.email } });
      // reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      console.error("ERROR:", error.response?.data || error.message);

      alert(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };



  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb */}
      <nav className="px-4 py-10 md:px-20 text-sm">
        <span className="text-gray-400">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">signup</span>
      </nav>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-20">

        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-center py-10 lg:py-20 pr-0">
          <img
            src="https://i.pinimg.com/736x/52/65/00/52650077029633557caeaa694a236a2c.jpg"
            alt="Shopping Hero"
            className="w-full max-w-xl object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full px-6 py-12 lg:w-1/2 lg:px-20">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold tracking-tight text-black mb-4">
              Create Your Account
            </h1>
            <p className="text-black font-medium mb-10">
              Enter Your Details Below
            </p>

            {/* ✅ FORM */}
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* Name */}
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent py-1 text-gray-600 focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-transparent py-1 text-gray-600 focus:outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full bg-transparent py-1 text-gray-600 focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded bg-[#DB4444] py-4 text-white font-medium hover:bg-[#c13a3a] transition-all"
                >
                  Sign Up
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;







