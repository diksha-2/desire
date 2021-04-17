import React, { Component } from 'react';
import './header.css';
import { Menuitems } from './menuitems';
import logo from '../../assets/img/logo32.png';
import { Link } from 'react-router-dom';

class Header extends Component{
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render()
    {
        return(
               
           <nav className="NavbarItems">
               <div className="navbar-logo">
                   <img width="180px" src={logo} className="custom-logo" alt="Desire Home" />                       
               </div>                
               <div className="menu-icon" onClick={this.handleClick}>
                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-ellipsis-h'}></i>
               </div>
              
               <div>
                   <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {Menuitems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.path}>
                                    {item.title}
                                    </a>
                                </li>
                                
                            )
                        })}                        
                   </ul>
               </div>
           </nav>
        )
    }
}
export default Header;
