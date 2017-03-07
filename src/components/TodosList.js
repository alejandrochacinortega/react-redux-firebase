import React from 'react';
import {connect} from 'react-redux';
import {todosRef} from '../firebase';
import { setTodos } from '../actions/index';

class TodosList extends React.Component {
    
    componentDidMount() {
        todosRef.on('value', snap => {
            let todos = [];
            snap.forEach(todo => {
                todos.push(todo.val())
            });

            this.props.setTodos(todos);
        })
    }
    
    renderTodo(todo, index) {
        return (
            <tr key={index}>
                <td>{todo}</td>
            </tr>
        )
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>List</th>
                </tr>
                </thead>
                <tbody>
                {this.props.todos.map(this.renderTodo)}
                </tbody>
            </table>
        )
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {setTodos})(TodosList);