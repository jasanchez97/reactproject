import React from "react";
import videoSrc from "../videos/SSBBFinalDestination.mp4";
import "./BackgroundVideo.css"; // Asegúrate de importar correctamente el archivo CSS

function BackgroundVideo() {
  return (
    <div className="video-container">
      <img className="img-title" src="/images/SSBBGameLogo.png"/>
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;