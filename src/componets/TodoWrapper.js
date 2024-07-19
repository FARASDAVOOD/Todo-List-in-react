import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditeTodoForm from './EditTodoForm'


const TodoWrapper = () => {
    const [todos,setTodos] = useState([])
    const [id,setId]=useState(0)

    const addTodo = (todo) => {
        setTodos([...todos,{id:id,
            task:todo,completed:false,isEditing:false
        }])
        setId(id+1)
       
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>todo.id != id))
    }
    
    const editeTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? 
        { ...todo , isEditing:!todo.isEditing
    }:todo))
    }

    const editeTask = (todo,id) => {
        setTodos(todos.map((value)=>value.id===id ? (
        {...value,task:todo,isEditing:!value.isEditing}
        ):value))}
    
     console.log(todos)
  return (
    <div>
        <h1>Get things Done!</h1>

      <TodoForm addTodo={addTodo}/>

        {todos.map((value,index)=>(
        value.isEditing ? <EditeTodoForm 
        editeTask={editeTask} task={value}/> : 

         <Todo task={value}
          key={index}
          deleteTodo={deleteTodo}
          editeTodo={editeTodo}
          />
            
        )
        
        )}
     
    </div>
  )
}

export default TodoWrapper
