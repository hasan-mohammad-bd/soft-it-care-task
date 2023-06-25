'use client'
import { API_URL } from '@/components/api/Api';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const token = localStorage.getItem('token_01')
const shop_id = localStorage.getItem('the_shop')

const UpdateProfiles = ({params}) => {
    const { id } = params;
    const {
        reset,
      register,
      formState: { errors },
      handleSubmit,

    } = useForm();
  
    const updateProfile = (data) => {
      const myHeaders = new Headers();
      myHeaders.append("X-Requested-With", "XMLHttpRequest");
      myHeaders.append("authorization", token);
      myHeaders.append("shop-id", shop_id);

      const formdata = new FormData();
      formdata.append("main_image", data.main_image[0], "file");
      formdata.append("product_code", data.product_code);
      formdata.append("product_qty", data.product_qty);
      formdata.append("_method", data._method);
      formdata.append("category_id", data.category_id);
      formdata.append("product_name", data.product_name);
      formdata.append("price", data.price);
      formdata.append("discount", data.discount);

  
      const requestOptions = {
        body: formdata,
        redirect: "follow",
        method: "POST",
        headers: myHeaders,

      };
  
      fetch(
        `${API_URL}/client/products/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.errMgs) {
            toast(result.errMgs);
          } else {
            toast(result.message);
          }
          console.log(result);
        })
        .catch((error) => {
          toast(error);
          console.log("error", error);
        });
        
    };
    return (
        <div>
        <div className="text-3xl font-bold text-center mt-10">Update Product</div>
        <form className="" onSubmit={handleSubmit(updateProfile)}>
          <div className="  sm:rounded-md">
            <div className=" px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="category_name">
                    <span className="label-text font-bold">
                      Category Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("category_name")}
                    placeholder="Category Name"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.category_name && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.category_name?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="product_name">
                    <span className="label-text font-bold">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("product_name")}
                    placeholder="product_name"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.product_name && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.product_name?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="price">
                    <span className="label-text font-bold">
                      Price 
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    placeholder="price"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.price && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.price?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="discount">
                    <span className="label-text font-bold">
                      Discount
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register("discount")}
                    placeholder="discount"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.discount && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.discount?.message}
                    </p>
                  )}
                </div>
  
  
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="product_code">
                    <span className="label-text font-bold">
                      Product Code
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("product_code")}
                    placeholder="product_code"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.product_code && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.product_code?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor=" short_description">
                    <span className="label-text font-bold">
                      Short Description 
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("short_description")}
                    placeholder="short_description"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.short_description && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.short_description?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor=" product_qty">
                    <span className="label-text font-bold">
                      Product Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register("product_qty")}
                    placeholder="product_qty"
                    className="input border-primary bg-white w-full "
                  />{" "}
                  {errors.product_qty && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.product_qty?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="main_image">
                    <span className="label-text font-bold">
                      Image 
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("main_image")}
                    placeholder="main_image"
                    className="file-input w-full  "
                  />{" "}
                  {errors.main_image && (
                    <p className="  text-red-600 font-semibold mt-4 text-start mx-auto">
                      {errors.main_image?.message}
                    </p>
                  )}
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="delivery_charge">
                    <span className="label-text font-bold">
                      Delivery Charge
                    </span>
                  </label>
                  <select
                    className={
                      "rounded-xl input  w-full border-primary bg-white border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
                      (errors.delivery_charge ? " border-red-500" : "")
                    }
                    id="delivery_charge"
                    name="delivery_charge"
                    {...register("delivery_charge", { required: true })}
                  >
                    <option value="">Select </option>
                    <option value="free">Free</option>
                    <option value="paid">paid</option>
                  </select>
  
                  {errors.delivery_charge && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.delivery_charge?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="label" htmlFor="status">
                    <span className="label-text font-bold">
                      Status 
                    </span>
                  </label>
                  <select
                    className={
                      "rounded-xl input  w-full border-primary bg-white border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
                      (errors.status ? " border-red-500" : "")
                    }
                    id="status"
                    name="status"
                    {...register("status", { required: true })}
                  >
                    <option value="">Select </option>
                    <option value="0">True</option>
                    <option value="1">False</option>
                  </select>
  
                  {errors.status && (
                    <p className="  text-red-600 font-semibold mt-4 text-start">
                      {errors.status?.message}
                    </p>
                  )}
                </div>
  
              </div>
            </div>
            <div className="p-4 ">
              <input
                type="submit"
                value="Add Product"
                className="bg-black text-white"
              />
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default UpdateProfiles;