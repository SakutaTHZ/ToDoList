import React, { useState } from 'react';
import AddList from './AddList';
import ResultList from './ResultList';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
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
        <AddList newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
        <ResultList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </div>
  );
};

export default TodoList;