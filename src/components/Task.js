import React from "react";

export function Task({ task, onDeleteTask, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={task.done}
        onChange={() => onToggle(task.id)}
      />
      <span style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.taskName}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>🚮</button>
    </li>
  );
}
