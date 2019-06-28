import React, { Component } from 'react'
import BuySoldier from '../components/BuySoldier';
import Mapp from '../components/UserManage/Mapp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Intermediary.css';

class Intermediary extends Component {
    render() {
        return (
            <div className="intermediaryClass">
                <Route render={({location}) => {
                    if (location.pathname.indexOf('/Game/Mapp') !== -1) {
                        return <Mapp />
                    } else if (location.pathname.indexOf('/Game/BuySoldier') !== -1) {
                        return <BuySoldier />
                    }else{
                        return null
                    }
                }} />
            </div>
        )
    }
}

export default Intermediary
