//handles showing the video & details
"use client";

export default function ContentScreen({ videoElement, videoSrc }) {
    return (
      <div className="video-box">

        <video ref={videoElement}  height="450" controls key={videoSrc}>

          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }
  