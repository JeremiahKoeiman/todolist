import React from 'react';
import TodoItem from "./TodoItem";
import Proptypes from 'prop-types'; // is used for validation for a prop that a component should have, can set type and if they are required

function Todos(props) { // props parameter for attributes

  return (
    props.todos.map((todo) => ( // go through each "todo" and give it the parameter called "todo"
        <TodoItem key={todo.id} todo={todo} boom={props.updatedTodo} delTodo={props.deletedTodo} /> // create TodoItem component, set it's key to the id of that todo and set the todo prop to that prop, pass updatedTodo to TodoItem
    ))
  );
}

// PropTypes
Todos.propTypes = { // object of props
  todos: Proptypes.array.isRequired, // todos is the prop, it's an array and it is set to be required
  markComplete: Proptypes.func.isRequired, // markComplete is the prop, it's an function and it is set to be required
  delTodo: Proptypes.func.isRequired, // delTodo is the prop, it's an function and it is set to be required
}

export default Todos;

