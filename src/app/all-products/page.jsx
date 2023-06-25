"use client";
import { API_URL } from "@/components/api/Api";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
const token = window.localStorage.getItem("token_01");
const shop_id = window.localStorage.getItem("the_shop");
const id = window.localStorage.getItem("the_id");


const ProductList = () => {
  const router = useRouter()
  const [products, setProducts] = useState([])
  console.log(products);
    const fetchData = async () => {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "shop-id": shop_id,
          "id": id

      
        };
      
        console.log(headers);
      
        try {
          const response = await fetch(`https://dev.funnelliner.com/api/v1/client/products`, { headers });
          const data = await response.json();
          setProducts(data.data)
          console.log(data); // Process the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  fetchData();
  return      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 container mx-auto">
  {
    products?.map((product) => (
      <div key={product.id} className="m-p">
        <div className="card  h-full bg-base-100 shadow-xl">
          <figure className="px-4 pt-6">
            
          </figure>
          <div className="Cd">
            <p className="Cd-text">Product name:{product.product_name}</p>
            <p className="Cd-text">category_id:{product.category_id}</p>

            
            
            <p className="Cd-text">Product Code: {product.product_code}</p>
            <p className="Cd-text">Product Qty:{product.product_qty}</p>
            <p className="Cd-text">Price:{product.price}</p>
            <p className="Cd-text">Discount:{product.discount}</p>
            <p><span className="Cd-text">Description:</span> {product.short_description} </p>
            <Image className="py-5" src={product.main_image.name} width={200} height={200} alt="img" />
            

            <div className=" mx-auto grid grid-cols1 gap-4 ">
              <button
                className=""
                onClick={() => {
                  router.push(`/all-products/product-details/${product.id}`)
                }}
              >
                Details
              </button>
              <button
                className=""
                onClick={() => {
                  update(product.id);
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
}
</div>
};

export default ProductList;