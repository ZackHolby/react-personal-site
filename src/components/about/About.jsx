import './About.css';
import React from "react";
import Card from "../card/Card"
import basketballPic from "../../images/wOSUbasketball.JPG"
import CSEpic from "../../images/50CSE.png"
import vballPic from "../../images/volleyballPic.JPG"


class About extends React.Component {


    
    render() {

        return (
            <div className="About">
                <h2 className="headerTitle">About Me</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={CSEpic} title="Computer Science" text="Graduated Cum Laude in May 2021 with B.S. Computer Science and Engineering from The Ohio State University. I grew particularly interested in Web Dev and Data/AI."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={basketballPic} title="Activity" text="I practiced with the Ohio State Women's Basketball team where I was part of the Scout team. Outside of that, I continued to play tennis and spikeball all around campus."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={vballPic} title="Interests" text="I have strong interests in Cryptocurrency and the stock market analysis. I research Philosophy and its governence within society and technology - specifically morality and ethics."></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default About;