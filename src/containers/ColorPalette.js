import { React, useState, useEffect, useMemo } from "react";
import axios from "axios";
import Color from "../components/Color";

function ColorPalette() {
  const [colorInput, setColorInput] = useState({
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  });

  const [colorResult, setColorResult] = useState();
  const colorURL = "http://colormind.io/api/";

  useEffect(() => {
    axios
      .post(colorURL, JSON.stringify(colorInput))
      .then((response) => {
        setColorResult(response.data);
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
      <div className="header">
        <h1>Color Palette</h1>
        <div className="custButton">
          <a href="/">To Home</a>
        </div>
      </div>

      <div className="colorSet">
        {colorList.map((aColor, i) => {
          return <Color r={aColor[0]} g={aColor[1]} b={aColor[2]} key={i} />;
        })}
      </div>

      <button
        onClick={() => {
          setColorInput({
            model: "default",
            input: ["N", "N", "N", "N", "N"],
          });
        }}
      >
        Give me another set!
      </button>
    </div>
  );
}
export default ColorPalette;
