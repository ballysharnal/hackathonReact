import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={"/Buildings"}>Your buildings</Link></li>
                    <li><Link to={"/Soldiers"}>Your soldiers</Link></li>
                    <li><Link to={"/Base"}>Your base</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
