import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addToddo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/cchangeFilter');

const toggleCompleted = createAction('todos/toggleCompleted');

export default { addToddo, deleteTodo, changeFilter, toggleCompleted };
