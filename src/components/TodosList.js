import React from 'react';
import {connect} from 'react-redux';
import {todosRef} from '../firebase';
import {setTodos, deleteItem} from '../actions/index';
import TodoItem from './TodoItem';

class TodosList extends React.Component {

    componentDidMount() {
        todosRef.on('value', snap => {
            let todos = [];
            snap.forEach(todo => {
                const serverKey = todo.key;
                const data = {
                    todo: todo.val().todo,
                    serverKey: serverKey
                };
                todos.push(data)
            });

            this.props.setTodos(todos);
        })
    }

    deleteItem(index) {
        this.props.deleteItem(index)
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
                {this.props.todos.map((t, index) => {
                    const todo = t.get('todo');
                    const serverKey = t.get('serverKey');
                    return (
                        <TodoItem
                            key={index}
                            todo={todo}
                            deleteItem={() => this.deleteItem(serverKey)}
                        />
                    )
                })}

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

export default connect(mapStateToProps, {setTodos, deleteItem})(TodosList);