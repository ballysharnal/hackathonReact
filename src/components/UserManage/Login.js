import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        urlLogin: 'http://localhost:4242/users/login',
        pseudo:'',
        password:'',
        redirect: false
    };

    handleChange = e => {
        const type = e.target.name
        this.setState({[type]: e.target.value});
    }

    protectedRoute = () => {
        const token = localStorage.getItem("token");
        axios({
            method: 'POST',
            url: "http://localhost:4242/users/protected", 
            headers: {
               'Authorization': `Bearer ${token}`,
             },
            }).then( res => {
            // redirection
            this.setState({redirect: true})
        })
    }
    
    getForm = e => {
        e.preventDefault();
        axios.post(
            this.state.urlLogin, 
            {
                pseudo: this.state.pseudo,
                password: this.state.password
            }
            ).then( res => {
                localStorage.setItem("token", res.headers["x-access-token"]);
                this.protectedRoute();
            })
        }

    render() {
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to='/Game' />
        }

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
                        Mot de passe
                        <input 
                            onChange={this.handleChange}
                            name="password" 
                            type="text" 
                            placeholder="Enter your password"
                            value={this.state.password}
                        />
                    </label>
                    <button onClick={this.getForm}>VALIDER</button>
                </form>
            </div>
        )
    }
}

export default Login
