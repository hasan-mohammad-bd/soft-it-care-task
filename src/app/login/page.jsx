"use client";
import { API_URL } from "@/components/api/Api";
import { fetchIpAddress } from "@/components/fatchIP/FatchIp";
import GetBrowserInfo from "@/components/getBrowserInfo/GetBrowserInfo";
import axios from "axios";

import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
;
import Link from "next/link";
import { useRouter } from "next/navigation";
import DataContext from "@/context/DataContext";



const Login = () => {
  const router = useRouter()
  const { allData, setAllData } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
      let ipAddress = fetchIpAddress();
      let browserName = GetBrowserInfo();
    
      
      const email = e.target[0].value;
      const password = e.target[1].value;
    
      const headers = {
        "Content-Type": "multipart/form-data",
        "X-Requested-With": "XMLHttpRequest",
        ipaddress: JSON.stringify(ipAddress),
        browsername: browserName,
      };
    
      const data = {
        email: email,
        password: password,
      };
      
    
      try {
        const response = await axios.post(`${API_URL}/login`, data, {
          headers: headers,
        });

        console.log(response.data);
        setAllData(response.data)
        if (typeof window !== "undefined") {
          localStorage.setItem("token_01", response.data.token);
        }
      } catch (error) {
        toast.error("Login Failed")
        console.error(error);
      }
/*       setTimeout(() => {
        location.reload()
      }, 1000); */



      e.target.reset();
      router.push('/all-products')
    };
    
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
