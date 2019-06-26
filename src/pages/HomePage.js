import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <p>HomePage</p>
                <Link to={"/Login"}>Login</Link>
            </div>
        )
    }
}

export default HomePage
