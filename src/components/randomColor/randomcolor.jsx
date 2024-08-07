import React, { useState } from "react";
import "./randomcolor.css";

export default function Randomcolor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexRandomColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRgbRandomColor() {
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const blue = randomColorUtility(256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(rgbColor);
  }

  return (
    <div
      className="container"
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}> Create Hex Color </button>
      <button onClick={() => setTypeOfColor("rgb")}> Create rgb Color </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateHexRandomColor
            : handleCreateRgbRandomColor
        }
      >
        Generate Random Color
      </button>
      <div
       style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:'30px',
        marginTop:'10%',
        flexDirection:'column',
        gap:'10px'
       }}
      >
        <h3>{typeOfColor === 'rgb' ?'RGB color ' : 'HEX color' }</h3>
        <h1> {color}</h1>
      </div>
    </div>
  );
}
