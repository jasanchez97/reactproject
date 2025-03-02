import React from "react";
import video2Src from "/videos/SmashUltimateLogo.gif";
import "./BackgroundVideo2.css";

function BackgroundVideo2() {
    return (
        <div className="video-container2">
            <video className="background-video2" autoPlay loop muted playsInline>
                <source src={video2Src} type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo2;  // Aquí debe estar la exportación por defecto
