"use client";

import Link from "next/link";
import Header from "../../components/header";
import RoleSelector from "./components/RoleSelector";
import SocialLoginButton from "../signin/components/SocialLoginButton";

import { useSignUpForm } from "./hooks/useSignUpForm";
import ResidentForm from "./sections/ResidentForm";
import ServicesForm from "./sections/ServicesForm";
import BrgyOfficialsForm from "./sections/BrgyOfficialsForm";

/* ✅ Role type */
export type Role = "Resident" | "Services" | "BrgyOfficials";

export default function SignUpPage() {
  const {
    role,
    formData,
    isLoading,
    errorMessage,
    successMessage,
    setFiles,
    updateField,
    resetForm,
    submit,
  } = useSignUpForm();

  /* ✅ Typed change handler */
  const handleRoleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    resetForm(e.target.value as Role);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-12 border border-gray-200">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign Up</h1>
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Login Now
              </Link>
            </p>
          </div>

          {/* MESSAGES */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
              {errorMessage}
            </div>
          )}

          <form onSubmit={submit}>
            {/* ROLE FORMS */}
            {role === "Resident" && (
              <ResidentForm
                formData={formData}
                updateField={updateField}
                onFileChange={setFiles}
              />
            )}

            {role === "Services" && (
              <ServicesForm
                formData={formData}
                updateField={updateField}
                onFileChange={setFiles}
              />
            )}

            {role === "BrgyOfficials" && (
              <BrgyOfficialsForm
                formData={formData}
                updateField={updateField}
                onFileChange={setFiles}
              />
            )}

            {/* ROLE SELECTOR */}
            <div className="mt-8">
              <RoleSelector
                role={role}
                onChange={handleRoleChange}
              />
            </div>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 border-t border-gray-300" />
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300" />
            </div>

            <SocialLoginButton
              onClick={() => {
                console.log("Google signup clicked");
              }}
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-semibold py-3 rounded-full shadow-md transition-colors duration-200 ${
                isLoading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white mt-3`}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>

            {/* FOOTER LINK */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Have an account?{" "}
              <Link
                href="/signin"
                className="text-green-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
