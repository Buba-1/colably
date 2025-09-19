import React from "react";
import LeftPanel from "./leftpanel";
import WhiteBoard from "./whiteboard";

const WhiteboardWindow = () => {
  return (
    <div className="w-full flex flex-row">
      <LeftPanel />
      <WhiteBoard />
    </div>
  );
};

export default WhiteboardWindow;
