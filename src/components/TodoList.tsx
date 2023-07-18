import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../store/store';
import { TodoItem } from '../models/todoItem.interface';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateTodo = (id: number, newText: string, completed: boolean) => {
    dispatch(updateTodo({
      id,
      text: newText,
      completed
    }));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
      {todos.map((todo: TodoItem) => (
        <li
          key={todo.id}
          onClick={() => handleToggle(todo.id)}
          className={todo.completed ? 'done' : ''}
        >
          <input
            type="text"
            value={todo.text}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onChange={e => handleUpdateTodo(todo.id, e.target.value, todo.completed)}
          />
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
