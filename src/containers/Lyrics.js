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
  const [searchResult, setSearchResult] = useState(0); //0: no entry, 1: success, 2: not found
  const lyricsURL = `https://private-anon-f16fbaef18-lyricsovh.apiary-proxy.com/v1/${artist}/${title}}`;

  let query = useQuery();

  useEffect(() => {
    const artistInput = query.get("artist");
    const titleInput = query.get("songName");
    if (artistInput) {
      setArtist(artistInput);
    }
    if (titleInput) {
      setTitle(titleInput);
    }
  }, [query]);

  useEffect(() => {
    if (artist && title) {
      axios
        .get(lyricsURL)
        .then((response) => {
          console.log(response);
          setLyricsData(response);
          setSearchResult(1);
        })
        .catch((error) => {
          console.warn(error);
          setSearchResult(2);
        });
    }
  }, [lyricsURL, artist, title]);

  const { lyricsContent } = useMemo(() => {
    if (!lyricsData) return { lyricsContent: "" };
    else {
      return {
        lyricsContent: lyricsData.data.lyrics,
      };
    }
  }, [lyricsData]);

  return (
    <div className="lyricsWrapper">
      <div className="header">
        <h1>Song Lyrics</h1>
        <div className="custButton">
          <a href="/">To Home</a>
        </div>
      </div>

      <form className="lyricsForm">
        <div>
          <label htmlFor="artist">Artist</label>

          <input
            type="text"
            name="artist"
            placeholder="Please enter artist name.."
          ></input>
        </div>

        <div>
          <label htmlFor="songName">Song Name</label>

          <input
            type="text"
            name="songName"
            placeholder="Please enter song name..."
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <LyricsContent
        found={searchResult}
        artist={artist}
        title={title}
        content={lyricsContent}
      />
    </div>
  );
}

export default Lyrics;
