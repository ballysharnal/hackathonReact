import React, { Component } from 'react';
import axios from 'axios';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';


class CreateAccount extends Component {
    
    state = {
        url: 'http://localhost:4242/users/create-profile',
        validatorConfirmPassword: true,
        pseudo: '',
        email: '',
        password: '',
        avatar: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if (e.target.password.value === e.target.confirmPassword.value){
            this.setState({validatorConfirmPassword: true});
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
        } else {
            this.setState({validatorConfirmPassword: false});
        }
    }

    handleChange = e => {
        const name = e.target.name
        this.setState({[name]: e.target.value});
    }

    render() {
        return (
            <div>
                <ValidatorForm 
                    onSubmit={this.onSubmit}
                    ref="form"
                >
                    <label>
                        Pseudo
                        <TextValidator
                            placeholder="Type your pseudo"
                            onChange={this.handleChange}
                            name="pseudo"
                            type="text"
                            value={this.state.pseudo}
                            validators={['required', 'minStringLength:3', 'maxStringLength:10', 'matchRegexp:^[a-zA-Z{1}]+[a-zA-Z0-9]*$']}
                            errorMessages={['Entrer un pseudo', 'Le pseudo doit contenir au minimum trois caractères', 'Le pseudo ne doit pas excéder les 10 caractères', 'Votre pseudo doit commencer par une lettre']}
                        />
                        Exemples: Tritonix, Atlantiqua88, D3P7H5
                    </label>
                    <label>
                        Email
                        <TextValidator
                            placeholder="Type your email"
                            onChange={this.handleChange}
                            name="email"
                            type="email"
                            value={this.state.email}
                            validators={['required', "matchRegexp:^[a-z]+[a-z0-9.&_-]+@[a-z0-9.-]+\.[a-z]{2,}$"]}
                            errorMessages={['Entrer un mail', "L'email est incorrect"]}
                        />
                    </label>
                    <label>
                        Password
                        <TextValidator
                            placeholder="Type your password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            value={this.state.password}
                            validators={['required', "minStringLength:7", "maxStringLength:16"]}
                            errorMessages={['Entrer un mot de passe', "Le mot de passe doit contenir au moins 7 caractères", "Le mot de passe ne doit pas excéder les 16 caractères"]}
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input type="text" name="confirmPassword" placeholder="Confirm password"/>
                        {
                            this.state.validatorConfirmPassword == false ? 
                            <p>
                                Le mot de passe de confirmation doit être le même que le mot de passe entré.
                            </p> 
                            : null 
                        }
                    </label>
                    <label>
                        Avatar
                        <input type="text" name="avatar" placeholder="Avatar Url"/>
                    </label>
                    <button type="submit">CREATE ACCOUNT</button>
                </ValidatorForm>
            </div>
        )
    }
}

export default CreateAccount
