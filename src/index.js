import React from "react";
import ReactDOM from "react-dom/client";

import Garage from "./components/Garage";
import Form from "./components/Form";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const send = () => {
  console.log("asdad");
};

root.render(
  <>
    <Garage color="rojo" numero={6} send={send} />
    <Form />
    <Counter />
  </>
);
