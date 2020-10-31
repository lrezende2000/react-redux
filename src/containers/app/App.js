import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

import { addTodo } from '../../store/actions/todo';

const App = ({ addTodo, todoList }) => {
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    if (input !== '') {
      addTodo(input);
      setInput('');
    }
  }

  const handleOnChange = (event) => {
    const { value } = event.target;
    setInput(value);
  }

  return (
    <>
      <List todoList={ todoList } />
      <Input onChange={(event) => handleOnChange(event)} value={ input } />
      <Button onClick={handleOnClick}>
        Adicionar
      </Button>
    </>
  )
}

const mapStateToProps = (state) => ({
  todoList: state.todo.list
})

export default connect(
  mapStateToProps, 
  { addTodo }
)(App);
