import React, { Component } from 'react'
import './Login.css';

class Login extends Component {

    state = {};

    getForm = () => {
        let formInfo = {
            pseudo: document.getElementById('pseudo').value,
            email: document.getElementById('email').value
        }
        console.log(formInfo)
    }

    render() {
        return (
            <div className="cont">
                <h2>LOGIN</h2>
                <div>
                    <label>
                        Pseudo
                        <input id="pseudo" type="text" placeholder="Enter your Pseudo"/>
                    </label>
                    <label>
                        Email
                        <input id="email" type="text" placeholder="Enter your email"/>
                    </label>
                <button onClick={this.getForm}>VALIDER</button>
                </div>
            </div>
        )
    }
}

export default Login
