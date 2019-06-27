import React, { Component } from 'react'
import  './Mapp.css'
import Navbar from '../Navbar';

class Mapp extends Component {

    state = {
        tab : [...Array(100).keys()],
        mapping : [],
        islamic: ""
    }   
    
    render() {
        return (
            <div>
                <Navbar />
                <ul className="row">
                    {
                        this.state.tab.map(el => <li className="column" value={el+1} key={el+1}> {el+1} </li>)
                        }
                </ul>
            </div>
        )
    }
}

export default Mapp
