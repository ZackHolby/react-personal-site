import SportsVideo from '../../images/SportsVideo-compressed.mp4';
import './Videoheader.css';
import React from "react";
import ReactPlayer from "react-player"

function Videoheader() {
  return (
    <div className="Video">

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={SportsVideo}
          width='100%'
          height='auto'
          loop='true'
          muted='true'
          playing
        />
      </div>

    </div>
  );
}

export default Videoheader;