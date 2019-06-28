import React, { Component } from 'react';
import logoPlaceholder from '../../assets/logoPlaceholder.jpg'
import './Topbar.css'

class Topbar extends Component {
    render() {
        return (
            <div className="TopbarClass">
                <img className="logo" src={logoPlaceholder} alt="avatar"/>
                <div className="div">
                    <ul className="ulTopbar">
                        <li>Username</li>
                        <li>Coins</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Topbar
