import { TodoTitle } from "./TodoTitle";
import { TodoInput } from "./TodoInput";
import React from "react";

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <TodoTitle />
                <TodoInput func={this.props.func}/>
            </header>
        )
    }
}
