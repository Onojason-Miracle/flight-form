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
  FaBars,
} from "react-icons/fa";

import { FaSignsPost } from "react-icons/fa6";
import { MdOutlineSummarize, MdRateReview, MdAnalytics } from "react-icons/md";

type Props = {
  currentStep: number;
};

const steps = [
  { id: 1, label: "Location", icon: <FaMapMarkedAlt /> },
  { id: 2, label: "Ticket", icon: <FaSignsPost /> },
  { id: 3, label: "Info", icon: <FaChartLine /> },
  { id: 4, label: "Miles", icon: <FaBook /> },
  { id: 5, label: "Help", icon: <FaHeart /> },
];

export default function ProgressBar({ currentStep }: Props) {
  return (
    <section className="progressBar">
      <div className="headerDiv">
        <h2 className="p-header">Search Flights, Cheapest Flights</h2>
        <p className="p-headerp">
          All the plane tickets you are looking for together!
        </p>
      </div>

      <div className="iconsBar">
        <div className="iconsBarDiv">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2  ${
                currentStep >= step.id
                  ? "border-cyan-500 bg-cyan-500 "
                  : "border-white-500 bg-white "
              }`}
            >
              <span className=" text-black">{step.icon}</span>
            </div>
          ))}
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
}
