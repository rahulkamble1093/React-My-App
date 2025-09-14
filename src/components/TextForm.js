import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    console.log("Upper Case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLowerCaseClick = () => {
    console.log("Upper Case was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("OnChnage Function");
    setText(event.target.value);
  };

  const handleCapitalWordClick = (event) => {
    console.log("OnChnage Function");
    setText((text) => text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const handleReverseClick = (event) => {
    console.log("OnChnage Function");
    setText((text) => text.split("").reverse().join(""));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalWordClick}
        >
          Capitalize Word
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse
        </button>
      </div>
      <div className="container my-2">
        <h3>Your Text Sumamry</h3>
        <p>
          Words = {text.split(" ").length}; Text Length {text.length}
        </p>
        <p>
          you can read the entire text in about{" "}
          {Math.round(0.008 * text.split(" ").length * 100) / 100} minutes
        </p>
        <h3>Preview</h3>
        {text}
      </div>
    </>
  );
}
