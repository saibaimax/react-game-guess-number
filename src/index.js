import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NumberGuessing from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NumberGuessing />
  </StrictMode>,
  rootElement
);
