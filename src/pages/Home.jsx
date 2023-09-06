import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../utils/configs";
import { MusicCard } from "../components/music/MusicCard";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [musicsList, setMusicList] = useState([]);

  const fetchMusics = async () => {
    const config = getHeaderWithProjectId();
    try {
      setIsLoading(true);
      const musics = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        config
      );
      console.log("musics", musics);
      const musicListData = musics.data.data;
      setMusicList(musicListData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMusics();
  }, []);
  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    musicsList &&
      musicsList.map((music, i) => <MusicCard key={i} {...music} />)
  );
};
