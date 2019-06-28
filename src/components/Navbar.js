import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="NavbarClass">
                <ul className="ulNavbar">
                    <li><Link className="link" to={"/Mapp"}>Wordl's Map</Link></li>
                    <li><Link className="link" to={"/Buildings"}>Your buildings</Link></li>
                    <li><Link className="link" to={"/Soldiers"}>Your soldiers</Link></li>
                    <li><Link className="link" to={"/Base"}>Your base</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
