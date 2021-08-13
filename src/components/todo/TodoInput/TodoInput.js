import React from "react";
import './styles.css';

export  class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (event.target.value === '') {
            return;
        }

        if (event.key === 'Enter') {
            this.props.func(this.state.value);
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
