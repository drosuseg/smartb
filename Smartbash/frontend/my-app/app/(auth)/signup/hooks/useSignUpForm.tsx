import { useState, FormEvent } from "react";
import { validateForm } from "../utils/validation";

// ✅ Role type
export type Role = "Resident" | "Services" | "BrgyOfficials";

// Form data
export interface SignUpFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  contactNo: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  name: string;
  location: string;
  barangayName: string;
  contact: string;
}

export function useSignUpForm() {
  const [role, setRole] = useState<Role>("Resident");
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    name: "",
    location: "",
    barangayName: "",
    contact: "",
  });

  const [files, setFiles] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const updateField = (field: keyof SignUpFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = (newRole?: Role) => {
    if (newRole) setRole(newRole);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      name: "",
      location: "",
      barangayName: "",
      contact: "",
    });
    setFiles(null);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const error = validateForm(role, formData);
    if (error) {
      setErrorMessage(error);
      return;
    }

    setIsLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append("role", role);

      for (const key in formData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const value = (formData as any)[key];
        if (value) formPayload.append(key, value);
      }

      if (files) formPayload.append("file", files);

      const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
        method: "POST",
        body: formPayload,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccessMessage("Registration successful!");
      setTimeout(() => (window.location.href = "/signin"), 2000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Registration failed";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    role,
    formData,
    files,
    isLoading,
    errorMessage,
    successMessage,
    setFiles,
    updateField,
    resetForm,
    submit,
    setRole,
  };
}
