'use client'
import { API_URL } from '@/components/api/Api';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
const token = window.localStorage.getItem("token_01");

const AddProduct = () => {
    const addAProducts = async (e) => {
        e.preventDefault();
        const category_name = e.target[0].value;
        const product_name = e.target[1].value;
        const price = e.target[2].value;
        const discount = e.target[3].value;
        const main_image = e.target[4].value;
        const product_code = e.target[5].value;
        const product_quantity = e.target[6].value;
        const status = e.target[7].value;
        const delivery_charge = e.target[8].value;
    

        const headers = {
            Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "shop-id": 832921,
          "id": 671
        };
    
        const data = {
          category_name,
          product_name,
          price,
          discount,
          main_image,
          product_code,
          product_quantity,
          status,
          delivery_charge
        };
    
        try {
          const response = await axios.post("https://dev.funnelliner.com/api/v1/client/products", data, {
            headers: headers,
          });
          toast.success("Product added Success");
          console.log(response.data);
        } catch (error) {
            console.log(error);
          toast.error(error);
        }
    
        // e.target.reset();
    }
    
    return (
        <div>
            <form onSubmit={addAProducts}>
                <input placeholder='Category Name' type="text" name="" id="" />
                <input placeholder='Product Name' type="text" name="" id="" />
                <input placeholder='Price' type="number" name="" id="" />
                <input placeholder='Discount' type="number" name="" id="" />
                <input placeholder='main Image' type="file" name="" id="" />
                <input placeholder='Product Code' type="number" name="" id="" />
                <input placeholder='Status' type="text" name="" id="" />
                <input placeholder='Delivery Charge' type="text" name="" id="" />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;