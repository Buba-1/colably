import React from "react";
import LeftPanel from "./leftpanel";
import TaskBoard from "./taskboard";

const TaskboardWindow = () => {
  return (
    <div className="w-full flex flex-row">
      <LeftPanel />
      <TaskBoard />
    </div>
  );
};

export default TaskboardWindow;
