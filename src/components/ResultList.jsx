import React from 'react'
import List from './List'

const ResultList = ({ tasks, toggleTask, removeTask }) => {
    return (
        <div className='resultListBox'>
            <ul>
                {tasks.map((task, index) => (
                    <List key={index} task={task} toggleTask={toggleTask} removeTask={removeTask} />
                ))}
            </ul>
        </div>
    )
}

export default ResultList