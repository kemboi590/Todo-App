import { TodoProvider } from './Context/TodoContext';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';
import BgImage from "./assets/images/bg-desktop-light.jpg"

function App() {


  return (
    <TodoProvider>
      <div className="app">
        {/* <img src={BgImage} alt="Background" /> */}
        <div className="todo-container">
          <h1>TODO</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
//// TodoProvider