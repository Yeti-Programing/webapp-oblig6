import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoCard extends Component {
    isCompleted = () => {
        return {
            display: this.props.todo.completed ? 'none' : 'inline'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.isCompleted()} className="TodoCard" id={this.props.todo.id}>
                <div>
                    <h5>{this.props.todo.title}</h5>
                    <p>{this.props.todo.description}</p>
                    <h6>{this.props.todo.author}</h6>
                    <button onClick={this.props.deleteCard.bind(this, id, title)}>Delete</button>
                    <button onClick={this.props.completeCard.bind(this, id, title)}>Complete</button>
                </div>
            </div>
        );
    }
}

//TodoCard PropTypes
TodoCard.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoCard