import React from "react";

function Color({ r, g, b }) {
  return (
    <div className="aColorWrapper">
      <div
        style={{
          backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`,
          height: `200px`,
        }}
      >
        R: {r}
        G: {g}
        B: {b}
      </div>
    </div>
  );
}
export default Color;
