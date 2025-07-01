// app/@components/Step5.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";


import {
  FaPlane,
  FaChartLine,
  FaBook,
  FaHeart,
  FaCrown,
  FaUser,
  FaHome,
  FaGlobe,
  FaHandsHelping,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkedAlt,
  FaSearch,
  FaMapMarkerAlt,
  FaThLarge,
  FaBars,
} from "react-icons/fa";

import { FaSignsPost } from "react-icons/fa6";
import { MdOutlineSummarize, MdRateReview, MdAnalytics } from "react-icons/md";

const schema = z.object({
  foundation: z.enum(["UNICEF", "Save the Children", "Red Cross", "World Vision"], {
    errorMap: () => ({ message: "Please choose a foundation" }),
  }),
});

type Step5Data = z.infer<typeof schema>;

export default function Step5({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { formData, setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step5Data>({
    resolver: zodResolver(schema),
    defaultValues: {
      foundation: formData.foundation || undefined,
    },
  });

  const onSubmit = (data: Step5Data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  const foundations = [
    { name: "UNICEF", icon: <FaHome/> },
    { name: "Save the Children", icon: <FaGlobe/> },
    { name: "Red Cross", icon:  <FaHandshake/> },
    { name: "World Vision", icon: <FaHandsHelping/>}
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step2Form">
      <h2 className="step4Heading">Who do you want to help?</h2>
    

      <div className="inner ">
        {foundations.map((org) => (
          <label
            key={org.name}
            className=" label  bg-gray-700  hover:bg-cyan-600 cursor-pointer"
          >
            <input
              type="radio"
              value={org.name}
              {...register("foundation")}
              className="accent-cyan-500 hidden"
            />
           
           
              <p className="icon">{org.icon}</p>
              <p className=" text-center">{org.name}</p>
            
            
          </label>
        ))}
      </div>

      {errors.foundation && (
        <p className="text-red-500 text-sm">{errors.foundation.message}</p>
      )}

       <div className="step5Btn">
              <button
                type="button"
                onClick={onBack}
                className="bg-white hover:bg-gray-300 text-black px-6 py-2 rounded-full flex items-center justify-center gap-10 cursor-pointer"
              >
                <FaArrowLeft />
                Before
              </button>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-10 cursor-pointer"
              >
                submit
                <FaArrowRight />
              </button>
            </div>
    </form>
  );
}
