// app/@components/Step3.tsx
"use client";

import { useContext } from "react";
import { FormContext } from "../context/FormContext";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

      <div className="bg-gray-800 p-4  w-full rounded space-y-3">
        <h1>Ticket Information</h1>
        <table className="min-w-full text-sm table table-auto">
          <thead className="text-center text-white">
            <tr>
              <th className="px-6 py-3">
                {" "}
                <strong>From</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>To</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>Depart</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>Return</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>Type</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>Gift Miles</strong>
              </th>
              <th className="px-6 py-3">
                {" "}
                <strong>Total</strong>
              </th>
            </tr>
          </thead>

          <tbody className="text-center text-white">
            <tr>
              <td className="px-6 py-3">{formData.from}</td>
              <td className="px-6 py-3">{formData.to}</td>
              <td className="px-6 py-3">{formData.departDate}</td>
              <td className="px-6 py-3">{formData.returnDate}</td>
              <td className="px-6 py-3">{formData.ticketType}</td>
              <td className="px-6 py-3">🎁 30 Miles</td>
              <td className="px-6 py-3">$500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-10 cursor-pointer"
        >
          <FaArrowLeft />
          Before
        </button>
        <button
          onClick={onNext}
          type="button"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-10 cursor-pointer"
        >
          Next
          <FaArrowRight />
        </button>
      </div>

      {/* <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          type="button"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
        >
          Before
        </button>
        <button
          onClick={onNext}
          type="button"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
