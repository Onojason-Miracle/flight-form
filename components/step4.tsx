// app/@components/Step4.tsx
"use client";

export default function Step4({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="p-6 space-y-6 text-center">
      <h2 className="text-xl font-semibold text-white">Miles Responsibility</h2>
      <p className="text-gray-300">
        Help people in need while traveling. Your miles can make a difference.
      </p>

      {/* You can replace the image below with a real one */}
      <div className="w-full h-48 bg-gray-700 rounded flex items-center justify-center text-white">
        Image Placeholder
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
