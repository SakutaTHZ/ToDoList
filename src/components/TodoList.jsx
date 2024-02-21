import React, { useState } from 'react';
import AddList from './AddList';
import ResultList from './ResultList';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState(getCurrentTime(0));
  const options = [{name:'Default',color:'#646cff'}, {name:'Food',color:'#E0607E'}, {name:'Shopping',color:'#D36060'}, {name:'Work',color:'#C2714F'},{name:'Learn',color:'#57CC99'},{name:'Sleep',color:'#38A3A5'}];
  const [selectedValue, setSelectedValue] = useState('Default');

  // Event handler for select box change
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function getCurrentTime(mode) {
    const now = new Date();
    if (mode === 0) {
      now.setHours(now.getHours());
    } else {
      now.setHours(now.getHours() + 1);
    }
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const addTask = () => {
    const time = newTime == getCurrentTime(0) ? getCurrentTime(1) : newTime
    if (newTask.trim() !== '') {
      let catcolor = 'green'
      options.forEach(element => {
        if(element.name == selectedValue){
          catcolor = element.color 
        }
      });
      setTasks([...tasks, { id: Date.now(), time: time, text: newTask, category: selectedValue, color:catcolor, completed: false, favourite: false }]);
      setNewTask('');
      setSelectedValue('Default');
      setNewTime(getCurrentTime(1))
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleFavourite = (taskId) => {
    tasks.forEach(element => {
      if (element.id == taskId) {
        element.favourite = !element.favourite
      }
    });
    setTasks([...tasks])
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='toDoListBox'>
      <AddList options={options} selectedValue={selectedValue} handleSelectChange={handleSelectChange} newTask={newTask} currentTime={newTime} setNewTask={setNewTask} setNewTime={setNewTime} addTask={addTask} />
      <ResultList tasks={tasks} toggleTask={toggleTask} toggleFavourite={toggleFavourite} removeTask={removeTask} />
    </div>
  );
};

export default TodoList;
