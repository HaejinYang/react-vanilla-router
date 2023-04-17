import React, { useState } from "react";
import styled from "styled-components";

interface BoxProps {
  backgroundColor: string;
}

const Box = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`;

const ColorSelector: React.FC = () => {
  const [select, setSelect] = useState("red");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <select name="color" onChange={handleChange} value={select}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <Box backgroundColor={select}></Box>
    </div>
  );
};

export default ColorSelector;
