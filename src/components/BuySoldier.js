import './BuySoldier.css'
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


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
        userId: 0,
        userMoney: 0,
        userUrl: 'http://localhost:4242/users/get-user',
        postMoneyUrl:'http://localhost:4242/users/update-user',
        soldierQuantity: 0,
        priceToPay: 0
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
        }).catch(error =>{
            console.log(error);
        })
    }

    userInfos(){
        axios({
            method: 'Get',
            url: this.state.userUrl,
        }).then (res => {
            this.setState({
                userId: res.data[0].id,
                userMoney: res.data[0].userMoney
            })
            console.log(this.state.userId)
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){
        this.soldatInfos();
        this.userInfos();
    }

    quantitySoldiers = e => {
        e.preventDefault()
        let quantity = document.getElementsByTagName('input')[0].value;
        let money = this.state.priceToPay;
        let price = this.state.soldatPrice;
        if (e.target.innerText === '+') {
            quantity++
            money += price
            this.setState({
                soldierQuantity: quantity,
                priceToPay: money
            })
        } else if (e.target.innerText === '-' && quantity != 0){
            quantity--
            money -= price
            this.setState({
                soldierQuantity: quantity,
                priceToPay: money
            })
        } else {
            quantity = quantity;
        }
    }

    confirmSoldierBuying = e => {
        e.preventDefault()
        if (confirm ('Êtes vous sûr de vouloir acheter des soldats ?')) {//eslint-disable-line
            let userMoney = this.state.userMoney - this.state.priceToPay
            axios.put(
                this.state.postMoneyUrl,
                {
                    id: this.state.userId,
                    userMoney: userMoney
                }
            ).then(() => {
                this.setState({ redirect: true });
            });
        } else {
            alert('Transaction annulée !')
        }
    }

    render() {

        const redirect = this.state.redirect;
            if (redirect) {
                return <Redirect to='/Game'/>;
            }

        return (
            <div className="main">
                <h3>{this.state.soldatName}</h3>
                <img src={this.state.soldatImage} alt='Ryan' />
                <p>{this.state.soldatDescription}</p>
                <p>{this.state.soldatPrice}</p>
                <p>{this.state.soldatAttackw}</p>
                <p>{this.state.soldatDefense}</p>
                <p>{'Initiative : ' + this.state.soldatInitiative}</p>
                <p>{'Your money : ' + this.state.userMoney}</p>
                <label>
                    Nombre de soldats souhaité :
                    <button onClick={this.quantitySoldiers} type='button'>-</button>
                    <input type='number' value={this.state.soldierQuantity}/>
                    <button type='button' onClick={this.quantitySoldiers}>+</button>
                </label>
                <p>{this.state.priceToPay}</p>
                <button type='button' onClick={this.confirmSoldierBuying}>ACHETER</button>
            </div>
        )
    }
}

export default BuySoldier
