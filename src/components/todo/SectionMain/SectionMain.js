import React from "react";
import { TodoList } from "../Todolist/TodoList";
import './styles.css';

export class SectionMain extends React.Component{
    createArrow = () => {
        if (this.props.todosCount > 0) {
            return (
                <label className='completed-all'>
                    <input onChange={this.props.completeAllTodos} className='completed-all__checkbox' type='checkbox'/>
                </label>
            )
        }
    }

    render() {
        return (
            <section className='section'>
                {this.createArrow()}
                <TodoList deleteTodo={this.props.deleteTodo}
                          completeTodo={this.props.completeTodo}
                          todos={this.props.todos}/>
            </section>
        )
    }
}
