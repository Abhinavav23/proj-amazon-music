import React, { useRef } from "react";
import { useMusic } from "../../Provider/MusicProvider";

export const MusicPlayer = () => {
  const { selectedMusic } = useMusic();
  const { thumbnail, title, artistList, audio_url } = selectedMusic;
  console.log(selectedMusic);
  const audioRef = useRef();

  const playPauseAudio = (e) => {
    console.log("audioRef.current", audioRef.current);
    const {id} = e.target
    if(id === 'play'){
        audioRef.current.play()
    } else if(id === 'pause'){
        audioRef.current.pause()
    }
  };

  if (!title) {
    return <></>;
  }

  return (
    <section className="music-player">
      <img src={thumbnail} alt={title} height="50" width="50" />
      <div>{title}</div>
      <div title={artistList}>{artistList}</div>
      <button onClick={playPauseAudio} id="play">play</button>
      <button onClick={playPauseAudio} id="pause">pause</button>
      <audio src={audio_url} ref={audioRef} />
    </section>
  );
};
