import React, { Component } from 'react'
import CompletedListItem from './CompletedListItem.js';

export class CompletedList extends Component {
    render() {
        return this.props.completedTodos.map((completedTodo) => (
                        <CompletedListItem completedTodo={completedTodo} />  
        ))
    }
}

export default CompletedList
