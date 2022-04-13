import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from '../app/store';
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
  
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[index] = todo;
    },
  },
});

const { addTodo, removeTodo, updateTodo } = todolistSlice.actions;

export const add = (todo: Partial<Todo>): AppThunk => async dispatch => {
  //Post Server
  const response = await axios.post(`http://localhost:3000/todos`, { 
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  });

  todo.id = response.data.id;

  dispatch((addTodo(todo as Todo)));
}; 

export const remove = (todo: Todo): AppThunk => dispatch => {
  // Delete Server
  axios.delete(`http://localhost:3000/todos/${todo.id}`, {
    data: {
      id: todo.id,
    },
  })
  dispatch((removeTodo(todo)));
}; 

export const update = (todo: Todo): AppThunk => async dispatch => {
  // Patch Server
  const response = await axios.patch(`http://localhost:3000/todos`, {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  });

  todo = response.data;
  dispatch((updateTodo(todo)));
};

export const get = (state: RootState) => state.todoList.todos;

export const fetchTodos = (): AppThunk => async dispatch => {
  const response = await axios.get('http://localhost:3000/todos')
  // Return from Server
  const todos = response.data;
  for (const t of todos) {
    dispatch((addTodo(t)));
  }
}

export default todolistSlice.reducer;
