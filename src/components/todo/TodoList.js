import React from "react";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className='todo-list'></ul>
        )
    }
}
