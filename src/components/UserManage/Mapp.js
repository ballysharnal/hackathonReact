import React, { Component } from 'react'
import  './Mapp.css'

class Mapp extends Component {

    state = {
        tab : [...Array(100).keys()],
        mapping : [],
        islamic: ""
    }   
    
    render() {
        return (
            <div className="MapClass">
                <ul className="row">
                    {
                        this.state.tab.map(el => <li className="column" value={el+1} key={el+1}></li>)
                        }
                </ul>
            </div>
        )
    }
}

export default Mapp
