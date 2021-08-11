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
        const todoItems = this.props.obj.map((item) => {
            return item;
        })

        return (
            <ul style={styles.ul} className='todo-list'>
                <TodoItem item={todoItems}/>
            </ul>
        )
    }
}
