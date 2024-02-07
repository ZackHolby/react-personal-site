import SportsVideo from '../../images/SportsVideo-compressed.mp4';
import './Videoheader.css';
import React from "react";
import ReactPlayer from "react-player"
import { WindupChildren, Pace } from "windups";


class Videoheader extends React.Component {


  render(){
  
    return (
      <div className="Video">
  
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={SportsVideo}
            playIcon={<button>Play</button>}
            width='100%'
            height='100%'
            loop='true'
            muted='true'
            playing
          />
          <div className="overlay">
          <WindupChildren>
            <p className="headerName"><Pace ms={100}>{"Zachary Holbrook"}</Pace></p>
            <p className="headerInfo"><Pace ms={100}>{"Coding. Sports. Friends. Family."}</Pace></p>
          </WindupChildren>
          </div>
        </div>
      </div>
  
    );
  }

  
}

export default Videoheader;