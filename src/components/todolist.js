import react from 'react';
import {useSelector} from 'react-redux';
import { store } from '../store';


function Todolist(){

let todoList= useSelector(state=>state.todos)
    return(
    
        <div>
          
          <p className='display-5 text-primary'>lists of todo</p>
         <div className="text-center">
             {
                 todoList.map((todo,index)=><h1 key={index}>{todo}</h1>)
             }

         </div>
        </div>
    )
}
export default Todolist;