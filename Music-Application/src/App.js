// App.js
import React from "react";
import Player from "./components/Player";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      <h1>My Music Player</h1>
      <Player />
      <Playlist />
    </div>
  );
}

export default App;
