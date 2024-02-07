import './Experience.css';
import React from "react";
import Card from "../card/Card"
import CapitalOneImg from "../../images/capitalOne3.png"
import GeImg from "../../images/geDigital2.png"
import HumanPerformanceCollaborative from "../../images/hpcOSU.jpg"

import "./Experience.css"


class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <h2 className="headerTitle">Experience</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://www.capitalone.com/tech/software-engineering/inside-shop-with-rewards/" class="custom-card">
                                <Card pic={CapitalOneImg} title="Software Engineer (Backend / Infrastructure)" text="Software Engineer on the 3 different teams through TDP Rotational Program. Java based Application Orchestrator. Golang Lambda for Rewards servicing. Identity for Partner accoutn servicing. Tech Stack: AWS Suite, APIs, Golang, Java, Shell, Vue, Node, Docker."></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://hpc.osu.edu/" class="custom-card">
                                <Card pic={HumanPerformanceCollaborative} title="Software Engineer (Backend / Infrastructure)" text="Software Engineer developing system and analysis for athletic performance and recovery at Ohio State. API and system architecture design. Tech Stack: AWS Suite, Python, REST API"></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={GeImg} title="Digital Technology Intern (Full Stack)" text="Digital Technology intern apart of the Networking Authentication team. Tech Stack: Angular, Node.js, Express, Bootstrap, Karma, Docker, New Relic. "></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Experience;