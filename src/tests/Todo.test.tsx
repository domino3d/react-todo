import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, AnyAction, ThunkMiddleware } from '@reduxjs/toolkit';
// import Todo from './Todo';
import TodoForm from '../components/Form/TodoForm';
import TodoList from '../components/List/TodoList';
import todoReducer, { addTodo, updateTodo, deleteTodo } from '../store/store';
import App from '../App';


// Define the state type for the Redux store
interface RootState {
    todos: any[]; // Update this to match the actual TodoItem type in your app
}

// const renderWithRedux = (
//     ui: React.ReactNode,
//     initialState = {},

//     store = configureStore({ reducer: { todos: todoReducer }, preloadedState: initialState })
// ) => {
//     return {
//         ...render(<Provider store={store}>{ui}</Provider>),
//         store
//     };
// };

const renderWithRedux = (
  ui: React.ReactNode,
  initialState = {},
  store = configureStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction>]>({
    reducer: rootReducer, // Use the combined rootReducer
    preloadedState: initialState
  })
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

describe('Todo App', () => {
    test('renders the Todo App component', () => {
        renderWithRedux(<App />);
        const headerElement = screen.getByText(/Todo List/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        const { getByText, getByRole } = renderWithRedux(<App />);
        const inputElement = getByRole('textbox');
        const addButtonElement = getByText(/Add Todo/i);

        fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButtonElement);

        const todoItemElement = getByText(/New Todo Item/i);
        expect(todoItemElement).toBeInTheDocument();
    });

    test('updates a todo item', () => {
        const { getByText, getByRole } = renderWithRedux(<App />, {
            todos: [{ id: 1, text: 'Initial Todo' }]
        });
        const inputElement = getByRole('textbox');

        fireEvent.change(inputElement, { target: { value: 'Updated Todo Item' } });

        const todoItemElement = getByText(/Updated Todo Item/i);
        expect(todoItemElement).toBeInTheDocument();
    });

    test('deletes a todo item', () => {
        const { getByText, queryByText } = renderWithRedux(<App />, {
            todos: [{ id: 1, text: 'Todo to be deleted' }]
        });
        const deleteButtonElement = getByText(/Delete/i);

        fireEvent.click(deleteButtonElement);

        const deletedTodoItemElement = queryByText(/Todo to be deleted/i);
        expect(deletedTodoItemElement).not.toBeInTheDocument();
    });
});
