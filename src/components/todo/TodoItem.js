import React from "react";

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <li></li>
        )
    }
}
