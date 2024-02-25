import React from "react";
import { Task } from "./Task";

export function ActionList({ tasks, onDeleteTask, onToggle, onClear }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onToggle={onToggle}
            onClear={onClear}
            key={task.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="name">Sort by Tasks Name</option>
          <option value="status">Sort by Status</option>
          <option value="input">Sort by Input Order</option>
        </select>
        <button onClick={onClear}>Clear All Tasks</button>
      </div>
    </div>
  );
}
