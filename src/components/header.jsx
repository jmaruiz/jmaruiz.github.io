import React, { Component } from 'react';
import logo from '../logo-left.png';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <div className="bg"></div>
            <div className="hero">
                <div className="row">
                    <div className="col left">
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                    <div className="col right">
                        <div className="info">
                            <h1 className="display-3">Jose Ruiz</h1>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/jmaruiz/"><i class="fab fa-linkedin"></i></a>
                                <a href="https://www.github.com/jmaruiz"><i class="fab fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Header;