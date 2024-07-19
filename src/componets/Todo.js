import React from 'react'
import EditTodoForm from './EditTodoForm';

const Todo = ({task,deleteTodo,editeTodo}) => {
  return (
    <div>
        <div style={{margin:"20px"}}>
      <>{task.task}</>
      <button onClick={()=>editeTodo(task.id)}>edit</button>
      <button onClick={()=>deleteTodo(task.id)}>delete</button>
    </div></div>
  )
}

export default Todo;
