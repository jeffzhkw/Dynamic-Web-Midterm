import React from "react";

function LyricsContent({ found, content, artist, title }) {
  if (found === 1) {
    return (
      <div className="lyricsContentWrapper">
        <p>
          Result for {artist} - {title}
        </p>
        <p style={{ whiteSpace: `pre-wrap` }}>{content}</p>
      </div>
    );
  } else if (found === 2) {
    return (
      <div className="lyricsContentWrapper">
        <p>Lyrics Not Found</p>
      </div>
    );
  } else {
    return (
      <div className="lyricsContentWrapper">
        <p>Please enter the artist and song name.</p>
      </div>
    );
  }
}

export default LyricsContent;
