import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BuySoldier from '../components/BuySoldier';

class Game extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BuySoldier />
            </div>
        )
    }
}

export default Game
