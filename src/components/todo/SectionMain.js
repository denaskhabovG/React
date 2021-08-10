import { TodoList } from "./TodoList";
import React from "react";

export class SectionMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todos: props}
        console.log(this.state);
    }

    render() {
        return (
            <section className='section'>
                <TodoList />
            </section>
        )
    }
}
