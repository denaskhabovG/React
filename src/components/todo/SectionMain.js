import { TodoList } from "./TodoList";
import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

export class SectionMain extends React.Component{
    render() {
        return (
            <section className='section'>
                <TodoList deleteTodo={this.props.deleteTodo} completeTodo={this.props.completedTodo} obj={this.props.obj}/>
            </section>
        )
    }
}

TodoItem.propTypes = {
    obj: PropTypes.object,
}
