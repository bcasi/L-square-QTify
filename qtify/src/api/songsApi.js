import axios from "axios";

const baseUrl = "https://qtify-backend-labs.crio.do";

export async function getSongs() {
  try {
    const fetchSong = await axios.get(`${baseUrl}/songs`);
    const songsData = await fetchSong.data;
    return songsData;
  } catch (err) {
    console.error(err);
  }
}

export async function getGenreLabel() {
  try {
    const fetchGenre = await axios.get(`${baseUrl}/genres`);
    const genreData = await fetchGenre.data.data;
    return genreData;
  } catch (err) {
    console.error(err);
  }
}
