import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todos from './Todos'
import TodoVisibility from './TodoVisibility'
import './App.css';

function App() {
  return (
    <div >
      <AddTodo />
      <Todos />
      <TodoVisibility />
    </div>
  );
}

export default connect()(App);
