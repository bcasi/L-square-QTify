import React, { useEffect, useState } from "react";
import { getNewAlbums, getTopAlbums } from "../api/albumsApi";
import HeroSection from "../components/Hero/HeroSection";
import Section from "../components/Section/Section";

const Homepage = () => {
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
  }, []);

  const { topAlbums, newAlbums } = data;
  return (
    <div>
      <HeroSection />
      <Section data={topAlbums} type="albums" title="Top Albums" />
      <Section data={newAlbums} type="albums" title="New Albums" />{" "}
    </div>
  );
};

export default Homepage;
