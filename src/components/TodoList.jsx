import React from 'react'
import Todo from './Todo'//TodoList now absorbed Todo entity, which App.js will get access to Todo by importing TodoList

function TodoList(props) {
  return (
    <div className = 'ledger'>
        {/* nested components Todo inside TodoList */}
        {props.allTodos.map((todo)=>{
            return(
                <Todo data = {todo}/>
            )
        })}
    </div>
  )
}

export default TodoList