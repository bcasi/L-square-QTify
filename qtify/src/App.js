import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { getNewAlbums, getTopAlbums } from "./api/albumsApi";
import { getSongs } from "./api/songsApi";

function App() {
  const [data, setData] = useState({});

  function getData(source, key) {
    source().then((res) => {
      setData((prevState) => {
        const value = { ...prevState, [key]: res };
        return value;
      });
    });
  }

  useEffect(() => {
    getData(getTopAlbums, "topAlbums");
    getData(getNewAlbums, "newAlbums");
    getData(getSongs, "songs");
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <div>
      <Navbar />
      <Outlet context={{ topAlbums, newAlbums, songs }} />
    </div>
  );
}

export default App;
