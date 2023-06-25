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



const Login = () => {

  const {handleSubmit, receivedData} = useContext(LoginContext);
  console.log(receivedData);

/*   const handleSubmit = async (e) => {
    let ipAddress = fetchIpAddress();
    let browserName = GetBrowserInfo();
  
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    const headers = {
      "Content-Type": "multipart/form-data;",
      "X-Requested-With": "XMLHttpRequest",
      ipaddress: JSON.stringify(ipAddress),
      browsername: browserName,
    };
  
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  
    try {
      const response = await axios.post(`${API_URL}/login`, data, {
        headers: headers,
      });
      response.data;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("token_01", response.data.token);
      }
    } catch (error) {
      console.error(error);
    }
    e.target.reset();
  }; */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Login" />
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;
