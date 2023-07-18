import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
