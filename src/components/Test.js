import React from 'react';
import { thisExpression } from '@babel/types';

class Test extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nameGOT: 'John Snowy'
        }
        this.changeName=this.changeName.bind(this);
    }

    changeName() {
        console.log(this.props)
        if (this.state.nameGOT === "John Snowy") {
            this.setState({nameGOT: 'Tony Stark'})
        } else {
            this.setState({nameGOT: 'John Snowy'})
        }
    }
    render() {
        return (
            <div>
                <p>You know nothing {this.state.nameGOT}</p>
                <button onClick={this.changeName}>SWITCH HERO</button>
            </div>
        );
    }
}

export default Test;