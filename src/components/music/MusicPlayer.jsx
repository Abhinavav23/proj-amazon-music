import React, { useEffect, useRef, useState } from "react";
import { useMusic } from "../../Provider/MusicProvider";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";

export const MusicPlayer = () => {
  const { selectedMusic } = useMusic();
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [start, setStart] = useState("0");
  const [end, setEnd] = useState("0");

  const { thumbnail, title, artist, audio_url } = selectedMusic;
  const artistList = artist && artist.map((item) => item.name).join(" & ");

  const playPauseAudio = (e) => {
    // console.log("audioRef.current", audioRef.current);
    // const {id} = e.target
    // if(id === 'play'){
    //     audioRef.current.play()
    // } else if(id === 'pause'){
    //     audioRef.current.pause()
    // }
    setIsPlaying(!isPlaying);
  };

  const getTime = (duration) => {
    console.log('duration', duration);
    const endTime = Math.ceil(duration);
    let min = Math.floor(endTime / 60);
    let sec = endTime % 60;
    return `${min}:${sec}`
  };

  useEffect(() => {
    if (audioRef.current) {
      const endTime = getTime(audioRef.current.duration);
      console.log('endTime', endTime);
      setEnd(endTime);
      if (!isPlaying) {
        audioRef.current.play();
        console.log("duration", audioRef.current.duration);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  if (!title) {
    return <></>;
  }

  return (
    <section className="music-player">
      <img src={thumbnail} alt={title} height="50" width="50" />
      <div className="song-info">
        <div>{title}</div>
        <div title={artistList} className="artist-list">
          {artistList}
        </div>
      </div>
      <button onClick={playPauseAudio} id="play" className="play-pause">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div>{start}</div>
      <div>{end}</div>
      <input type="range" name="" id="" max={50} value={5}/>
      <audio src={audio_url} ref={audioRef} />
    </section>
  );
};

// 225 sec
// 225/60 --> 3:45sec
