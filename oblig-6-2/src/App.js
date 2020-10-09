import React from 'react';
import './main.css';
import TodoCardList from './components/todo/TodoCardList';
import Title from './components/layout/Title.js';
import Navbar from './components/layout/NavBar.js';
import CompletedList from './components/completed/CompletedList.js';
import Modal from './components/layout/Modal.js';
import Search from './components/completed/Search.js';
import AllDone from './components/todo/allDone.js';
import {v4 as uuid} from 'uuid';

export class App extends React.Component {

    state = {
        todos: [
        
        ],
        completedTodo: [
            
        ]
    }

    addTodo = (title, description, author) =>{
        const newTodo = {
            //uuid() generates a unique ID for each TodoCard, this is to prevent a bug i ran into earlier where the completed todos would be overwritten
            id: uuid(),
            title,
            description,
            author,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    
    deleteCard = (id, title) => {
        console.log("Deleted the card: " + title)
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
    
    completeCard = (id, title) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
                console.log(this.state.todos)
                console.log("Completed the card: " + title)
                this.setState({completedTodo: [...this.state.completedTodo, todo]});
            }
            return todo;
        })});
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

render(){
  return (
    <div className="App">
        <Title/>
        <Navbar/>
        <main>
            <Modal addTodo={this.addTodo} maxLength="50"/>
            
            <div id="todoList" className="todoList">
            <AllDone todos={this.state.todos}/>
            <TodoCardList todos={this.state.todos} deleteCard={this.deleteCard} completeCard={this.completeCard}/>
            </div>

            <div>
                <h4>Completed Todos</h4>
                <Search todos={this.state.todos}/>
                <table id="fullfoertTodo">
                    <thead>
                        <tr>
                            <th id="completedTitle">Title</th>
                            <th id="completedAuthor">Author</th>
                            <th>Description</th>
                            <th>Completed Date</th>
                        </tr>
            <CompletedList completedTodos={this.state.completedTodo} />
            </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>

        </main>
    </div>
  );
}
}

export default App;
