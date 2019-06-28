import React, { Component } from 'react'
import  './Mapp.css'
import axios from 'axios'
import village from '../../assets/tilesetVillage.png'

class Mapp extends Component {

    state = {
        tab : [...Array(100).keys()],
        mapping : [],
        islamic: "",
        userBaseId: '',
        userUrlGet: 'http://localhost:4242/users/get-user-infos'
    }

    getUserBaseId() {
        axios({
            method: 'Get',
            url: this.state.userUrlGet,
        }).then (res =>{
            this.setState({
                userBaseId: res.data[0].id,
            })
        }).catch(error =>{
            console.log(error);
        })
    }

    renderImgVillage(ele) {
        if (ele === this.state.userBaseId) {
            return <img className="villageImg" src={village}/>
        }
    }

    componentDidMount() {
        this.getUserBaseId();
    }

    render() {
        return (
            <div className="MapClass">
                <ul className="row">
                    {
                        this.state.tab.map(el => <li className="column" value={el+1} key={el+1}>
                            {this.renderImgVillage(el + 1)}
                        </li>)
                        }
                </ul>
            </div>
        )
    }
}

export default Mapp
