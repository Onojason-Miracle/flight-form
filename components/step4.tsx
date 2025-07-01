"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Step4({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="step4Form">
      <h2 className="step4Formh2">Miles Responsibility</h2>

      <div className="step4Div">
        <div className="imgDiv">
          <p>May the miles be with you.</p>
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1751360189/task2/Miles_Responsibility_tyv25p.png"
            alt="miles picture"
          />
        </div>
        <div className="textDiv">
          <p>
            Throughout the history, globalization and technological developments
            have always had a great effect on transportation. Today, everybody
            transports above the clouds and under the seas in more different
            ways and durations compared to past. While airplane was an extreme
            transportation vehicle for most of us only a quarter century ago,
            many people use it in their daily routines in today. Airlines
            organize so many campaigns like elastic schedules, promotion gifts
            and discounts to maintain this increase in number of people who fly
            regularly and often. Bonus miles is only one of them. Airlines offer
            bonus miles to the passenger in accordance with the length and
            frequency of their flights. However most of these miles go waste
            without growing enough to get a small gift like teddy bear let alone
            a free bonus ticket.
          </p>
        </div>
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
    </div>
  );
}
