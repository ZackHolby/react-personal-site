import React from "react";
import "./Card.css"


class Card extends React.Component{

    render(){
        return(
            <div className="card text-center">
                <div className="overflow">
                    <img src={this.props.pic} alt="card" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text text-secondary">{this.props.text}</p>
                </div>
            </div>
        );

    }
}


export default Card;