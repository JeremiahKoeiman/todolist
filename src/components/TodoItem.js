import React from 'react';
import Proptypes from 'prop-types'; // is used for validation for a prop that a component should have, can set type and if they are required

function TodoItem(props) {

    function getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none' // if props.todo.completed == true add line-through style else set textDecoration to none
        }
    }

    const { id, title, completed } = props.todo

    return (
        <div style={ getStyle() }>
            <p>
                {/* Pass id from Todo.js as first parameter, pass entire todo and change completed of todo, if completed is true change to false and if completed is false change to true*/}
                <input type="checkbox" checked={completed} onChange={ () => props.boom(id, {...props.todo, completed: !completed})  } /> {' '}
                {title} {/* Get the title of the TodoItem */}
                <button onClick={ () => props.delTodo(id) } style={ btnStyle }>X</button>
            </p>
        </div>
    )
}

// PropTypes
TodoItem.propTypes = { // object of props
    todo: Proptypes.object.isRequired, // todo is the prop and it an single object and is set to be required
    markComplete: Proptypes.func.isRequired, // markComplete is the prop, it's an function and it is set to be required
    delTodo: Proptypes.func.isRequired, // delTodo is the prop, it's an function and it is set to be required
}
const btnStyle = {
    background: '#FF0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
