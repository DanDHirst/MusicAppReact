import React, { useState, useEffect } from "react";
import axios from "axios";

function Playlist() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get("https://localhost:7213/playlist");
        setPlaylist(response.data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((track, index) => (
          <li key={index}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
