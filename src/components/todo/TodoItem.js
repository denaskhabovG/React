import React from "react";
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '-1px',
        fontSize: '2rem',
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            <li style={styles.li} id={this.props.item.id}>
                <input onChange={() => this.props.completeTodo(this.props.item.id)} type='checkbox'/>
                <span className={this.props.item.done ? 'done' : ''}>{this.props.item.text}</span>
                <button onClick={() => this.props.deleteTodo(this.props.item.id)}>&times;</button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    done: PropTypes.bool,
}

export default TodoItem;
