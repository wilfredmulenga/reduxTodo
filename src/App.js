import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todos from './Todos'
import './App.css';

function App() {
  return (
    <div >
      <AddTodo />
      <Todos />
    </div>
  );
}

export default connect()(App);
