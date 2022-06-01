import react from 'react';
import {useSelector} from 'react-redux';

function Todocount(){


    let todoList= useSelector(state=>state.todos)
      
    return(
        
         <div>
          
          <p className='display-5 text-danger'>Todo Count</p>
          
          <h1 className="text-dark "> {todoList.length}</h1>
        </div>
    )
}
export default Todocount;