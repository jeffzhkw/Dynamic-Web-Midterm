import { React, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import LyricsContent from "../components/LyricsContent";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Lyrics() {
  const [lyricsData, setLyricsData] = useState(); //can update in onClick
  const [artist, setArtist] = useState();
  const [title, setTitle] = useState();
  const lyricsURL = `https://private-anon-f16fbaef18-lyricsovh.apiary-proxy.com/v1/${artist}/${title}}`;

  let query = useQuery();

  useEffect(() => {
    const artistInput = query.get("artist");
    const titleInput = query.get("songName");
    console.log(artistInput, titleInput);
    if (artistInput) {
      setArtist(artistInput);
    }
    if (titleInput) {
      setTitle(titleInput);
    }
  });
  useEffect(() => {
    axios
      .get(lyricsURL)
      .then((response) => {
        console.log(response);
        setLyricsData(response);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [lyricsURL]);

  const { lyricsContent = "" } = useMemo(() => {
    if (!lyricsData) return {};
    return {
      lyricsContent: lyricsData.data.lyrics,
    };
  }, [lyricsData]);

  return (
    <div className="lyricsWrapper">
      <p>Hello world from the lyrics</p>
      <form>
        <div>
          <label for="artist">Artist</label>
          <input
            type="text"
            name="artist"
            placeholder="Please enter artist name.."
          ></input>
        </div>
        <div>
          <label for="songName">Song Name</label>
          <input
            type="text"
            name="songName"
            placeholder="Please enter song name..."
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {console.log(lyricsContent)}
      <LyricsContent content={lyricsContent} />
    </div>
  );
}

export default Lyrics;
