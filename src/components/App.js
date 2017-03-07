import React from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <AddTodo/>
                <TodosList/>
            </div>
        )
    }

}

export default App;