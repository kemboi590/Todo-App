import  { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => { //  display the list of todos
    const { state } = useContext(TodoContext)!;
    return (
        <div>
          {state.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      );
    };
