import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import './styles.css';

export class TodoList extends React.Component {
    render() {
        // rename this variable
        const todoItems = this.props.todos.map(item => {
            return <TodoItem
                completeTodo={this.props.completeTodo}
                deleteTodo={this.props.deleteTodo}
                item={item}
                key={item.id}
                completed={this.props.completed}/>
        });

        return (
            <ul className='todo-list'>
                { todoItems }
            </ul>
        )
    }
}
