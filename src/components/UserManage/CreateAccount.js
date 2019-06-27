import React, { Component } from 'react'
import axios from 'axios'
import './CreateAccount.css'
import { ValidatorForm } from 'react-form-validator-core'
import TextValidator from './TextValidator'
import { Redirect } from 'react-router-dom';
import confirm from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class CreateAccount extends Component {
    
    state = {
        url: 'http://localhost:4242/users/create-profile',
        validatorConfirmPassword: true,
        typePassword: 'password',
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: '',
        regExAvatarUrl: "(http(s?):).+[\.](?:jpg|gif|png|jpeg)"
    }

    onSubmit = e => {
        e.preventDefault();
        if (e.target.password.value === e.target.confirmPassword.value){
            if (window.confirm(`Êtes-vous sûr de créer votre compte avec ces informations ?`)) {
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
                ).then( () => {
                        return <Redirect to='/Login' />
                    });
                    this.setState({
                        pseudo: '',
                        email:'',
                        password:'',
                        confirmPassword: '',
                        avatar:'',
                    }
                )
            }
        } else {
            this.setState({validatorConfirmPassword: false});
        }
    }

    handleChange = e => {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    showPassword = () => {
        if (this.state.typePassword === 'password') {
            return this.setState({typePassword: 'text'});
        }
        this.setState({typePassword: 'password'});
    }

    render() {
        return (
            <div className="createAccountClass">
                <h1>ATLANT'ATTACK</h1>
                <h2>CREATE YOUR ACCOUNT</h2>
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
                            type={this.state.typePassword}
                            value={this.state.password}
                            validators={['required', "minStringLength:7", "maxStringLength:16"]}
                            errorMessages={['Entrer un mot de passe', "Le mot de passe doit contenir au moins 7 caractères", "Le mot de passe ne doit pas excéder les 16 caractères"]}
                        />
                        {
                            this.state.typePassword === 'password' ?
                            <FontAwesomeIcon icon={faEyeSlash} onClick={this.showPassword}/>
                            :  <FontAwesomeIcon icon={faEye} onClick={this.showPassword}/>
                        }
                    </label>
                    <label>
                        Confirm Password
                        <input 
                            type="text" 
                            name="confirmPassword" 
                            placeholder="Confirm password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
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
                        <TextValidator
                            
                            onChange={this.handleChange}
                            name="avatar"
                            type="text"
                            value={this.state.avatar}
                            validators={["matchRegexp:" + this.state.regExAvatarUrl]}
                            errorMessages={['Only png, jpg, jpeg']}
                        />
                    </label>
                    <button type="submit">CREATE ACCOUNT</button>
                </ValidatorForm>
            </div>
        )
    }
}

export default CreateAccount
