import React from "react";
import type { ElementClass } from "../types/commonTypes";

// Input types
interface TextInputType {
  name: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  inputClass?: ElementClass;
  autocomplete?: string;
}

const TextInput = ({
  name,
  value,
  placeholder,
  label,
  change,
  inputClass,
  autocomplete,
}: TextInputType) => {
  return (
    <div
      className={`flex flex-col gap-0.5 ${inputClass?.containerClass ?? ""}`}
    >
      <label
        className={`text-sm font-bold text-gray-800 md:text-base lg:text-lg xl:text-xl ${
          inputClass?.labelClass ?? ""
        }`}
      >
        {label}
      </label>
      <input
        className={`border border-gray-200 p-1 ${
          inputClass?.elementClass ?? ""
        }`}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={change}
        autoComplete={autocomplete ?? "off"}
      />
    </div>
  );
};

export default TextInput;
