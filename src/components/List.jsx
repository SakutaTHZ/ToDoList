import React from 'react'

const List = ({task,toggleTask,removeTask}) => {
    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </li>
    )
}

export default List