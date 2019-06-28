import React, { Component } from 'react';
import logoPlaceholder from '../../assets/logoPlaceholder.jpg'
import './Topbar.css'
import axios from 'axios'

class Topbar extends Component {

    state = {
        userUrlGet: 'http://localhost:4242/users/get-user-infos',
        userBaseUrlGet: 'http://localhost:4242/users/get-user',
        userName: '',
        userCoins:'',
        userBaseId: ''
    }

    getUserInfo() {
        axios({
            method: 'Get',
            url: this.state.userUrlGet,
        }).then (res =>{
            this.setState({
                userName: res.data[0].pseudo,
                userBaseId: res.data[0].id,
            })
        }).catch(error =>{
            console.log(error);
        })
    }

    getUserBaseInfo() {
        axios({
            method: 'Get',
            url: this.state.userBaseUrlGet,
        }).then (res =>{
            this.setState({
                userCoins: res.data[0].userMoney,
            })
        }).catch(error =>{
            console.log(error);
        })
    }

    componentDidMount() {
        this.getUserInfo();
        this.getUserBaseInfo();
    }

    render() {
        return (
            <div className="TopbarClass">
                <img className="logo" src={logoPlaceholder} alt="avatar"/>
                <div className="div">
                    <ul className="ulTopbar">
                        <li>
                            <p>Username</p>{this.state.userName}
                        </li>
                        <li>
                            <p>Coins</p>{this.state.userCoins}
                        </li>
                        <li>{this.state.userBaseId}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Topbar
