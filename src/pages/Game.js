import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mapp from '../components/UserManage/Mapp';
import './Game.css';
import Topbar from '../components/UserManage/Topbar';
import BuySoldier from '../components/BuySoldier';

class Game extends Component {
    render() {
        return (
            <div>
                <Topbar/>
                <Navbar className="navbar"/>
                <Mapp />
                <Footer />
                <BuySoldier />
            </div>
        )
    }
}

export default Game