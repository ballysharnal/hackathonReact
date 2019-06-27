import './BuySoldier.css'
import React, { Component } from 'react'
import axios from 'axios'

class BuySoldier extends Component {
    state = {
        soldatName: '',
        soldatPrice: 0,
        soldatDescription: '',
        soldatImage: '',
        soldatAttack: 0,
        soldatDefense: 0,
        soldatInitiative: 0,
        soldierUrl: 'http://localhost:4242/soldier/get-soldier',
        userMoney: 0,
        userUrl: 'http://localhost:4242/users/get-user',
        soldierQuantity: 0,
        operator: ''
    };

    soldatInfos(){
        axios({
            method: 'Get',
            url: this.state.soldierUrl,
        }).then (res =>{
            this.setState({
                soldatName: res.data[0].soldatName,
                soldatPrice: res.data[0].soldatPrice,
                soldatDescription: res.data[0].soldatDescription,
                soldatImage: res.data.soldatImage,
                soldatAttack: res.data[0].soldatAttack,
                soldatDefense: res.data[0].soldatDefense,
                soldatInitiative: res.data[0].soldatInitiative
            })
            console.log(this.state.soldatName)
        }).catch(error =>{
            console.log(error);
        })
    }

    componentDidMount(){
        this.soldatInfos();
    }

    quantitySoldiers = e => {
        e.preventDefault()
        let quantity = document.getElementsByTagName('input')[0].value;
        if (e.target.innerText === '+') {
            quantity++
            this.setState({soldierQuantity: quantity})
        } else {
            quantity--
            this.setState({soldierQuantity: quantity})
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.soldatName}</h3>
                <p>{this.state.soldatDescription}</p>
                <img src={this.state.soldatImage} alt='Ryan' />
                <label>
                    Nombre de soldats souhaité :
                    <button onClick={this.quantitySoldiers} type='button'>+</button>
                    <input type='number' value={this.state.soldierQuantity}/>
                    <button type='button' onClick={this.quantitySoldiers}>-</button>
                </label>
            </div>
        )
    }
}

export default BuySoldier
