import React, { useState } from 'react';
import AddList from './AddList';
import ResultList from './ResultList';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState(getCurrentTime(0));

  function getCurrentTime(mode) {
    const now = new Date();
    now.setHours(now.getHours() + 1); // Adding 1 hour
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const addTask = () => {
    console.log(newTime)
    const time = newTime==''?getCurrentTime(1):newTime
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(),time:time, text: newTask, completed: false }]);
      setNewTask('');
      setNewTime('')
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='toDoListBox'>
        <AddList newTask={newTask} currentTime={getCurrentTime()} setNewTask={setNewTask} setNewTime={setNewTime} addTask={addTask}/>
        <ResultList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </div>
  );
};

export default TodoList;