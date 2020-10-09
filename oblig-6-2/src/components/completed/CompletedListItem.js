import React, { Component } from 'react'

export class CompletedListItem extends Component {
    isCompleted = () => {
        return {
            display: this.props.completedTodo.completed ? '' : 'none'
        }
    }

    render() {
        var dateObj = new Date();
        return (
            <tr style={this.isCompleted()}>
                <td>{this.props.completedTodo.title}</td>
                <td>{this.props.completedTodo.author}</td>
                <td>{this.props.completedTodo.description}</td>
                <td>{dateObj.getDate() + "." + dateObj.getMonth() + "." + dateObj.getFullYear()}</td>
            </tr>
        )
    }
}

export default CompletedListItem