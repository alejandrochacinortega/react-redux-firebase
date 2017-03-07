import {ADD_TODO, SET_TODOS } from './types';

export function addTodo(todo) {
    console.log(' adding in the action ', todo);
    return {
        type: ADD_TODO,
        todo,
    }
}

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        todos,
    }
}