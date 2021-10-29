import { React } from "react";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContent">
        <h1>Welcome to my midterm project</h1>
        <p>To randomly get five colors, select "To Color"</p>
        <p>To get the lyrics from a song, select "To Lyrics"</p>
      </div>
      <div className="nav">
        <div className="custButton">
          <a href="/color">To Color</a>
        </div>
        <div className="custButton">
          <a href="lyrics">To Lyrics</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
