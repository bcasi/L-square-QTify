import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Section from "./components/Section/Section";
import { getNewAlbums, getTopAlbums } from "./api/albumsApi";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    getTopAlbums().then((res) => {
      setTopAlbums(res);
    });

    getNewAlbums().then((res) => {
      setNewAlbums(res);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section data={topAlbums} type="albums" title="Top Albums" />
      <Section data={newAlbums} type="albums" title="New Albums" />
    </div>
  );
}

export default App;
