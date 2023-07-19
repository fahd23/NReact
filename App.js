import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "1" },
      "Hello world from react!"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "2" },
      "Hello world from react!"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
