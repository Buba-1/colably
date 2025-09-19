import { useState } from "react";
import Navbar from "./components/navbar";
import ButtonList from "./components/bottonlist";
import VideoConfWindow from "./components/videoConfWindow";
import TaskboardWindow from "./components/taskboardWindow";
import WhiteboardWindow from "./components/whiteboardWindow";
import DocCollabWindow from "./components/doccollabWindow";

export default function App() {
  const [window, setWindow] = useState("videoConf");

  function switchController(stringArg) {
    console.log(`The button clicked is ${stringArg}`);
    setWindow(stringArg);
  }

  return (
    <div className="h-screen flex flex-col  bg-whitesmoke items-center">
      <Navbar />
      <ButtonList onButtonClick={switchController} />
      {window === "videoConf" && <VideoConfWindow />}
      {window === "taskboard" && <TaskboardWindow />}
      {window === "whiteboard" && <WhiteboardWindow />}
      {window === "doccollab" && <DocCollabWindow />}
    </div>
  );
}
