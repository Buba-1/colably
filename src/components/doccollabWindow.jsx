import React from "react";
import LeftPanel from "./leftpanel";
import DocCollab from "./doccollab";

const DocCollabWindow = () => {
  return (
    <div className="w-full flex flex-row">
      <LeftPanel />
      <DocCollab />
    </div>
  );
};

export default DocCollabWindow;
