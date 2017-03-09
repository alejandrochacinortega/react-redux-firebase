import Immutable from 'immutable';
import {
    ADD_TODO_SUCCEED,
    SET_TODOS_SUCCEED,
    DELETE_TODO_SUCCEED
} from '../actions/types';

let initialState = Immutable.List();

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_SUCCEED:
            return state.push(Immutable.fromJS(action.todo));
        case SET_TODOS_SUCCEED:
            return state = Immutable.fromJS(action.data);
        case DELETE_TODO_SUCCEED:
            return state;
        default:
            return state;
    }
    return state;
}