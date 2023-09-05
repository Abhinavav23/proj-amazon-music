import axios from "axios";
import React, { useEffect, useState } from "react";

const PROJECT_ID = "f104bi07c490";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
  const fetchMusics = async () => {
    const config = {
      headers: {
        projectId: PROJECT_ID,
      },
    };
    try {
    setIsLoading(true)
      const musics = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        config
      );
      console.log('musics', musics);
    } catch (err) {
      console.log(err);
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchMusics();
  }, []);
  return (
    isLoading ? <div>Loading ...</div> : <div>Home</div>
  );
};
