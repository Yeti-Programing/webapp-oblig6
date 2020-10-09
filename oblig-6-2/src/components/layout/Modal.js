import React, { Component } from 'react';
import TodoButton from './TodoButton';

export class Modal extends Component {
    // TODO: Max 50 letters on "Description" - (State)

    state = {
        display: "inline",
        title: '',
        description: '',
        author: ''
    }

    closeModal = () => {
        this.setState({display: "none"});
    }

    openModal = () => {
        this.setState({display: "inline"});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description, this.state.author);
        this.setState({title: '', description: '', author: ''});
    }

    render() {
        return (
            <div>
            <div style={{display: this.state.display}} className="Modal" id="Modal">
                <div className="Modal-Innhold">

                    <span className="lukk" onClick={this.closeModal}>&times;</span>

                    <form onSubmit={this.onSubmit}>
                        <label>Title</label><br/>
                        <input type="text" name="title" placeholder="Title" id="title" value={this.state.title} onChange={this.onChange}></input><br/><br/>

                        <label>Description</label><br/>
                        <input type="text" name="description" placeholder="Description (max 50 letters)" id="description" value={this.state.description} onChange={this.onChange} maxLength={this.props.maxLength}></input>
                        <div>
                            {this.state.description.length}/{this.props.maxLength}
                        </div>
                        <br/>
                        
                        <label>Author</label><br/>
                        <input type="text" name="author" placeholder="Author" id="author" value={this.state.author} onChange={this.onChange}></input><br/><br/>

                        <button type="submit" value="submit">Create</button><br/>
                    </form>

                </div>
            </div>
            <TodoButton openModal={this.openModal}/>
            </div>
        )
    }
}

export default Modal
