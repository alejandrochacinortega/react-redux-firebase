import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends React.Component {
    
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            term: ""
        }
    }
    
    onSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.term);
        this.setState({ term: ""});
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit
            }>
                <input type="text"
                       placeholder="Add task"
                       value={this.state.term}
                       onChange={(event) => this.setState({ term: event.target.value })}
                />
                <button type="submit">Add</button>
            </form>
        )
    }

}

export default connect(null, { addTodo })(AddTodo);