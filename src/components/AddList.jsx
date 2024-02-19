import React from 'react'

const AddList = ({currentTime,newTask,setNewTask,setNewTime,addTask}) => {
  return (
    <div className='addListBox'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <input 
        type="time" 
        name="dueTime" 
        onChange={(e) => setNewTime(e.target.value)}
        value={currentTime}
        id="dueTime" />
        <button onClick={addTask}>
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    </div>
  )
}

export default AddList