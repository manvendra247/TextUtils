import React, { useState } from "react";
//useState is used to use "hooks" in react.
//hooks make it possible to use class features in function based components.
export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <div
        className="container"
       
        style={{ paddingBottom: 20, paddingBlockStart: 20 }}
      >
        <div>
          <span>{props.heading}</span>
          <svg
            style={{ right: 120, position: "absolute" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clipboard"
            viewBox="0 0 16 16"
          >
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
        </div>
        <div className="mb-3">
          <textarea
            rows="10"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'light' : 'dark',
              color:props.mode==='light'?'dark':"light"
            }}
            id="myBox"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          {" "}
          Convert to Upper Case{" "}
        </button>
      </div>
      {/* <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div> */}
    </>
  );
}
