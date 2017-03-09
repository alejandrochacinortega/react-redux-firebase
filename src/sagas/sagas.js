import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {
    ADD_TODO,
    ADD_TODO_SUCCEED,
    SET_TODOS,
    SET_TODOS_SUCCEED,
    DELETE_TODO,
    DELETE_TODO_SUCCEED
} from '../actions/types';
import {todosRef} from '../firebase';
import axios from 'axios';


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
    yield put({
        type: SET_TODOS_SUCCEED,
        data: actions.data
    })
}

function* deleteTodo(action) {

    todosRef.child(action.key).remove();

    yield put({
        type: "DELETE_TODO_SUCCEED",
        data: "succeed"
    });


}

//Our watcher
export function* watchAddtodo() {
    yield takeEvery(ADD_TODO, addTodo)
}

export function* watchsetTodos() {
    yield takeEvery(SET_TODOS, setTodos)
}

export function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO, deleteTodo)
}

//Our sagaroots
export default function* rootSaga() {
    yield [
        watchAddtodo(),
        watchsetTodos(),
        watchDeleteTodo(),
    ]
}
