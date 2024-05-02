import React, { useState } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(["Complete 10k steps", "Go on walks"]);
  const [newTask, setNewTask] = useState("");

  const addTaskHandler = () => {
    if (newTask.trim() !== '') { //can't be empty
        setTasks([...tasks, newTask]);
        setNewTask(''); // Clearing the input field after adding the task
    }
  };

  const deleteTaskHandler = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
}

  return (
    <div id="container">
      <h2>Tasks To Do</h2>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-button" onClick={addTaskHandler}>
        Add more tasks
      </button>
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              {task}
              <button onClick={() => deleteTaskHandler(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
