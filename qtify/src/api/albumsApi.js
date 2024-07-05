import axios from "axios";

const baseUrl = "https://qtify-backend-labs.crio.do";

export async function getTopAlbums() {
  try {
    const getTopAlbum = await axios.get(`${baseUrl}/albums/top`);
    const topAlbumData = await getTopAlbum.data;
    return topAlbumData;
  } catch (err) {
    console.error(err);
  }
}

export async function getNewAlbums() {
  try {
    const getNewAlbum = await axios.get(`${baseUrl}/albums/new`);
    const newAlbumData = await getNewAlbum.data;
    return newAlbumData;
  } catch (err) {
    console.error(err);
  }
}
