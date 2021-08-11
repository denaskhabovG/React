import { TodoTitle } from "./TodoTitle";
import { TodoInput } from "./TodoInput";
import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <TodoTitle />
                <TodoInput func={this.props.func}/>
            </header>
        )
    }
}
