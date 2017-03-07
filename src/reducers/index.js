
import { combineReducers } from 'redux';
import TodosReducer from './reducer_todo';


const rootReducer = combineReducers({
    todos: TodosReducer,
});

console.log(' calling rootreduce ');

export default rootReducer;
