import { React, useState, useEffect, useMemo } from "react";
import axios from "axios";
import Color from "../components/Color";

function ColorPalette() {
  const [colorInput, setColorInput] = useState({
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  });

  const [colorResult, setColorData] = useState();
  const colorURL = "http://colormind.io/api/";

  useEffect(() => {
    axios
      .post(colorURL, JSON.stringify(colorInput))
      .then((response) => {
        console.log(response);
        setColorData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [colorInput]);

  const { colorList = [] } = useMemo(() => {
    if (!colorResult) return {};
    return {
      colorList: colorResult.result,
    };
  }, [colorResult]);

  return (
    <div className="paletteWrapper">
      <h1>Color Palette</h1>
      <div className="colorSet">
        {colorList.map((aColor, i) => {
          return <Color r={aColor[0]} g={aColor[1]} b={aColor[2]} />;
        })}
      </div>
      <button>Give me another set!</button>
      <div className="custButton">
        <a href="/">To Home</a>
      </div>
    </div>
  );
}
export default ColorPalette;
