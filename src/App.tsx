import React from "react";
import { AccordionList } from "./component/Accordion/Accordion";
import ColorSelector from "./component/ColorSelector/ColorSelector";
import Interpreter from "./component/Interpreter/Interpreter";

const ShowAccordionList = () => {
  if (window.location.pathname === "/accordion") {
    return <AccordionList />;
  }
};

const ShowColorSelector = () => {
  if (window.location.pathname === "/color-selector") {
    return <ColorSelector />;
  }
};

const ShowInterpreter = () => {
  if (window.location.pathname === "/interpreter") {
    return <Interpreter />;
  }
};

function App() {
  console.log(window.location.pathname);
  return (
    <>
      {ShowAccordionList()}
      {ShowColorSelector()}
      {ShowInterpreter()}
    </>
  );
}

export default App;
