import React from 'react'

export default function Todo({todo, onchangecheckbox}) {
  return (
    <div>
        <input type="checkbox" checked={todo.checked} onChange={() => onchangecheckbox(todo.id)}/>
        {todo.desc}
    </div>
  )
}
