import React from "react";
import './styles.css';

export class TodoFooter extends React.Component {
    createFooter = () => {
        if (this.props.todosCount > 0) {
            return (
                <div>
                    <span className='footer__info'>{this.props.completedLength() + ' items left'}</span>
                    <button onClick={() => this.props.setFilter('all')} className='footer__btn'>All</button>
                    <button onClick={() => this.props.setFilter('active')} className='footer__btn'>Active</button>
                    <button onClick={() => this.props.setFilter('completed')} className='footer__btn'>Completed</button>
                    {!!this.props.notCompletedLength() && <button onClick={() => this.props.deleteCompleted()} className='footer__btn'>Clear completed</button>}
                </div>
            )
        }
    }
    render() {
        return (
            <footer className='footer'>
                {this.createFooter()}
            </footer>
        )
    }
}
