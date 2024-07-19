import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
 const [value,setValue]=useState("")
    
  const handleSubmit = (e) => {
    e.preventDefault();
       
   addTodo(value)
   setValue("")
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' 

        placeholder='what is the task today'
        value={value}
          onChange={(e)=>setValue(e.target.value)}
         />
         <button 
         type='submit'
         >Add Task</button>
         
      </form>
    </div>
  )
}


export default TodoForm
