import './Experience.css';
import React from "react";
import { render } from '@testing-library/react';
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
                            <Card pic={CapitalOneImg} title="Software Engineering Intern" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={GeImg} title="Digital Technology Intern" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={Tenet3Img} title="Cyber Security Intern" text=""></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Experience;