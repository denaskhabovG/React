import React from "react";
import { Header } from "./components/todo/Header/Header";
import { SectionMain } from "./components/todo/SectionMain/SectionMain";
import { TodoFooter } from './components/todo/Footer/TodoFooter';
import './App.css';

// 1. Sequence of imports in all files
// 2. structure your project correctly - each component has a directory

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'all'
        };
    }

    // rename to a better name
    createTodoObj = text => {
        const todo = {
            done: false,
            id: (Math.random() * 15.75).toFixed(2),
        }

        this.setState({
            todos: [{...todo, text}, ...this.state.todos]
        });
    }

    // rename correctly
    completeTodo = id => {
        const todoIndex = this.state.todos.findIndex(item => item.id === id);
        const todos = this.state.todos;
        todos[todoIndex].done = !todos[todoIndex].done;

        this.setState({
            todos: [...this.state.todos]
        });
    }

    deleteTodo = id => {
        const newTodos = this.state.todos.filter(item => item.id !== id);

        this.setState({
            todos: newTodos
        });
    }

    // refactor this method to have less code
    completeAllTodos = () => {
        const allDone = this.state.todos.every(item => item.done);
        const allNotDone = this.state.todos.every(item => !item.done);
        let completeTodos;

        const mapAllTodos = bool => {
            completeTodos = this.state.todos.map(item => {
                bool ? item.done = bool : item.done = !item.done;
                return item;
            });
        }

        if (allDone || allNotDone) {
            mapAllTodos(false);

        } else  {
            mapAllTodos(true);
        }

        this.setState({
            todos: completeTodos
        });
    }

    // rename to have proper name
    completedTodosLength = () => {
        const completed = this.state.todos.filter(item => item.done === false);
        return completed.length;
    }

    // rename to have proper name
    notCompletedTodosLength = () => {
        const notCompleted = this.state.todos.filter(item => item.done);
        return notCompleted.length;
    }

    // rename to have proper name
    deleteCompletedTodos = () => {
        const notCompleted = this.state.todos.filter(item => !item.done);

        this.setState({
            todos: notCompleted
        });
    }

    setFilter = filter => {
        this.setState({filter});
    }

    getFilteringPredicate = (item) => {
        // rewrite this to switch case
        switch (this.state.filter) {
            case 'completed':
                return item.done;
            case 'all':
                return true;
            case 'active':
                return !item.done;
        }
    }

    render() {
        return (
            <div className="App">
                <Header func={this.createTodoObj}/>
                <SectionMain
                    deleteTodo={this.deleteTodo}
                    completeTodo={this.completeTodo}
                    todos={this.state.todos.filter(this.getFilteringPredicate)}
                    completeAllTodos={this.completeAllTodos}
                    todosCount={this.state.todos.length}
                    completedLength={this.completedTodosLength}/>
                <TodoFooter
                    completedLength={this.completedTodosLength}
                    todosCount={this.state.todos.length}
                    notCompletedLength={this.notCompletedTodosLength}
                    deleteCompleted={this.deleteCompletedTodos}
                    setFilter={this.setFilter}/>
            </div>
        );
    }
}
