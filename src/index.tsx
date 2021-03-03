import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./dark.css";

class RD extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <RD />
  </React.StrictMode>,
  document.getElementById("root")
);
