import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const Todos = ({ todos }) => (
	<ul>
		{todos.map((todo, i)=> <Todo key={ i } todo={ todo.text } />)}
	</ul>
)

function mapStateToProps(state) {
	return state
  }

export default connect(mapStateToProps)(Todos)