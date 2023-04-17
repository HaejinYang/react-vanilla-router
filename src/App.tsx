import React from "react";
import { AccordionList } from "./component/Accordion/Accordion";
import ColorSelector from "./component/ColorSelector/ColorSelector";
import Interpreter from "./component/Interpreter/Interpreter";
import Route from "./component/Route/Route";
import Header from "./component/Header/Header";

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
      <Header />
      <Route route="/accordion">
        <AccordionList />
      </Route>
      <Route route="/color-selector">
        <ColorSelector />
      </Route>
      <Route route="/interpreter">
        <Interpreter />
      </Route>
      <Route route="/all">
        <AccordionList />
        <ColorSelector />
        <Interpreter />
      </Route>
    </>
  );
}

export default App;
