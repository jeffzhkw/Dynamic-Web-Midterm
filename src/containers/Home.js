import { React, useState, useEffect, useMemo } from "react";
import axios from "axios";
import Color from "../components/Color";
import Lyrics from "../components/Lyrics";

function Home() {
  const [colorInput, setColorInput] = useState({
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  });
  const [colorResult, setColorData] = useState();
  const [lyricsData, setLyricsData] = useState(); //can update in onClick
  const [artist, setArtist] = useState();
  const [title, setTitle] = useState();

  const colorURL = "http://colormind.io/api/";
  const lyricsURL = `https://private-anon-f16fbaef18-lyricsovh.apiary-proxy.com/v1/${artist}/${title}}`;

  useEffect(() => {
    axios
      .post(colorURL, JSON.stringify(colorInput))
      .then((response) => {
        setColorData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [colorInput]);

  useEffect(() => {
    axios
      .get(lyricsURL)
      .then((response) => {
        setLyricsData(response);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [lyricsURL]);

  const { colorList = [] } = useMemo(() => {
    if (!colorResult) return {};
    return {
      colorList: colorResult.result,
    };
  }, [colorResult]);

  const { lyricsContent = "" } = useMemo(() => {
    if (!lyricsData) return {};
    return {
      lyricsContent: lyricsData.lyrics,
    };
  }, [lyricsData]);

  return (
    <div className="homeWrapper">
      <p>Hello World in Home</p>
      {colorList.map((aColor, i) => {
        return <Color r={aColor[0]} g={aColor[1]} b={aColor[2]} />;
      })}
      <Lyrics content={lyricsContent} />
    </div>
  );
}

export default Home;
