import Immutable from 'immutable';
import {ADD_TODO_SUCCEED, SET_TODOS_SUCCEED} from '../actions/types';

let initialState = Immutable.List();

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_SUCCEED:
            console.log(' action todo ', action);
            return state.push(Immutable.fromJS(action.todo));
        case SET_TODOS_SUCCEED:
            return state = Immutable.fromJS(action.todos);
        default:
            return state;
    }
    return state;
}