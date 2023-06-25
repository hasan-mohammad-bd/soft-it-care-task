'use client'
import { API_URL } from "@/components/api/Api";
import { ForgetPassContext } from "@/context/ForgetPassContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const { setReceivedData, receivedData, handleSubmit } =
    useContext(ForgetPassContext);
  const router = useRouter();
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    const phone = e.target[0].value;
    const password = e.target[1].value;
    const password_confirmation = e.target[2].value;

    const headers = {
      "Content-Type": "multipart/form-data;",
      "X-Requested-With": "XMLHttpRequest",
    };

    const data = {
      phone,
      password,
      password_confirmation,
    };

    console.log(data);

    try {
      const response = await axios.post(`${API_URL}/client/update-password`, data, {
        headers: headers,
      });
      toast.success(response.data.message);
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    console.log(error);
    }

    e.target.reset();
    router.push('/login')
  };
  return (
    <div className="mt-10">
      <h3 className="my-5 text-xl font-bold text-center">Please Reset Your Password</h3>
      <form onSubmit={handlePasswordChange}>
        <input defaultValue={receivedData} placeholder="phone" type="phone" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <input className="bg-black hover:bg-slate-400 rounded text-white" type="submit" value="Change Password" />
      </form>
    </div>
  );
};

export default ChangePassword;
