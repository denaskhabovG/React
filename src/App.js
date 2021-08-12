import './App.css';
import { Header } from "./components/todo/Header";
import { SectionMain } from "./components/todo/SectionMain";
import React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    handleTodos = text => {
        const todo = {
            done: false,
            id: (Math.random() * 15.75).toFixed(2),
        }

        this.setState({
            todos: [{...todo, text}, ...this.state.todos]
        });
    }

    handleCompletedTodo = id => {
        const todoIndex = this.state.todos.findIndex(item => item.id === id);
        this.state.todos[todoIndex].done = !this.state.todos[todoIndex].done;

        this.setState({
            todos: [...this.state.todos]
        });
    }

    handleDeleteTodo = id => {
        const itemId = id;
        const newTodos = this.state.todos.filter(item => item.id !== itemId);

        this.setState({
            todos: newTodos
        });
    }

    render() {
        return (
            <div className="App">
                <Header func={this.handleTodos}/>
                <SectionMain deleteTodo={this.handleDeleteTodo} completedTodo={this.handleCompletedTodo} obj={this.state.todos}/>
            </div>
        );
    }
}
