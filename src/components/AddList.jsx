import React from 'react'

const AddList = ({newTask,setNewTask,addTask}) => {
  return (
    <div className='addListBox'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    </div>
  )
}

export default AddList