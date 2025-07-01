"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

import {
  FaHome,
  FaGlobe,
  FaHandsHelping,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const schema = z.object({
  foundation: z.enum(["UNICEF", "Miracle O", "Red Cross", "Onojason"], {
    errorMap: () => ({ message: "Please choose a foundation" }),
  }),
});

type Step5Data = z.infer<typeof schema>;

export default function Step5({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { formData, setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step5Data>({
    resolver: zodResolver(schema),

    defaultValues: {
      foundation:
        formData.foundation === "UNICEF" ||
        formData.foundation === "Miracle O" ||
        formData.foundation === "Red Cross" ||
        formData.foundation === "Onojason"
          ? formData.foundation
          : "UNICEF",
    },
  });

  const onSubmit = (data: Step5Data) => {
    setFormData({ ...formData, ...data });
    onNext(); // go to final summary step
  };

  const foundations = [
    { name: "UNICEF", icon: <FaHome /> },
    { name: "Miracle O", icon: <FaGlobe /> },
    { name: "Red Cross", icon: <FaHandshake /> },
    { name: "Onojason", icon: <FaHandsHelping /> },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step2Form">
      <h2 className="step4Heading">Who do you want to help?</h2>

      <div className="inner">
        {foundations.map((org) => (
          <label
            key={org.name}
            className="label bg-gray-700 hover:bg-cyan-600 cursor-pointer"
          >
            <input
              type="radio"
              value={org.name}
              {...register("foundation")}
              className="accent-cyan-500 hidden"
            />
            <p className="icon">{org.icon}</p>
            <p className="text-center">{org.name}</p>
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
          Next
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
}
