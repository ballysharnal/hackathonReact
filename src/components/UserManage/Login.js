import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        urlLogin: 'http://localhost:4242/users/login',
        urlProtected: 'http://localhost:4242/users/protected',
        pseudo:'',
        email:''
    };

    handleChange = e => {
        const type = e.target.name
        this.setState({[type]: e.target.value});
    }

    protectedRoute = () => {
        const token = localStorage.getItem("token");
        axios.post(
            this.state.urlProtected,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        ).then( res => {
            // redirection
            console.log('Julia')
            return <Redirect to='/Game' />
        })
    }

    getForm = e => {
        e.preventDefault();
        axios.post(
            this.state.urlLogin, 
            {
                pseudo: this.state.pseudo,
                email: this.state.email
            }
        ).then( res => {
                localStorage.setItem("token", res.headers["x-access-token"]);
            }
        )
        this.protectedRoute();

    }

    render() {
        return (
            <div className="cont">
                <h2>LOGIN</h2>
                <form>
                    <label>
                        Pseudo
                        <input 
                            onChange={this.handleChange}
                            name="pseudo" 
                            type="text" 
                            placeholder="Enter your Pseudo"
                            value={this.state.pseudo}
                        />
                    </label>
                    <label>
                        Email
                        <input 
                            onChange={this.handleChange}
                            name="email" 
                            type="text" 
                            placeholder="Enter your email"
                            value={this.state.email}
                        />
                    </label>
                    <button onClick={this.getForm}>VALIDER</button>
                </form>
            </div>
        )
    }
}

export default Login
