import "./App.css";
import Alert from "./cpmponents/Alert";
import Navbar from "./cpmponents/Navbar";
import TextForm from "./cpmponents/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [swtext, setSwtext] = useState("Enable Dark Mode");
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      setSwtext("Disable Dark Mode");
      document.body.style.background = "#15202b";
    } else {
      setMode("light");
      setSwtext("Enable Dark Mode");
      document.body.style.background = "white";
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar mode={mode} toggelMode={toggelMode} swtext={swtext} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter your text here"
          mode={mode}
          swtext={swtext}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
