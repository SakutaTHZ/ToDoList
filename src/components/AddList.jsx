import React from 'react'

const AddList = ({ options ,selectedValue,handleSelectChange,currentTime, newTask, setNewTask, setNewTime, addTask }) => {
  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setNewTime(newTime);
  };

  return (
    <div className='addListBox'>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />

      <div>
        <div>
          <input
            type="time"
            name="dueTime"
            onChange={handleTimeChange}
            value={currentTime}
            id="dueTime" />
          <select id="selectBox" value={selectedValue} onChange={handleSelectChange}>
            {options.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <button onClick={addTask}>
          <span className="material-symbols-outlined">
            add
          </span>
        </button>
      </div>
    </div>
  )
}

export default AddList
