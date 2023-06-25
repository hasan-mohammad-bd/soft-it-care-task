"use client"
import { API_URL } from "@/components/api/Api";
import { fetchIpAddress } from "@/components/fatchIP/FatchIp";
import GetBrowserInfo from "@/components/getBrowserInfo/GetBrowserInfo";
import axios from "axios";
import { useRouter } from "next/navigation";

import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({children})=>{
  const router = useRouter()
  const [receivedDatas, setReceivedData] = useState('')

    const handleSubmit = async (e) => {
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
          setReceivedData(response.data)
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token_01", response.data.token);
          }
        } catch (error) {
          console.error(error);
        }
        setTimeout(() => {
          window.location.reload()
        }, 1500);
        // window.location.reload()
        e.target.reset();
        router.push('/')
      };

      return <LoginContext.Provider value={{handleSubmit, receivedDatas}}>
        <div>{children}</div>
    </LoginContext.Provider>
}