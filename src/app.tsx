import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
  return <div>Hello</div>;
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
