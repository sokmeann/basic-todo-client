import React from 'react'

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul className="tasks flex row-cc">
      {tasks.map(task => (
        <li className="task flex row-sb" key={task.id}>
          {task.name}
          <div className="delete" onClick={() => deleteTask(task.id)}>
            x
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
