import React from "react";
import "../../App.css";
import "./Trailer.css";
import VideoPlayer from 'react-video-js-player';



const poster = '/images/img-9.jpg';



export default function Trailer() {
    return (
        <div className="video-js">
            <video__container>
        <h1>TRAILER</h1>
            <VideoPlayer
                src={'/videos/video-1.mp4'}
                poster={poster}
                width="720"
                height="480"
                playbackRates={[0.5, 1, 1.5, 2]}
            />
            </video__container>
        </div>
    );

}
