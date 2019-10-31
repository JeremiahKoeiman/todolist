import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from "./components/pages/About";
import uuid from 'uuid';

import './App.css';


var initState = {
  todos: []
}


function App() {

 //state is the variable name, setState is the method used to change the variable state. Both can be called however you want to.

 // useState is the method used to check the state of an object. The parametre is the initState object created above. It checks the state of te mentioned object.

 const [state, setState] = useState(initState)

 window.onload = async function () {
    const link = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const result = await link.json();
    setState({ todos: result })
    /*result.map(item => {
      const json = console.log('id: '+item.id, 'title: '+item.title, 'completed: '+item.completed)
      return json
    })*/
    console.log(result)
  }



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

  //Add todo
  function addTodo(title) {
    //create new Todo & add it to the state
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    setState({ todos: [...state.todos, newTodo] })
  }

  return (
      <Router>
        <div className="App">
          {/*

       {
        //When clicked on button, call the setState funtion and give as parametre the completed funtion and give that as parametre the state of the object
      <button onClick={() => setState(complete(state))}>
        Click me
      </button>
      }

       */}
          <Header/>
          <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={state.todos} updatedTodo={updateTodo} deletedTodo={deleteTodo} /> {/* pass updatedTodo*/}
              </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
  );
}


export default App;


