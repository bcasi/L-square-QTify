import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import axios from "axios";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = () => {
      axios.get(`https://qtify-backend-labs.crio.do/albums/top`).then((res) => {
        const albumsData = res.data;
        console.log(res.data);
        setAlbums(albumsData);
      });
    };
    getAlbums();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section data={albums} type="albums" title="Top Albums" />
    </div>
  );
}

export default App;
