import { TodoProvider } from '../../Context/TodoContext'; 
import { TodoForm } from '../TodoForm/TodoForm'; 
import { TodoList } from '../TodoList/TodoList'; 
import './todoapp.scss';

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <div className="todo-container">
          <h1>TODO</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default TodoApp