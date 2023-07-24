import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1 id="heading">Hello from Jsx</h1>
      <p>Para</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
