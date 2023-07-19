import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../../store/store';
import { TodoItem } from '../../models/todoItem.interface';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  // only for clicks on marker
  const handleToggle = (id: number, e: any) => {
    if (e.target?.localName === "li") dispatch(toggleTodo(id));
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
          className={todo.completed ? 'done' : ''}
          onClick={(e) => handleToggle(todo.id, e)}
        >
          <div className='wrapper'>
            <input
              type="text"
              value={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onChange={e => handleUpdateTodo(todo.id, e.target.value, todo.completed)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
