import React from "react";

const  styles = {
    input: {
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%)'
    }
}
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
            <input style={styles.input} onKeyPress={this.handleSubmit} defaultValue={this.state.value} onChange={this.handleChange} className='header__input' type="text" />
        )
    }
}
