// app/@components/Step3.tsx
"use client";

import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Step3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { formData } = useContext(FormContext);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Summary</h2>

      <div className="bg-gray-800 p-4 rounded space-y-3">
        <p>
          <strong>From:</strong> {formData.from}
        </p>
        <p>
          <strong>To:</strong> {formData.to}
        </p>
        <p>
          <strong>Depart:</strong> {formData.departDate}
        </p>
        <p>
          <strong>Return:</strong> {formData.returnDate}
        </p>
        <p>
          <strong>Ticket Type:</strong> {formData.ticketType}
        </p>
        <p>
          <strong>Gift Miles:</strong> 🎁 30 Miles
        </p>
        <p>
          <strong>Total:</strong> $80
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
        >
          Before
        </button>
        <button
          onClick={onNext}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
