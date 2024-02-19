import React from 'react'

const List = ({task,toggleTask,removeTask}) => {
    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <p className='todoText' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span className='timeDue'>{task.time}</span>{task.text}
            </p>
            <button onClick={() => removeTask(task.id)}>
                <span className="material-symbols-outlined">
                    favorite
                </span>
            </button>
            <button onClick={() => removeTask(task.id)}>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </li>
    )
}

export default List