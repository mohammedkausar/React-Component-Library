import { useState } from "react";
import TextInput from "./components/TextInput";
import Dropdown from "./components/Dropdown";

function App() {
  const [input, setInput] = useState("");
  const options = [
    {
      label: "Option 1",
      value: "Option 1",
    },
  ];

  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleDropdownChange = (val: string) => {
    setSelectedValue(val);
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <>
      <TextInput
        name="email"
        value={input}
        placeholder="Enter email"
        label="Email"
        change={(e) => {
          setInput(e.target.value);
        }}
      ></TextInput>
      <Dropdown
        label="Dropdown"
        options={options}
        isDropDownOpen={isDropDownOpen}
        setIsDropdownOpen={toggleDropdown}
        change={handleDropdownChange}
        value={selectedValue}
      />
    </>
  );
}

export default App;
