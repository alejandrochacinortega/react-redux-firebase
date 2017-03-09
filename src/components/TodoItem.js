import React from 'react';

class TodoItem extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.todo}</td>
                <td>
                    <button onClick={this.props.deleteItem}>delete</button>
                </td>
            </tr>
        )
    }

}

export default TodoItem;