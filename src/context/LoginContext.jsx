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
  let theData;
  console.log(theData);
 

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
          setReceivedData(response.data)
          console.log(response.data);
          theData = response.data
          if (typeof window !== "undefined") {
            localStorage.setItem("token_01", response.data.token);
            localStorage.setItem("the_shop", response.data.data.shop_id);
            localStorage.setItem("the_id", response.data.data.id);
          }
        } catch (error) {
          console.error(error);
        }
        setTimeout(() => {
          location.reload()
        }, 1000);



        e.target.reset();
        router.push('/all-products')
      };

      return <LoginContext.Provider value={{handleSubmit, receivedDatas, theData}}>
        <div>{children}</div>
    </LoginContext.Provider>
}