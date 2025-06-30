// app/multistep/components/Step1.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

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
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-white">From</label>
          <input
            {...register("from")}
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Country, city or airport"
          />
          {errors.from && (
            <p className="text-red-500 text-sm">{errors.from.message}</p>
          )}
        </div>

        <div>
          <label className="text-white">To</label>
          <input
            {...register("to")}
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Country, city or airport"
          />
          {errors.to && (
            <p className="text-red-500 text-sm">{errors.to.message}</p>
          )}
        </div>

        <div>
          <label className="text-white">Depart Date</label>
          <input
            type="date"
            {...register("departDate")}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          {errors.departDate && (
            <p className="text-red-500 text-sm">{errors.departDate.message}</p>
          )}
        </div>

        <div>
          <label className="text-white">Return Date</label>
          <input
            type="date"
            {...register("returnDate")}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          {errors.returnDate && (
            <p className="text-red-500 text-sm">{errors.returnDate.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded mt-4"
      >
        Next
      </button>
    </form>
  );
}
