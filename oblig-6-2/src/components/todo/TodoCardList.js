import React, { Component } from 'react';
import TodoCard from './TodoCard.js';

export class TodoCardList extends Component {
    //TODO: skriv ut "Jippi! Ingen todos i dag" når tom

    render(){
        return this.props.todos.map((todo) => (
       
            <TodoCard key={todo.id} todo={todo} deleteCard={this.props.deleteCard} completeCard={this.props.completeCard}/>
        
        ))
    }
}

export default TodoCardList
