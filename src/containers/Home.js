import { React, useState, useEffect, useMemo } from "react";

function Home() {
  return (
    <div className="homeWrapper">
      <p>Hello World in Home</p>
      <p>
        <a href="/color">To Color</a>
      </p>
      <p>
        <a href="lyrics">To Lyrics</a>
      </p>
    </div>
  );
}

export default Home;
