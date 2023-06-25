'use client'
import { API_URL } from '@/components/api/Api';
import React, { useEffect, useState } from 'react';
const token = localStorage.getItem('token_01')
const shop_id = localStorage.getItem('the_shop')

const ProductDetails = ({params}) => {
    const { id } = params;
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const headers = new Headers();
      headers.append("shop-id", shop_id);
      headers.append("X-Requested-With", "XMLHttpRequest");
      headers.append("authorization", token);
      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };
      fetch(
        `${API_URL}/client/products/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setProduct(result);
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }, []);
  
    console.log(id);
  
    return (
      <div className='Cd container mx-auto mt-10'>
        <h1 className="font-bold text-xl ">Product Details</h1>
        <p className="Cd-text">Product name:{product.product_name}</p>
            <p className="Cd-text">category_id:{product.category_id}</p>

            
            
            <p className="Cd-text">Product Code: {product.product_code}</p>
            <p className="Cd-text">Product Qty:{product.product_qty}</p>
            <p className="Cd-text">Price:{product.price}</p>
            <p className="Cd-text">Discount:{product.discount}</p>
            <p><span className="Cd-text">Description:</span> {product.short_description} </p>
      </div>
    );
  };
  
  export default ProductDetails;