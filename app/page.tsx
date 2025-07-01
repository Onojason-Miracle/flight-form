"use client";
import { useState } from "react";
import { FormProvider } from "../context/FormContext";
import ProgressBar from "@/components/ProgressBar";
import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import Step4 from "@/components/step4";
import Step5 from "@/components/step5";
import FinalSummary from "@/components/FinalSummary";

export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetSteps = () => setStep(1);

  return (
    <main className=" homepage">
      <ProgressBar currentStep={step} />

      <FormProvider>
        {step === 1 && <Step1 onNext={nextStep} />}
        {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
        {step === 3 && <Step3 onNext={nextStep} onBack={prevStep} />}
        {step === 4 && <Step4 onNext={nextStep} onBack={prevStep} />}
        {step === 5 && <Step5 onNext={nextStep} onBack={prevStep} />}
        {step === 6 && (
          <FinalSummary onBack={prevStep} resetSteps={resetSteps} />
        )}
      </FormProvider>
    </main>
  );
}
