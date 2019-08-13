import React, {useState, useReducer } from 'react';
import './App.css';
//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

//Reducer
import { initialState, todoReducer } from './reducers/todoReducer';

// const todoData = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
//   // {
//   //   task: 'Mow Lawn',
//   //   id: 1528817086458,
//   //   completed: false
//   // },
//   // {
//   //   task: 'Clean Desk',
//   //   id: 1528817086439,
//   //   completed: false
//   // },
//   // {
//   //   task: 'Water Plants',
//   //   id: 1528817086440,
//   //   completed: false
//   // },
// ];

function App() {
  const [todo, setTodo] = useState();

  //reducer
  const [state, dispatch]= useReducer(todoReducer, initialState);

//  const addItem = taskName => {
//     setTodo([...todo, {...taskName, id:Date.now()}])
//   }//does not work

const addItem = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  setTodo([...todo, newTask]);
  console.log(newTask, "New Task has been added");
};

  const toggleTask = id => {
    console.log(id);
    setTodo(
      todo.map(task => {
        if (task.id === id) {
          return {...task, completed: !task.completed};
        } else {
          return task;
        }
      })
    );
  }

  const clearCompleted = () => {
    setTodo(todo.filter(task => !task.completed)
    )
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Jade's Todo App!</h2>
        <TodoForm 
                  todo={todo}
                  addItem={addItem}
        />
      </div>
      <TodoList
          todoItem={todo}
          toggleTask={toggleTask}
          clearCompleted={clearCompleted}
        />
        <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
