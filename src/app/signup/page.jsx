"use client";
import { API_URL } from "@/components/api/Api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";




const SignUp = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {


    
      e.preventDefault();
      const email = e.target[0].value;
      const name = e.target[1].value;
      const phone = e.target[2].value;
      const password = e.target[3].value;
      const password_confirmation = e.target[4].value;
      const shop_name = e.target[5].value;
    
      if(password !== password_confirmation){
        toast.error('Passwords are not matched')
        e.target.reset()
        return
      }
      const headers = {
        "Content-Type": "multipart/form-data;",
        "X-Requested-With": "XMLHttpRequest",
      };
    
      const data = {
        email,
        name,
        phone,
        password,
        password_confirmation,
        shop_name
    
      };
      
    
    
      try {
        const response = await axios.post(`${API_URL}/signup`, data, {
          headers: headers,
        });
        console.log(response.data);;
        
      } catch (error) {
        console.error(error);
      }
      router.push("/login");
      toast.success('Successfully Registered! Please login')
      e.target.reset();
    };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" />
        <input placeholder="name" type="text" />
        <input placeholder="phone" type="phone" />
        <input placeholder="password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <input placeholder="Store Name" type="text" />
        <input type="submit" value="Register" />
        <ToastContainer/>
      </form>
    </div>
  );
};

export default SignUp;
