'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// const token = localStorage.getItem("token_01");
const token = "sfsdfsdfsdf"


const Navbar = () => {

  
  
;
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

  if(!token){
    router.push('/login')
  }

  return (
    <nav className="flex justify-between items-center py-7 bg-gray-400 container mx-auto">
      <div>logo</div>
      <div>others</div>
      <div>email: </div>
      {receivedToken && <button onClick={Logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
