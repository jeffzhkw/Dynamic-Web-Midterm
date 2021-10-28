import React from "react";

function Lyrics({ content }) {
  return (
    <div className="lyricsWrapper">
      <p>Hello world from the lyrics</p>
      <p>{content}</p>
    </div>
  );
}

export default Lyrics;
