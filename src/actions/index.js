import {
    ADD_TODO,
    SET_TODOS,
    DELETE_TODO }
    from './types';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

export function setTodos(data) {
    return {
        type: SET_TODOS,
        data,
    }
}

export function deleteItem(key) {
    return {
        type: DELETE_TODO,
        key
    }
}