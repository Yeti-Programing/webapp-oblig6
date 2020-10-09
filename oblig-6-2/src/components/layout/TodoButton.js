import React, { Component } from 'react'

export class TodoButton extends Component {
    render() {
        return (
            <button style={{display: "flex"}} className="TodoButton" onClick={this.props.openModal}>Todo +</button>
        )
    }
}

export default TodoButton