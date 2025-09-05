//This modal will acts like the parent that manages states (which video to play, play/pause/skip logic)
"use client";
// useRef is used for of  reference the video element
// useState use to store and update the selected video
import { useRef, useState } from "react";

import ContentScreen from "./ContentScreen";
import ControlBar from "./ControlBar";

export default function Home() {
 
    const videoElement = useRef(null);

  const [videoSrc, setVideoSrc] = useState("/video1.mp4");
  
  // handlers
const playVideo = () => videoElement.current?.play();
  const pauseVideo = () => videoElement.current?.pause();
  const resumeVideo = () => videoElement.current?.play();

  const skipAhead = () => {
    if (videoElement.current) videoElement.current.currentTime += 5;
  };
  const rewind = () => {
    if (videoElement.current) videoElement.current.currentTime -= 5;
  };

  //code for video selection
  const changeVideo = (e) => {
    setVideoSrc(e.target.value);
           if (videoElement.current) {
      videoElement.current.load(); 
    }
  };

  return (
    <main>

      <div className="player-container">
        <h1> Video Player App</h1>

  <div className="video-select-box">
          <h3>Choose Video </h3>
          <select
            id="video-select"
            className="video-select"
            value={videoSrc}
            onChange={changeVideo}>

        <option value="/video1.mp4">video 1</option>
      <option value="/video2.mp4">video 2</option>
         <option value="/video3.mp4">video 3</option>
          </select>
        </div>

        <ContentScreen videoElement={videoElement} videoSrc={videoSrc} />
        <ControlBar
       onPlay={playVideo}
          onPause={pauseVideo}
      onContinue={resumeVideo}
      onRewind={rewind}
 onSkip={skipAhead}
        />
      </div>
    </main>
  );
}
