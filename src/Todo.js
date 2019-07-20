import React from 'react'

const Todo = ({num, todo}) => {
	return(
    <li key={num}>{ todo }</li>
	)
}

export default Todo