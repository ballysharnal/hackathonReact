import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="homePageClass">
                <p>HomePage</p>
                <Link to={"/Login"}>Login</Link>
                <Link to={"/CreateAccount"}>CreateAccount</Link>
            </div>
        )
    }
}

export default HomePage
