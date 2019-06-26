import React, { Component } from 'react'
import axios from 'axios'
class CreateAccount extends Component {
    
    state = {
        url: 'http://localhost:4242/users/create-profile',
    }

    onSubmit = e => {
        e.preventDefault();
        axios.post(
            this.state.url, {
                pseudo: e.target.pseudo.value,
                email: e.target.email.value,
                password: e.target.password.value,
                forgetPassword: "null",
                avatar: e.target.avatar.value,
                UserBase_id: 1
            }
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Pseudo
                        <input type="text" name="pseudo" placeholder="Type your pseudo"/>
                    </label>
                    <label>
                        Email
                        <input type="text" name="email" placeholder="Type your email"/>
                    </label>
                    <label>
                        Password
                        <input type="text" name="password" placeholder="Type your password"/>
                    </label>
                    <label>
                        Confirm Password
                        <input type="text" placeholder="Confirm password"/>
                    </label>
                    <label>
                        Avatar
                        <input type="text" name="avatar" placeholder="Avatar Url"/>
                    </label>
                    <button type="submit">CREATE ACCOUNT</button>
                </form>
            </div>
        )
    }
}

export default CreateAccount
