import { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const { state } = useContext(TodoContext)!;
  return (
    <div className="todo-list"> {/* Add classname to the div */}
      {state.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
