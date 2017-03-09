
import { combineReducers } from 'redux';
import TodosReducer from './reducer_todo';


const rootReducer = combineReducers({
    todos: TodosReducer,
});

export default rootReducer;
