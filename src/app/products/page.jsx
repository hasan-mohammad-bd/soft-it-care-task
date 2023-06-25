"use client";
import { API_URL } from "@/components/api/Api";
import { LoginContext } from "@/context/LoginContext";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
const token = localStorage.getItem("token_01");

const fetchData = async () => {
  const headers = {
    "Content-Type": "multipart/form-data;",
    "X-Requested-With": "XMLHttpRequest",
    "id": 671,
    "shop-id": 832921,
    "Authorization": `Bearer ${token}`
  };

  try {
    const response = await fetch(`${API_URL}/clients/products`, { headers });
    const data = await response.json();
    console.log(data); // Process the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Products = async () => {
  // const {handleSubmit, receivedDatas} = useContext(LoginContext);
  const [products, setProducts] = useState([]);
  console.log(products);

/*   useEffect(() => {
    const fetchProducts = async () => {
      const requestOptions = {
        method: "GET", // or 'POST' if you want to send a request body
        headers: {
          "Content-Type": "multipart/form-data;",
          "X-Requested-With": "XMLHttpRequest",
          "id": 671,
          "shop-id": 832921,
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify({ key: 'value' }), // uncomment this line and modify it for a request body
      };
      const response = await fetch(
        `${API_URL}/client/products`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      setProducts(data);
    };

    fetchProducts();
  }, []); */

/*     const loadProducts = async () =>{
    const headers = {
      "Content-Type": "multipart/form-data;",
      "X-Requested-With": "XMLHttpRequest",
      "id": 671,
      "shop-id":832921,
      "Authorization": `Bearer ${token}`

  
    };
  
    console.log(headers);
  
    try {
      
      const response = await axios.get(`https://dev.funnelliner.com/api/v1/client/products`, {
        headers: headers,
      });
      toast.success("SignUp Success");
      setProducts(response.data)
    } catch (error) {
      toast.error("SignUp failed");
    }
  }

  loadProducts() */
  fetchData();

  return <div ></div>;
};

export default Products;
