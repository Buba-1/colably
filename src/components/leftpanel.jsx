import React from "react";
import { useState } from "react";
import LiveChat from "./livechat";
import Members from "./members";

export default function LeftPanel() {
    const [panelState, setPanelState] = useState("chat");

    function switcher (string) {
        if (string === "chat") {
            setPanelState("chat");
        }   
        else if (string === "members") {
            setPanelState("members");
        }
    }
  return (
    <div className="w-1/5">
      <div className="w-full flex">
        <button
          onClick={() => {
            switcher("chat");
          }}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          chat
        </button>

        <button
          onClick={() => {
            switcher("members");
          }}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          members
        </button>
      </div>
      <div className="w-full">
        {panelState === "chat" && <LiveChat />}
        {panelState === "members" && <Members />}
      </div>
    </div>
  );
}