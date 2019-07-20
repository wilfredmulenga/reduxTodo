import React from 'react'
import { connect } from 'react-redux'


const Todo = ({ index, todo, completed, toggleTodo, dispatch }) => {
	return(
    // TODO: replace this dispatch with `mapDispatchToProps`
    <li onClick={() => dispatch(toggleTodo(index))}
    style={{ textDecoration: completed ? 'line-through' : null }}
    key={index}>{ todo }</li>
	)
}

export default connect()(Todo)