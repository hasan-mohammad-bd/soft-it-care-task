'use client'

import DataContext from "@/context/DataContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";




const Navbar = () => {
  const { allData, setAllData } = useContext(DataContext);
  const router = useRouter()


  


  const Logout = () => {
    
        localStorage.removeItem("token_01");
        setAllData(null)
        router.push("/login");

    

  };



  return (
    <div className="bg-gray-100">
          <nav className="flex justify-between items-center py-7 container mx-auto">
      <div className="text-2xl font-semibold">Next.js App</div>
      {allData?.success? <div>
      <Link className="mr-5 Cd text-lg font-medium" href="/all-products">Products</Link>
      <Link className="mr-5 Cd text-lg font-medium" href="/add-products">Add Products</Link>
       <button onClick={Logout}>Logout</button>
      </div> : <Link className="py-3 px-5 bg-black hover:bg-slate-500 text-white rounded" href="signup">Sign Up</Link>}
      
    </nav>
    </div>
  );
};

export default Navbar;
