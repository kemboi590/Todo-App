import { useContext, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './todoitem.scss';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoItem = ({ id, text, completed }: TodoItemProps) => {

  const { dispatch } = useContext(TodoContext)!;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_TODO', id, text: newText });
    setIsEditing(false);
  };


  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (  // if the user is not editing the todo, display the todo	
        <div className='todo-item-todo'>
          <input type="checkbox" checked={completed} onChange={handleToggle} />
          <span style={{ textDecoration: completed ? 'line-through' : undefined }}>
            {text}
          </span>
          <div className="buttons">
          <button onClick={() => setIsEditing(true)} className='edit-btn'>Edit</button>
          <button onClick={handleDelete} className='delete-btn'>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
