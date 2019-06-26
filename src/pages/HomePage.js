import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>HomePage</p>
                <Link to={"/Login"}>Login</Link>
                <Link to={"/CreateAccount"}>CreateAccount</Link>
            </div>
        )
    }
}

export default HomePage
