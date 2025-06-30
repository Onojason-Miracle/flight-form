// app/@components/FinalSummary.tsx
"use client";

import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function FinalSummary({ onBack }: { onBack: () => void }) {
  const { formData } = useContext(FormContext);

  const handleFinalSubmit = () => {
    // You can replace this with actual form submit logic or API call
    alert("Form submitted successfully!");
    console.log("Submitted data:", formData);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Review Your Submission
      </h2>

      <div className="bg-gray-800 p-4 rounded space-y-3">
        <p>
          <strong>From:</strong> {formData.from}
        </p>
        <p>
          <strong>To:</strong> {formData.to}
        </p>
        <p>
          <strong>Depart Date:</strong> {formData.departDate}
        </p>
        <p>
          <strong>Return Date:</strong> {formData.returnDate}
        </p>
        <p>
          <strong>Ticket Type:</strong> {formData.ticketType}
        </p>
        <p>
          <strong>Gift Miles:</strong> 🎁 30 Miles
        </p>
        <p>
          <strong>Donation:</strong> {formData.foundation}
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
          onClick={handleFinalSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}
