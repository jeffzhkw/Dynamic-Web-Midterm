import React from "react";

function LyricsContent({ content }) {
  console.log("inside Content", content);
  return <div style={{ whiteSpace: `pre-wrap` }}>{content}</div>;
}

export default LyricsContent;
