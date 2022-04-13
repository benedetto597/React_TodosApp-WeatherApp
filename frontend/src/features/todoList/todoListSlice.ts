import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from '../../app/store';
import { Todo } from '../types/todo';

export interface TodoListState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TodoListState = {
  todos: [],
  status: 'idle',
};

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[index] = todo;
    },
  },
});

const { addTodo, removeTodo, updateTodo } = todolistSlice.actions;

export const add = (todo: Partial<Todo>): AppThunk => dispatch => {
  //Post Server
  // axios.post(`/todos`, { 
  //   title: todo.title,
  //   description: todo.description,
  //   completed: todo.completed,
  // });
  axios({
    method: 'post',
    proxy:{
      protocol: 'http',
      host: 'localhost',
      port: 3000,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    url: 'http://localhost:3000/todos',
    data: {
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    },
    
  });

  dispatch((addTodo(todo as Todo)));
}; 

export const remove = (todo: Todo): AppThunk => dispatch => {
  // Delete Server
  console.log(todo);
  dispatch((removeTodo("dasassfasfas")));
}; 

export const update = (todo: Todo): AppThunk => dispatch => {
  // Patch Server
  dispatch((updateTodo(todo)));
};

export const get = (state: RootState) => state.todoList.todos;

export const fetchTodos = (): AppThunk => dispatch => {
  // Return from Server
  return [];
}

export default todolistSlice.reducer;
