import './Experience.css';
import React from "react";
import Card from "../card/Card"
import CapitalOneImg from "../../images/capitalOne3.png"
import UpstartImg2 from "../../images/UpstartImg2.png"
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
                            <a href="https://www.upstart.com/" class="custom-card">
                                <Card pic={UpstartImg2} title="Software Engineer (Full Stack)" text="Software Engineering on Servicing and Collections."></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://www.capitalone.com/tech/software-engineering/inside-shop-with-rewards/" class="custom-card">
                                <Card pic={CapitalOneImg} title="Software Engineer (Backend / Infrastructure)" text="Software Engineering on Acquisitions and Partnership teams."></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://hpc.osu.edu/" class="custom-card">
                                <Card pic={HumanPerformanceCollaborative} title="Software Engineer (Backend / Infrastructure)" text="Software Engineer developing system and analysis for athletic performance and recovery at Ohio State."></Card>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Experience;