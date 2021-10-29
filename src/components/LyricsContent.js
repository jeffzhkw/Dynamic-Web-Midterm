import React from "react";

function LyricsContent({ found, content, artist, title }) {
  if (found === 1) {
    return (
      <div>
        <p>
          Result for {artist} - {title}
        </p>
        <p style={{ whiteSpace: `pre-wrap` }}>{content}</p>
      </div>
    );
  } else if (found === 2) {
    return <p>Lyrics Not Found</p>;
  } else {
    return <p>Please Enter</p>;
  }
}

export default LyricsContent;
