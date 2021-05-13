import './About.css';
import React from "react";
import { render } from '@testing-library/react';
import Card from "../card/Card"
import basketballPic from "../../images/wOSUbasketball.JPG"
import CSEpic from "../../images/50CSE.png"
import vballPic from "../../images/volleyballPic.JPG"
import "./About.css"


class About extends React.Component {
    render() {
        return (
            <div className="About">
                <h2 className="headerTitle">About Me</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={CSEpic} title="Computer Science" text="Body 1"></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={basketballPic} title="Activity" text="Body 1"></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={vballPic} title="Interests" text="Body 3"></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default About;