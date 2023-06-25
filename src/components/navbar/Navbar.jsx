'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const token = window.localStorage.getItem("token_01");



const Navbar = () => {



  const router = useRouter();
  const [receivedToken, setReceivedToken] = useState(token || null);


  const Logout = () => {
    

      if (receivedToken) {
        localStorage.removeItem("token_01");
        localStorage.removeItem("the_shop");
        localStorage.removeItem("the_id");
        setReceivedToken(null)
        router.push("/login");
      } else {
        console.log("Token not found");
      }
      

  };



  return (
    <div className="bg-gray-100">
          <nav className="flex justify-between items-center py-7 container mx-auto">
      <div className="text-2xl font-semibold">Next.js App</div>
      {receivedToken? <div>
      <Link className="mr-5 Cd text-lg font-medium" href="/all-products">Products</Link>
      <Link className="mr-5 Cd text-lg font-medium" href="/add-products">Add Products</Link>
       <button onClick={Logout}>Logout</button>
      </div> : <Link className="py-3 px-5 bg-black hover:bg-slate-500 text-white rounded" href="signup">Sign Up</Link>}
      
    </nav>
    </div>
  );
};

export default Navbar;
