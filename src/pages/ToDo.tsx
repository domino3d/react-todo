// import React, { useState } from 'react'; import { useDispatch, useSelector } from 'react-redux'; 
// import { RootState, Todo, addTodo, toggleTodo, deleteTodo } from '../store/reducers/store';

// const ToDoPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const todos: Todo[] = useSelector((state: RootState) => state);
// //   const todos: Todo[] = useSelector((state: RootState) => state.todos);
//   const [newTodoText, setNewTodoText] = useState('');

//   const addNewTodo = () => {
//     if (newTodoText.trim() !== '') {
//       const newTodo: Todo = {
//         id: Date.now(),
//         text: newTodoText,
//         completed: false,
//       };
//       dispatch(addTodo(newTodo));
//       setNewTodoText('');
//     }
//   };

//   const handleToggle = (id: number) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleDelete = (id: number) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={newTodoText}
//         onChange={(e) => setNewTodoText(e.target.value)}
//       />
//       <button onClick={addNewTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//               onClick={() => handleToggle(todo.id)}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoPage;

export default {};
