import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {addTodo} from '../slices/todoslice';

function Addtodo(props){

    let {register,handleSubmit,formState:{errors}}= useForm()
    let dispatch = useDispatch()
    
   
    const onFormSubmit =(todoObj) => {

         let actionOnj = addTodo(todoObj.newtodo)
         dispatch(actionOnj)
         
         
    }


return(

   <div>
   <p className='display-5 text-success'>Add new list</p>
   <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
       <div className='mb-3'>
           <lable htmlFor="todo"> New todo</lable>
           <input type="text" id="name" className="form-control" {...register("newtodo")}></input>
       </div>
       <button type="submit" className='btn btn-warning'>Add new todo</button>
   </form>

  
   </div>
)
}
export default Addtodo;