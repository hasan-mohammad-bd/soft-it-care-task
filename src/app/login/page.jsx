"use client";
import { API_URL } from "@/components/api/Api";
import { fetchIpAddress } from "@/components/fatchIP/FatchIp";
import GetBrowserInfo from "@/components/getBrowserInfo/GetBrowserInfo";
import axios from "axios";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Link from "next/link";



const Login = () => {

  const {handleSubmit, receivedDatas} = useContext(LoginContext);
 

  return (
    <div className="mt-10">
      <h3 className="my-5 text-xl font-bold text-center">Please Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <Link className="my-5 font-bold mx-auto text-center text-blue-700" href="/forget-password">Forget Password?</Link>
        <input className="bg-black hover:bg-slate-500 rounded text-white" type="submit" value="Login" />
        <ToastContainer/>
      </form>
      <div className="flex justify-center">
        <p>Are you new here? Please  </p> <Link className="font-bold text-blue-700" href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
