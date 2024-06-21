import { useState, useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './todoform.scss'


export const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext)!;

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

