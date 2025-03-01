import React from "react";
import videoSrc from "/videos/SSBBFinalDestination.webm";
import "./BackgroundVideo.css";

function BackgroundVideo() {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;