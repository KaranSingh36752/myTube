import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findPrime(Number(text)),[text]); // Ensure text is converted to a number
  console.log(prime);

  return (
    <div
      className={`m-2 p-2 h-96 w-96 ${isDarkTheme ? "bg-slate-800 text-white" : "bg-slate-500 text-black"}`}
    >
      <button
        className="m-2 p-1 bg-red-300"
        onClick={() => setIsDarkTheme(!isDarkTheme)} // Use onClick instead of onChange
      >
        Toggle Theme
      </button>
      <div>
        <input
          className="m-2 p-1 w-72 border border-black"
          type="text"
          placeholder="prime no. to nth no."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
