import './Projects.css';
import React from "react";
import { render } from '@testing-library/react';
import Card from "../card/Card"
import RecipeImg from "../../images/recipegenerator_min.jpg"
import BlackjackImg from "../../images/blackjack.png"
import PersonalSiteImg from "../../images/personalSite.png"
import InterpreterImg from "../../images/interpreterPic.png"
import DataImg from "../../images/shotdata_min.jpg"
import OutlookImg from "../../images/outlook.png"


class Projects extends React.Component {
    render() {
        return (
            <div className="Projects">
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={RecipeImg} title="Recipe and Music Generator" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={InterpreterImg} title="Custom Interpreter" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={BlackjackImg} title="Online Blackjack" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={PersonalSiteImg} title="Personal site" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={DataImg} title="Data Mining" text=""></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={OutlookImg} title="Email Automation Script" text=""></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Projects;