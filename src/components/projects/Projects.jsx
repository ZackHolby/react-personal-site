import './Projects.css';
import React from "react";
import Card from "../card/Card"
import RecipeImg from "../../images/recipegenerator_min.jpg"
import BlackjackImg from "../../images/blackjack.png"
import PersonalSiteImg from "../../images/personalSite.png"
import InterpreterImg from "../../images/interpreterPic.png"
import DataImg from "../../images/shotdata_min.jpg"
import CryptoImg from "../../images/cryptoment.PNG"


class Projects extends React.Component {
    render() {
        return (
            <div className="Projects">
                <h2 className="headerTitle">Projects</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={RecipeImg} title="Recipe and Music Creator" text="Django Web App that allows users to input ingredients they have in their kitchen. This app then an IBM Discovery custom model to generate various recipes. Each recipe has an associated playlist created through Spotify API based on the cuisine of the meal selected."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://cryptoment.azurewebsites.net/" class="custom-card">
                                <Card pic={CryptoImg} title="Crypto Sentiment Webapp" text="Cryptocurrency web app to pull crypto data and analyze sentiment from Twitter. Tech Stack of Blazor server with C#/.NET 5.0 for development with use of Azure functions, cloud database, and app service for deployment with Docker. Created custom Flask API for twitter scraping."></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={BlackjackImg} title="Online Blackjack" text="Team of 4 developed head-to-head Blackjack application to duel friends in Blackjack online and keep statistics on play history. Implemented User Authentication for player profiles to maintain statistics over time. Developed using Ruby on Rails."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <a href="https://www.zholbrook.com/" class="custom-card">
                                <Card pic={PersonalSiteImg} title="Personal site" text="Created a personal webpage to showcase experiences and interests. Used React library to design using component ideology and Bootstrap4 for dynamic functionality. AWS to deploy and host webpage."></Card>
                            </a>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={InterpreterImg} title="Custom Interpreter" text="Built a custom interpreter for professor’s custom language, Quandary, with fully functional parsing, static and dynamic checking, mutability, threading, and pre-defined built-in functions through Java OO development practices."></Card>
                        </div>
                        <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1">
                            <Card pic={DataImg} title="Data Mining" text="2 Projects. Cleaned and analyzed datasets from Kobe Bryant shot data and bike rental in Seoul, Korea. Used Python and Scikit-learn to classify and model datapoints to yield insights for measures of performance."></Card>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
}

export default Projects;