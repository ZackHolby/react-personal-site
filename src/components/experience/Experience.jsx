import './Experience.css';
import React from "react";
import Card from "../card/Card"
import CapitalOneImg from "../../images/capitalOne3.png"
import GeImg from "../../images/geDigital2.png"
import Tenet3Img from "../../images/tenet3.png"

import "./Experience.css"


class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <h2 className="headerTitle">Experience</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={CapitalOneImg} title="Software Engineering Intern" text="I was a Software Engineering intern on the Software Resiliency team. Tech Stack: Angular, Python, AWS, TerraForm, and Snowflake."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={GeImg} title="Digital Technology Intern" text="I was a Digital Technology intern apart of the MyApps team. Tech Stack: Angular, Node.js, Express, Bootstrap, Karma, Docker, New Relic. "></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={Tenet3Img} title="Cyber Security Intern" text="I was a Cyber Security intern on the MeTRA team. Technologies used: Python, Jupyter Notebook, REST API, Docker.  "></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Experience;