//Advanced version (needs to be checked out)

import React, { useState } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';


var initState = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner at home',
      completed: false
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    }
  ]
}


function App() {

 //state is the variable name, setState is the method used to change the variable state. Both can be called however you want to.

 // useState is the method used to check the state of an object. The parametre is the initState object created above. It checks the state of te mentioned object.

 const [state, setState] = useState(initState)


/**
 *
 * @param {*} boom
 * completed method contains @param boom
 * Method returns an object that contains the todos.
 * Next from the @param boom the todos get selected and are maped
 * (a simplyfied version of the foreach loop. Normally you would do: foreach todos as todo, do this & that).
 * That map gets an parametre called task which is an arrow function that sets the value of completed to true for all of the tasks and returns it,
 * so that that value gets in todos and gets in the completed method.
 * You actually get this foreach(todos as task){ set value of completed to true and return it }
 *
 */

  /*function complete(a){
    return {
      todos: a.todos.map(task => {
        return task.completed = true
      })
    }
  }*/

  // Toggle complete
  function updateTodo(id, updatedTodo) {
    // loop through all the todos
    const todos = state.todos.map((task) => {
      // if todo id equals id parameter...
      if (task.id === id)
        // ...too is replaced with updatedTodo
        return updatedTodo
      else
        // do nothing return the same
        return task
    })
    // replace state with new todo
    setState({...state, todos})
  }

  // Delete Todo
  function deleteTodo(id) {
    //(spread or) copy todos & filter them. Return any todo that's id !== to the id passed in the function
    setState({ todos: [...state.todos.filter(todo => todo.id !== id)] })
    
  }

  return (
    <div className="App">
       {/*

       {
        //When clicked on button, call the setState funtion and give as parametre the completed funtion and give that as parametre the state of the object
      <button onClick={() => setState(complete(state))}>
        Click me
      </button>
      }

       */}

      <Todos todos={state.todos} updatedTodo={updateTodo} deletedTodo={deleteTodo} /> {/* pass updatedTodo*/}

    </div>
  );
}


export default App;


