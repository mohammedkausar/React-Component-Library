import { useState } from "react";
import TextInput from "./components/TextInput";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <TextInput
        name="email"
        value={input}
        placeholder="Enter email"
        label="Email"
        change={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      ></TextInput>
    </>
  );
}

export default App;
