import React from "react";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { TodoInput } from "../TodoInput/TodoInput";
import './styles.css';

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
