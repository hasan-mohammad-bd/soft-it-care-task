"use client"
import DataContext from "@/context/DataContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";



const ProductList = () => {
  const [products, setProducts] = useState([])
  const router = useRouter()
  const { allData, setAllData } = useContext(DataContext);
/*   if(!allData?.success){
    router.push('/login')
  } */


    const fetchData = async () => {
        const headers = {
          Authorization: `Bearer ${allData?.token}`,
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "shop-id": allData?.data.shop_id,
          "id": allData?.data.id

      
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
                  /* router.push(`/all-products/product-details/${product.id}`) */
                }}
              >
                Details
              </button>
              <button
                className=""
                onClick={() => {
                  /* router.push(`/all-products/update-product/${product.id}`) */
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