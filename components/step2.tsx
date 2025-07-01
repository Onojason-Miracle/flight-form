"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

import { FaCrown, FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const schema = z.object({
  ticketType: z.enum(["Business", "Economy"], {
    errorMap: () => ({ message: "Select a ticket type" }),
  }),
});

type Step2Data = z.infer<typeof schema>;

export default function Step2({
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
  } = useForm<Step2Data>({
    resolver: zodResolver(schema),
    defaultValues: {
      ticketType:
        formData.ticketType === "Business" || formData.ticketType === "Economy"
          ? formData.ticketType
          : "Economy",
    },
  });

  const onSubmit = (data: Step2Data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" step2Form">
      <h2 className="step2Header">What type of ticket do you want?</h2>
      <div className="step2InnerDiv">
        <div className="grid grid-cols-2 sm:gap-2 gap-6">
          <label className="cursor-pointer border border-gray-500 rounded p-4 flex bg-gray-700 hover:bg-cyan-600  items-center justify-center">
            <input
              type="radio"
              value="Business"
              {...register("ticketType")}
              className="hidden"
            />
            <div>
              <FaCrown className="icon" />
              <p className="text-white">Business</p>
            </div>
          </label>

          <label className="cursor-pointer border border-gray-500 rounded p-4 flex bg-gray-700 hover:bg-cyan-600 items-center justify-center">
            <input
              type="radio"
              value="Economy"
              {...register("ticketType")}
              className="hidden"
            />
            <div>
              <FaUser className="icon" />
              <p className="text-white">Economy</p>
            </div>
          </label>
        </div>

        {errors.ticketType && (
          <p className="text-red-500 text-sm">{errors.ticketType.message}</p>
        )}

        <div className="step2Btn">
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
      </div>
    </form>
  );
}
