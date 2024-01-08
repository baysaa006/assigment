// Custom components
import React, { useState } from "react";

function InputField(props: {
  id: string;
  label: string;
  extra: string;
  placeholder: string;
  variant: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  required?: boolean;
  password?: boolean;
  className?: string;
  onChange?: (e: any) => void;
}) {
  const {
    label,
    id,
    extra,
    type,
    placeholder,
    variant,
    state,
    disabled,
    onChange,
    required,
    password,
    className,
  } = props;

  const [show, setShow] = useState(false);

  const togglePassword = () => {
    if (show) setShow(false);
    else setShow(true);
  };

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        } `}
      >
        {label}
      </label>
      <div className="relative">
        <input
          required={required}
          onChange={onChange}
          disabled={disabled}
          type={type === "password" ? (show ? "" : "password") : type}
          id={id}
          placeholder={placeholder}
          className={`relative mt-2 flex h-12 w-full appearance-none items-center justify-center rounded-md border-2 border-gray-600 bg-white/0 p-3 text-sm outline-none ${
            disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          } ${className}`}
        />
        {password && (
          <button
            type="button"
            className="absolute inset-y-0 right-[10px]  flex cursor-pointer items-center pr-3 text-gray-500"
            onClick={togglePassword}
          >
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14a7 7 0 01-14 0"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
