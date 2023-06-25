"use client";
import { API_URL } from "@/components/api/Api";
import { ForgetPassContext } from "@/context/ForgetPassContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const ForgetPassword = () => {
    const { setReceivedData, receivedData, handleSubmit} = useContext(ForgetPassContext)
  const router = useRouter();

  const handleInputChange = (event) => {
    setReceivedData(event.target.value);
  };

  
  
 
 /*  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = e.target[0].value;

    const headers = {
      "Content-Type": "multipart/form-data;",
      "X-Requested-With": "XMLHttpRequest",
    };

    const data = {
      phone
    };

    try {
      const response = await axios.post(
        `${API_URL}/client/forget-password`,
        data,
        {
          headers: headers,
        }
      );
      toast(response.data.message);
    } catch (error) {
      toast.error(error.message)
    }

    
    e.target.reset();
    router.push('/forget-password/verify-opt')
  }; */
  return (
    <div className="mt-10">
            <h3 className="my-5 text-xl font-bold text-center">Please Give Your Phone Number</h3>
      <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} placeholder="phone" type="phone" />
        <input className="bg-black rounded text-white"  type="submit" value="Send OTP" />
      </form>


    </div>
  );
};

export default ForgetPassword;
