import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Game.css';
import Topbar from '../components/UserManage/Topbar';
import Intermediary from './Intermediary';

class Game extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <Navbar className="navbar"/>
                <Intermediary />
                <Footer />
            </div>
        )
    }
}

export default Game