import React, { createContext, useReducer, useEffect, ReactNode } from 'react';

// define the type of the state and action
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
//define the type of the action that can be dispatched
export type ActionType =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'UPDATE_TODO'; id: number; text: string };

type StateType = Todo[];  // define the type of the state

interface TodoContextProps {  // define the type of the context
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);  // create the context within the app

const todoReducer = (state: StateType, action: ActionType): StateType => {  // define the reducer function
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      return state;
  }
};

type childrenProp = {  //children prop is used to pass the children to the component
  children: ReactNode;

}

const TodoProvider = ({ children }: childrenProp) => {  // define the provider component
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
