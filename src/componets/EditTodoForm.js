import React, { useState } from 'react'

const EditeTodoForm = ({editeTask,task}) => {
 const [value,setValue]=useState(task.task)
    
  const handleSubmit = (e) => {
    e.preventDefault();
       
   editeTask(value,task.id)
   setValue("")
  
  }

  return (
    <div  style={{margin:"20px"}}>
      <form onSubmit={handleSubmit}>
        <input type='text' 

        placeholder='Update task'
        value={value}
          onChange={(e)=>setValue(e.target.value)}
         />
         <button 
         type='submit'
         >Update</button>
         
      </form>
    </div>
  )
}


export default EditeTodoForm