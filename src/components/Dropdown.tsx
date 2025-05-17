import type { ElementClass } from "../types/commonTypes";
import { ChevronDown } from "lucide-react";

//Dropdown types
interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownType {
  options: Array<DropdownOptions>;
  change: (value: string) => void;
  value?: string;
  label?: string;
  dropDownClass?: ElementClass;
  isDropDownOpen?: boolean;
  setIsDropdownOpen: () => void;
}

const Dropdown = ({
  options,
  label,
  dropDownClass,
  change,
  value,
  isDropDownOpen,
  setIsDropdownOpen,
}: DropdownType) => {
  return (
    <div className={dropDownClass?.containerClass}>
      <label className="text-slate-800">{label}</label>
      <button
        onClick={setIsDropdownOpen}
        className={`px-4 w-full py-2 flex items-center justify-between  rounded border border-[#828FA340] hover:border-primary cursor-pointer relative ${dropDownClass?.elementClass}`}
      >
        <span
          className={`  ${
            !value ? "text-slate-400" : "text-slate-800 font-semibold"
          }`}
        >
          {value || label}
        </span>
        <ChevronDown
          className={`ml-auto text-slate-400 ${
            isDropDownOpen ? "rotate-180" : "rotate-0"
          }`}
          size={16}
        />
      </button>
      {options?.length && isDropDownOpen && (
        <ul className="py-1 px-2 mt-0.5 border border-gray-300 rounded-lg">
          {options?.map((opt) => (
            <li
              key={opt.value}
              className="border-b text-gray-500 border-gray-300 last:border-b-0 cursor-pointer"
              onClick={() => change(opt.value)}
            >
              {opt.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
