"use client";
import { API_URL } from "@/components/api/Api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ForgetPassContext } from "@/context/ForgetPassContext";

const SignUp = () => {
 const [success, setSuccess] = useState(false)
 console.log(success);
  const { setReceivedData, receivedData, handleSubmit } =
    useContext(ForgetPassContext);

  const handleInputChange = (event) => {
    setReceivedData(event.target.value);
  };

  const router = useRouter();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const name = e.target[1].value;
    const phone = e.target[2].value;
    const password = e.target[3].value;
    const password_confirmation = e.target[4].value;
    const shop_name = e.target[5].value;

    if (password !== password_confirmation) {
      toast.error("Passwords are not matched");
      e.target.reset();
      return;
    }
    const headers = {
      "Content-Type": "multipart/form-data;",
      "X-Requested-With": "XMLHttpRequest",
      
    };

    const data = {
      email,
      name,
      phone,
      password,
      password_confirmation,
      shop_name,
    };

    try {
      const response = await axios.post(`${API_URL}/signup`, data, {
        headers: headers,
      });
      toast.success("SignUp Success");
      console.log(response.data);
      setSuccess(response?.data?.success)
    } catch (error) {
      toast.error(error.message);

    }

  


    const data_2 = {
      phone,
    };

    try {
      const response = await axios.post(
        `${API_URL}/client/forget-password`,
        data_2,
        {
          headers: headers,
        }
      );
      toast(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }

    e.target.reset();
    router.push("/varify-auth");
  };

  return (
    <div className="mt-10">
      <h3 className="my-5 text-xl font-bold text-center">Please Sign Up</h3>
      <form onSubmit={handleSignUpSubmit}>
        <input placeholder="email" type="email" />
        <input placeholder="name" type="text" />
        <input onChange={handleInputChange} placeholder="phone" type="phone" />
        <input placeholder="password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <input placeholder="Store Name" type="text" />
        <input className="bg-black hover:bg-slate-500 rounded text-white" type="submit" value="Register" />
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
