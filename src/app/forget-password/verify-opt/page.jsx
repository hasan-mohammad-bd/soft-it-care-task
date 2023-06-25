'use client'
import { API_URL } from "@/components/api/Api";
import { ForgetPassContext } from "@/context/ForgetPassContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";


const VerifyOtp = () => {
  const { setReceivedData, receivedData, handleSubmit } =
    useContext(ForgetPassContext);

    const router = useRouter();

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
    
        const phone = e.target[0].value;
        const otp = e.target[1].value;
    
        const headers = {
          "Content-Type": "multipart/form-data;",
          "X-Requested-With": "XMLHttpRequest",
        };
    
        const data = {
          phone,
          otp
        };
        
    
        try {
          const response = await axios.post(
            `${API_URL}/client/otp-verify`,
            data,
            {
              headers: headers,
            }
          );
          console.log(response.data);
          toast(response.data.message);
        } catch (error) {
          toast(error.message)
        }
    
        
        e.target.reset();
        router.push('/forget-password/change-password')
        
        
      };
  return (
    <div>
      <form onSubmit={handleOTPSubmit}>
        <input value={receivedData} placeholder="phone" type="phone" />
        <input placeholder="Type OTP" type="text" />
        <input type="submit" value="Verify OTP" />
      </form>
    </div>
  );
};

export default VerifyOtp;
