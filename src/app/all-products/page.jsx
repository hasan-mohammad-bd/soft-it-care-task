"use client";
import { API_URL } from "@/components/api/Api";
import React from "react";
const token = window.localStorage.getItem("token_01");


const ProductList = () => {
    const fetchData = async () => {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "shop-id": 832921,
          "id": 671,
          "Origin": "http://localhost:3000"
      
        };
      
        console.log(headers);
      
        try {
          const response = await fetch(`https://dev.funnelliner.com/api/v1/client/products`, { headers });
          const data = await response.json();
          console.log(data); // Process the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  fetchData();
  return <div>this is</div>;
};

export default ProductList;