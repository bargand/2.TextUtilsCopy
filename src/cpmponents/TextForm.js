import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Text Change Into UpperCase", "success");
  };
  const handleLoClick = () => {
    let NewText2 = text.toLowerCase();
    setText(NewText2);
    props.showAlert("Text Change Into LowerCase", "success");
  };
  const ClearClick = () => {
    let NewText2 = "";
    setText(NewText2);
    props.showAlert("Text Cleared", "warning");
  };

  const CopyClick = () => {
    let CopyText = document.getElementById("exampleFormControlTextarea1");
    CopyText.select();
    navigator.clipboard.writeText(CopyText.value);
    props.showAlert("Coppyed To Clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //remove extra spaces
  const handleExtraSpaces = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert("Extra Spacess Removed", "success");
  };
  return (
    <>
      <div
        className="main"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="container">
          <div className="mb-3 mt-3">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Enter your text here"
              value={text}
              onChange={
                handleOnChange
              } /* this is used for type the text in textarea*/
              style={{
                background: props.mode === "light" ? "white" : "#15202b",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
            <button
              className="btn btn-primary mb-3 my-4 mx-2"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary mb-3 my-4 mx-2"
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>
            <button
              className="btn btn-success mb-3 my-4 mx-2"
              onClick={CopyClick}
            >
              Copy Text
            </button>
            <button
              className="btn btn-danger mb-3 my-4 mx-2"
              onClick={ClearClick}
            >
              Clear Text
            </button>
            <button
              className="btn btn-warning mb-3 my-4 mx-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="comtainer2 my-3">
          <h1>Your Text Summary</h1>
          <h3>
            You Have {text.split(" ").filter((t)=>t !== "").length} Words And {text.length} Characters
          </h3>
          <h1>Average Time(min) To Read</h1>
          <h3>{0.004 * text.split(" ").length - 0.004}</h3>
          <h1>Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
