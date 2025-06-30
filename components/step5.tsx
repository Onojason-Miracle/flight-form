// app/@components/Step5.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const schema = z.object({
  foundation: z.enum(["UNICEF", "Save the Children", "Red Cross"], {
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
      foundation: formData.foundation || undefined,
    },
  });

  const onSubmit = (data: Step5Data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Donate Miles</h2>
      <p className="text-gray-300">Choose a foundation to support:</p>

      <div className="space-y-4">
        {["UNICEF", "Save the Children", "Red Cross"].map((org) => (
          <label
            key={org}
            className="cursor-pointer flex items-center gap-2 border border-gray-500 rounded p-3 hover:bg-cyan-600"
          >
            <input
              type="radio"
              value={org}
              {...register("foundation")}
              className="accent-cyan-500"
            />
            <span className="text-white">{org}</span>
          </label>
        ))}
      </div>

      {errors.foundation && (
        <p className="text-red-500 text-sm">{errors.foundation.message}</p>
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
        >
          Before
        </button>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
