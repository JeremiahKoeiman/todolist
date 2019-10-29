import React, { useState } from 'react'

var addState = {
    title: ''
}

function AddTodo(props) {
    const [state, setState] = useState(addState)

    function submitForm(e) {
        // preven standard submit
        e.preventDefault();
        // give addTodo function to App.js in a prop & pass title as parameter
        props.addTodo(state.title)
        // clear the field
        setState({ title: '' })
    }

    return (
        <form onSubmit={ submitForm } style={{ display: 'flex'}}>
            <input
                style={{ flex: '10', padding: '5px', fontSize: '15px' }}
                type="text" name="title"
                placeholder="Add Todo ..."
                value={state.title}
                onChange={ e => {setState({ [e.target.name]: e.target.value });}}
            />
            <input
                className="btn"
                style={{ flex: '1', fontSize: '15px' }}
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default AddTodo;
