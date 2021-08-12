import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
}

export class TodoList extends React.Component {
    render() {
        const todoItem = this.props.obj.map(item => {
            return <TodoItem
                completeTodo={this.props.completeTodo}
                deleteTodo={this.props.deleteTodo}
                item={item} key={item.id}/>
        });

        return (
            <ul style={styles.ul} className='todo-list'>
                {todoItem}
            </ul>
        )
    }
}
