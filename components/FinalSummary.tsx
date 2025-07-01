"use client";

import { useContext } from "react";
import { FormContext } from "../context/FormContext";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FinalSummary({
  onBack,
  resetSteps,
}: {
  onBack: () => void;
  resetSteps: () => void;
}) {
  const { formData, resetFormData } = useContext(FormContext);

  const handleFinalSubmit = () => {
    alert("Form submitted successfully!");
    console.log("Submitted data:", formData);
    resetFormData();
    resetSteps(); 
  };

  return (
    <div className="step3Form">
      <h2 className="text-xl font-semibold text-white text-center">
        Review Your Submission
      </h2>

      <table className="w-full text-sm sm:table table-auto mt-8 md:table sm:flex block bg-gray-700 rounded">
        <thead className=" text-red sm:table-row-group block inline-block sm:inline sm:w-auto  w-1/2">
          <tr className="flex flex-col sm:table-row">
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>From</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>To</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>Depart Date</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>Return Date</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>Miles</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>Foundation</strong>
            </th>
            <th className="px-6 py-3 block sm:table-cell">
              {" "}
              <strong>Price</strong>
            </th>
          </tr>
        </thead>

        <tbody className="text-center  text-white sm:table-row-group block inline-block sm:inline sm:w-auto w-1/2">
          <tr className="flex flex-col sm:table-row">
            <td className="px-6 py- block sm:table-cell">{formData.from}</td>
            <td className="px-6 py-3 block sm:table-cell">{formData.to}</td>
            <td className="px-6 py-3">{formData.departDate}</td>
            <td className="px-6 py-3 block sm:table-cell">
              {formData.returnDate}
            </td>
            <td className="px-6 py-3 block sm:table-cell">
              {formData.ticketType}
            </td>
            <td className="px-6 py-3 block sm:table-cell">2129</td>
            <td className="px-6 py-3 block sm:table-cell">21143</td>
          </tr>
        </tbody>
      </table>

      <div className="step5Btn">
        <button
          onClick={onBack}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-10 cursor-pointer"
        >
          <FaArrowLeft />
          Before
        </button>
        <button
          onClick={handleFinalSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2  rounded-full flex items-center justify-center gap-10 cursor-pointer"
        >
          <FaArrowRight />
          Submit
        </button>
      </div>
    </div>
  );
}
