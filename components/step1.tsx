
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";


import {
  FaPlane,
  FaSearch,
   FaCalendarAlt,
  FaArrowRight,
  
 
} from "react-icons/fa";

const Step1Schema = z.object({
  from: z.string().min(2, "From is required"),
  to: z.string().min(2, "To is required"),
  departDate: z.string().min(1, "Depart date is required"),
  returnDate: z.string().min(1, "Return date is required"),
});

type Step1Data = z.infer<typeof Step1Schema>;

export default function Step1({ onNext }: { onNext: () => void }) {
  const { formData, setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(Step1Schema),
    defaultValues: formData,
  });

  const onSubmit = (data: Step1Data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };


  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form mt-10">
      <div className=" formDiv grid grid-cols-1 md:grid-cols-2 ">
        <div className="toFrom">
          <div className="w-full">
          <label className="text-white  px-3 mb-1  flex gap-2 items-center"><FaPlane/>  From </label>

          <div className="relative w-full flex">
            <input
            {...register("from")}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
            placeholder="Country, city or airport"
          />

          <div className="absolute right-3 top-3 text-gray-400">
            <FaSearch/>
          </div>
          </div>
          {errors.from && (
            <p className="text-red-500 text-sm">{errors.from.message}</p>
          )}
        </div>

        <div className="w-full">
          <label className="text-white px-3 mb-1  flex gap-2 items-center"><FaPlane/>  To</label>
           <div className="relative w-full flex">
            <input
            {...register("to")}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
            placeholder="Country, city or airport"
          />

          <div className="absolute right-3 top-3 text-gray-400">
            <FaSearch/>
          </div>
          </div>
          {errors.to && (
            <p className="text-red-500 text-sm">{errors.to.message}</p>
          )}
        </div>
        </div>


        <div className="depRet">
          <div className="w-full">
          <label className="text-white  px-3 mb-1  flex gap-2 items-center">  < FaCalendarAlt/>Depart Date</label>
         
           <input
            type="date"
            {...register("departDate")}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black "
          />
        
          {errors.departDate && (
            <p className="text-red-500 text-sm">{errors.departDate.message}</p>
          )}
        </div>

        <div className="w-full">
          <label className="text-white  px-3 mb-1  flex gap-2 items-center">< FaCalendarAlt/>  Return Date</label>
          <input
            type="date"
            {...register("returnDate")}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
          />
          {errors.returnDate && (
            <p className="text-red-500 text-sm">{errors.returnDate.message}</p>
          )}
        </div>
        </div>
      </div>

      <div className=" btn">
        <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600  rounded-full text-purple px-10 py-2 rounded mt-4 flex items-center justify-center gap-10 cursor-pointer"
      >
        Next
         <  FaArrowRight/>
      </button>
    
      </div>
    </form>
  );
}
