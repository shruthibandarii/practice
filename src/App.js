import './App.css';

import Addtodo from './components/addtodo';
import Todolist from './components/todolist';
import Todocount from './components/todocount';
import {useState} from 'react';

function App() {
  let [todoList, setTodoList] =useState([])


  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-sm-4'>
          <Addtodo setTodoList={setTodoList} todoList={todoList}/>
          </div>
          <div className='col-sm-4'>
          <Todolist todoList={todoList} />
          </div>
          <div className='col-sm-4'>
          <Todocount todoList={todoList}/>
          </div>



      </div>
      
    </div>
  );
}

export default App;
