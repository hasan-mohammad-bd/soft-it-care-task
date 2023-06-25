"use client"
import { API_URL } from "@/components/api/Api";
import { fetchIpAddress } from "@/components/fatchIP/FatchIp";
import GetBrowserInfo from "@/components/getBrowserInfo/GetBrowserInfo";
import axios from "axios";
import { useRouter } from "next/navigation";

import { createContext, useState } from "react"
import { ToastContainer, toast } from "react-toastify";

export const ForgetPassContext = createContext()

export const ForgetPassProvider = ({children})=>{
    const router = useRouter()
    const [receivedData, setReceivedData] = useState('')
  
    const handleSubmit = async (e) => {
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
          setTimeout(() => {
            router.push('/forget-password/verify-opt')
        }, 500);
        } catch (error) {
          toast.error(error.message)
        }
    
        
        e.target.reset();

        
      };
  
        return <ForgetPassContext.Provider value={{setReceivedData, receivedData, handleSubmit}}>
          <div>{children}
          <ToastContainer/></div>
      </ForgetPassContext.Provider>
}