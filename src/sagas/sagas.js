import {takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_TODO, ADD_TODO_SUCCEED, SET_TODOS, SET_TODOS_SUCCEED } from '../actions/types';
import { todosRef } from '../firebase';


//Our worker
function* addTodo(action) {
    todosRef.push({
        todo: action.todo
    });
    
    try {
        yield put({
            type: ADD_TODO_SUCCEED,
            todo: action.todo
        })
    } catch (e) {
        console.log(' feilt error ', e);
    }
}

function* setTodos(actions) {
    console.log(' actions setting todos ', actions);
    yield put({
        type: SET_TODOS_SUCCEED,
        todos: actions.todos
    })
}

//Our watcher
export function* watchAddtodo() {
    console.log(' adding this ofgså ');
    yield takeEvery(ADD_TODO, addTodo)
}

export function* watchsetTodos() {
    yield takeEvery(SET_TODOS, setTodos)
}

//Our sagaroots
export default function* rootSaga() {
    yield [
        watchAddtodo(),
        watchsetTodos()
    ]
}