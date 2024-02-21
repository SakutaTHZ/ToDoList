import React from 'react'

const List = ({ task, toggleTask, toggleFavourite, removeTask }) => {
    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <p className='todoText' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <span className={`timeDue`} style={{ background: task.color}}>
                    {task.time}
                </span>
                <span style={{ color: task.color}}>{task.category}</span> : {task.text}
            </p>
            <button className={task.favourite ? 'favourited' : ''} onClick={() => toggleFavourite(task.id)}>
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
