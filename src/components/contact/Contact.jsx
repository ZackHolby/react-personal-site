import React from "react";
import "./Contact.css"


class Contact extends React.Component{

    render(){
        return(
            <div className="Contact">
                <div className="font-small unique-color-dark" id="contact">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold left">Reach Out!</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p>Feel free to reach out regarding any content you see on this webpage, or if you just want to connect! I am always looking to expand my network and learn about new opportunities.</p>
                            </div>

                            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                                <p><i className="fa fa-home"></i>Columbus, OH 43201</p>
                                <p><i className="fa fa-phone" aria-hidden="true"></i>937-344-8169</p>
                                <a className="link" href = "mailto: holbrook.224@osu.edu"><p className="link"><i class="fa fa-envelope" aria-hidden="true"></i>Holbrook.224@osu.edu</p></a>
                                <a className="link" href="./Zachary Holbrook CompSci Resume Website.pdf" download><p className="link"><i class="fa fa-arrow-down" aria-hidden="true"></i>Resume</p></a>
                                
                            </div>
                        </div>
                    </div>

                    {/*links and resources*/}
                    <div className="professional">
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-6 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0">Check out my other professional outlets!</h6>
                                </div>

                                <div className="col-md-6 col-lg-6 text-center text-md-right">
                                    <a className="gh-ic" href="https://github.com/ZackHolby">
                                    <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
                                    </a>
                                    <a className="li-ic" href="https://www.linkedin.com/in/zachary-holbrook-a9a344157/">
                                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default Contact;


