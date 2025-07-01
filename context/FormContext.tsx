"use client";

import { createContext, useState } from "react";

type FormDataType = {
  from?: string;
  to?: string;
  departDate?: string;
  returnDate?: string;
  ticketType?: string;
  foundation?: string;
};

export const FormContext = createContext<{
  formData: FormDataType;
  setFormData: (data: FormDataType) => void;
  resetFormData: () => void;
}>({
  formData: {},
  setFormData: () => {},
  resetFormData: () => {},
});

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormDataState] = useState<FormDataType>({});

  const setFormData = (data: FormDataType) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormDataState({});
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
      <div className=" form-details">{children}</div>
    </FormContext.Provider>
  );
}
