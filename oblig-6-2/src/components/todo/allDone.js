import React, { Component } from 'react'

export class allDone extends Component {
    render() {
        var allDone = "";
        if(this.props.todos.length === 0){
            allDone = "Jippi! Ingen todos i dag"
        }
        return (
        <p>{allDone}</p>
        )
    }
}

export default allDone
