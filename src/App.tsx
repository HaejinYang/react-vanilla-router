import React from "react";
import { AccordionList } from "./component/Accordion/Accordion";
import ColorSelector from "./component/ColorSelector/ColorSelector";
import Interpreter from "./component/Interpreter/Interpreter";

function App() {
  return (
    <div>
      <AccordionList />
      <ColorSelector />
      <Interpreter />
    </div>
  );
}

export default App;
