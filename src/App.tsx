import React from 'react';
import TodoForm from './components/Form/TodoForm';
import TodoList from './components/List/TodoList';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='todoApp'>
      <h1>Todo App <span className='blink'>_</span></h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
