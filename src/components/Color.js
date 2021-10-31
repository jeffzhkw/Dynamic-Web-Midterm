import React from "react";

function componentToHex(c) {
  var hex = c.toString(16).toUpperCase();
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function Color({ r, g, b }) {
  let result = rgbToHex(r, g, b);
  return (
    <div className="aColor" style={{ backgroundColor: result }}>
      <span style={{ color: `rgb(${255 - r}, ${255 - g}, ${255 - b}, 1)` }}>
        {result}
      </span>
    </div>
  );
}
export default Color;
