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
    constructor(props) {
        super(props);
        this.state = {doneClass: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(item) {
        item.done  = !item.done;

        if (item.done) {
            this.setState({doneClass: 'done'});
        } else {
            this.setState({doneClass: ''});
        }

        console.log(item.done)

        return item.done;
    }

    removeTodo(item) {
        const itemId = item.id;
        this.props.item.filter(item => item.id !== itemId);
    }

    render() {
        const todoItem = this.props.item.map((item, index) => {
            return (
                <li style={styles.li} id={item.id} key={index}>
                    <input onChange={() => this.handleChange(item)} type='checkbox'/>
                    <span className={this.state.doneClass}>{item.text}</span>
                    <button>&times;</button>
                </li>
            );
        });
        return (
            todoItem
        )
    }
}

TodoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    done: PropTypes.bool,
}

export default TodoItem;
