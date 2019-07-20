import React from 'react'
import Todo from './Todo'
import { toggleTodo } from './actions'
import { connect } from 'react-redux'

const Todos = ({ todos }) => (
	<ul>
		{
			todos.map((todo, i) =>
			<Todo
			key={ i }
			index= { i }
			todo={ todo.text }
			completed= { todo.completed }
			toggleTodo = { toggleTodo }
			/>)
		}
	</ul>
)

function mapStateToProps(state) {
	return state
	}

	function mapDispatchToProps (dispatch) {
		return {
			dispatch,
			toggleTodo
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)