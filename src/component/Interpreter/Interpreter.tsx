import React, { useState } from "react";

const Interpreter: React.FC = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      setSubmittedText(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleSubmit}
        value={text}
      />
      <p>{submittedText}</p>
    </div>
  );
};

export default Interpreter;
