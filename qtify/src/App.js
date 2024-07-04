import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const getTopAlbums = () => {
      axios.get(`https://qtify-backend-labs.crio.do/albums/top`).then((res) => {
        const albumsData = res.data;
        setTopAlbums(albumsData);
      });
    };

    const getNewAlbums = () => {
      axios.get(`https://qtify-backend-labs.crio.do/albums/new`).then((res) => {
        const albumsData = res.data;
        console.log(res.data);
        setNewAlbums(albumsData);
      });
    };
    getTopAlbums();
    getNewAlbums();
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
