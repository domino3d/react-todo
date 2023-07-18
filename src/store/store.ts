import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { log } from 'console';
import { TodoItem } from '../models/todoItem.interface';

// interface TodoItem {
//     id: number;
//     text: string;
//     completed: boolean;
// }

interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      // const newTodo: TodoItem = {
      //     id: Date.now(),
      //     text: action.payload,
      //     completed: false,
      // };
      // state.todos.push(newTodo);
      console.log(">>>", action.payload)
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action: PayloadAction<TodoItem>) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todoSlice.actions;

const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;
