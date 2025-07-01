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
    <div className="step3Form">
    
 <div className="flightInfo">
       <div className="step3Header">
         <h1>Ticket Information</h1>
       </div>


        <table className="w-full text-sm sm:table table-auto md:table sm:flex block">
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
                <strong>Type</strong>
              </th>
              <th className="px-6 py-3 block sm:table-cell">
                {" "}
                <strong>Date</strong>
              </th>
              <th className="px-6 py-3 block sm:table-cell">
                {" "}
                <strong>Price</strong>
              </th>
              <th className="px-6 py-3 block sm:table-cell">
                {" "}
                <strong>Miles</strong>
              </th>
              <th className="px-6 py-3 block sm:table-cell">
                {" "}
                <strong>Gift Miles</strong>
              </th>
            </tr>
          </thead>

        

          <tbody className="text-center  text-white sm:table-row-group block inline-block sm:inline sm:w-auto w-1/2">
            <tr className="flex flex-col sm:table-row">
              <td className="px-6 py- block sm:table-cell">{formData.from}</td>
              <td className="px-6 py-3 block sm:table-cell">{formData.to}</td>
              <td className="px-6 py-3">{formData.ticketType}</td>
              <td className="px-6 py-3 block sm:table-cell">{formData.departDate}</td>
              <td className="px-6 py-3 block sm:table-cell">21143</td>
              <td className="px-6 py-3 block sm:table-cell">2129</td>
              <td className="px-6 py-3 block sm:table-cell">32.7</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="formInfoBtn">
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
