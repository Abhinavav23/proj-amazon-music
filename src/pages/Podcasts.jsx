import axios from "axios";
import React, { useEffect } from "react";
import { getHeaderWithProjectId } from "../utils/configs";

export const Podcasts = () => {
  const fetchAlbums = async () => {
    const config = getHeaderWithProjectId();
    const res = await axios.get(
      "https://academics.newtonschool.co/api/v1/music/album",
      config
    );
    console.log('res', res);

  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return <div>Podcasts</div>;
};
