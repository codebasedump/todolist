import React from 'react'
import Todo from './Todo'

export default function Todolist({todolist, onchangecheckbox}) {
  return (
    <div>
        {todolist.map(todo => (
            <Todo key={todo.id} todo={todo} onchangecheckbox={onchangecheckbox}></Todo>
        ))}
    </div>
  )
}