import React from "react";
import './styles.css';

class TodoItem extends React.Component {
    render() {
        return (
            <li className='todo-list__item' id={this.props.item.id}>
                <input checked={this.props.item.done} onChange={() => {
                    this.props.completeTodo(this.props.item.id);
                }} type='checkbox'/>
                <span className={this.props.item.done ? 'done' : ''}>{this.props.item.text}</span>
                <button onClick={() => this.props.deleteTodo(this.props.item.id)}>&times;</button>
            </li>
        )
    }
}

export default TodoItem;
