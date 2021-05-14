import React, {Component} from 'react';
import {Menu} from './Menu'
import logo from "../../images/logo.svg"
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'

class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    scrollTop = () =>{
        scroll.scrollToTop();
    }

    render() {
        return(
            <nav className="NavbarItems sticky-nav">
                <h1 className='navbar-logo'><img className="icon" src={logo} alt="Holby Crown"></img>Holby</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menu.map((item, index) => {
                        return(
                            <Link className={item.cName} to={item.loc} spy={true} smooth={true} duration={200} offset={-60}>{item.label}</Link>
                        )
                    })}
                    
                </ul>

            </nav>
        );
    }
}

export default Navbar;

/*
<li key={index} onClick={this.scrollTop} to="About" spy={true} smooth={true} duration={500}>
                                <a className={item.cName} href={item.url}>
                                    {item.label}
                                </a>
                            </li>*/