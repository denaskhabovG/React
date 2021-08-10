import React from "react";
// import { Item } from "./TodoItem";

export  class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.todos = this.props;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (event.key === 'Enter') {
            this.todos.func(event.target.value);
            console.log('Отправленное имя: ' + this.state.value);
            event.preventDefault();
            event.target.value = '';
        }
    }

    render() {
        return (
            <input onKeyPress={this.handleSubmit} defaultValue={this.state.value} onChange={this.handleChange} className='header__input' type="text" />
        )
    }
}
