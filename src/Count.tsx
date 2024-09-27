import React, { Component } from 'react'

interface State {
    count: number ;
}

export default class Count extends Component {

    state:State = {count : 0} ; 

    increment = () => {this.setState({ count : this.state.count + 1 }); }; 

    render() { 
        return ( 
            <div> 
                <p>Count : {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div> 
        );
    }
}
