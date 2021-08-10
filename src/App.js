import './App.css';
import { Header } from "./components/todo/Header";
import { SectionMain } from "./components/todo/SectionMain";
import React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};

    }

    handleTodos = (text) => {
        const todo = {
            done: false,
            id: (Math.random() * 15.75).toFixed(2),
        }

        this.setState({
            todos: [{...todo, text}, ...this.state.todos]
        });

        console.log({...todo, text})
    }

    render() {
        return (
            <div className="App">
                <Header func={this.handleTodos}/>
                <SectionMain obj={this.state.todos}/>
            </div>
        );
    }
}
