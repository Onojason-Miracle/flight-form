"use client";

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
} from "react-icons/fa";

import { FaSignsPost } from "react-icons/fa6";
import { MdOutlineSummarize } from "react-icons/md";

type Props = {
  currentStep: number;
};

const steps = [
  { id: 1, label: "Location", icon: "<FaMapMarkedAlt/>" },
  { id: 2, label: "Ticket", icon: "<FaSignsPost/>" },
  { id: 3, label: "Info", icon: "<FaChartLine/>" },
  { id: 4, label: "Miles", icon: "<FaBook/>" },
  { id: 5, label: "Help", icon: "<FaHeart/>" },
  { id: 6, label: "Review", icon: "<MdOutlineSummarize/>" },
];

export default function ProgressBar({ currentStep }: Props) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Search Flights, Cheapest Flights
        </h2>
        <p className="text-gray-400">
          All the plane tickets you are looking for together!
        </p>
      </div>

      <div className="flex justify-center gap-4 py-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step.id
                ? "border-cyan-500 bg-cyan-500"
                : "border-gray-500"
            }`}
          >
            <span className="text-white">{step.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
