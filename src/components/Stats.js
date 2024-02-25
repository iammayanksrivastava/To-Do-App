import React from "react";

// function ActionItem() {}
export function Stats({ tasks }) {
  if (!tasks.length)
    return (
      <p className="stats">
        You have nothing to do !! Start Adding your tasks🚀
      </p>
    );
  let numTasks = tasks.length;
  let tasksDone = tasks.filter((tasks) => tasks.done).length;
  let percentDone = Math.round((tasksDone / numTasks) * 100);

  return (
    <div className="stats">
      You have {numTasks} tasks and you have completed {tasksDone} Tasks (
      {percentDone}% Done)
    </div>
  );
}
