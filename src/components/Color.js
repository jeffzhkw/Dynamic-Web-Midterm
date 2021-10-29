import React from "react";

function Color({ r, g, b }) {
  return (
    <div
      className="aColor"
      style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 1)` }}
    >
      <div>R: {r} </div>
      <div> G: {g} </div>
      <div>B: {b}</div>
    </div>
  );
}
export default Color;
