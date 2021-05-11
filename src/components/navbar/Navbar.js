import React, {Component} from 'react';
import {Menu} from './Menu'
import logo from "../../images/logo.svg"
import './Navbar.css'

class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
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
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>

            </nav>
        );
    }
}

export default Navbar;