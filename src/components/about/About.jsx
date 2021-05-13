import './About.css';
import React from "react";
import { render } from '@testing-library/react';
import Card from "../card/Card"
import img1 from "../../images/blackjack.png"
import "./About.css"


class About extends React.Component {
    render() {
        return (
            <div className="About">
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={img1} title="title 1" text="Body 1"></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={img1} title="title 1" text="Body 1"></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={img1} title="title 3" text="Body 3"></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default About;