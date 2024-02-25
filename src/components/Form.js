import { useState } from "react";
import React from "react";

export function Form({ onAddItems }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName) return;
    const newTask = { taskName, done: false, id: Date.now() };
    onAddItems(newTask);
    console.log(newTask);
    setTaskName("");
  }

  return (
    <form className="add-form" onClick={handleSubmit}>
      <input
        type="text"
        placeholder="What do you want to do...."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
