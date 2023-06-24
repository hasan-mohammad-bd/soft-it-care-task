'use client'
import { LoginContext } from "@/app/context/LoginContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const token = window.localStorage.getItem("token_01");
import { useContext } from "react";

const Navbar = () => {
  const {handleSubmit, receivedData} = useContext(LoginContext);

  console.log(receivedData.email);
  const router = useRouter();
  const [receivedToken, setReceivedToken] = useState(token || null);


  const Logout = () => {
    
    

      if (receivedToken) {
        localStorage.removeItem("token_01");
        setReceivedToken(null)
        router.push("/login");
      } else {
        console.log("Token not found");
      }
      

  };

  return (
    <nav className="flex justify-between items-center py-7 bg-gray-400 container mx-auto">
      <div>logo</div>
      <div>others</div>
      <div>email: {receivedData?.email}</div>
      {receivedToken && <button onClick={Logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
