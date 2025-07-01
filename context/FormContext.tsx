// app/multistep/context/FormContext.tsx
"use client";
import { createContext, useState, ReactNode } from "react";


export const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
    <div className=" form-details">
    
       {children}
    </div>
    </FormContext.Provider>
  );
};
