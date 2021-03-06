import { format } from 'prettier'
import React,{usestate} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')

  return (
   <form className='todo-form'>
       <input 
       type='text'
       placeholder='add a todo'
       value={input}
       name='text'
       className='todo-input'
       />
       <button className='todo-button'>Add 
       todo</button>
   </form>
  );
}

export default TodoForm