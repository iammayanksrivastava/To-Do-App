import { useState } from "react";
import React from "react";
import { Stats } from "./components/Stats";
import { ActionList } from "./components/ActionList";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleItem(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleClearTasks() {
    setTasks([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddTask} />
      <ActionList
        tasks={tasks}
        onDeleteTask={handleDeleteTasks}
        onToggle={handleToggleItem}
        onClear={handleClearTasks}
      />
      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
