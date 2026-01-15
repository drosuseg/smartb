// components/FormContainer.tsx
"use client";

import { ReactNode, FC } from "react";

type FormContainerProps = {
  children: ReactNode;
};

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 border border-gray-200">
      {children}
    </div>
  );
};

export default FormContainer;
