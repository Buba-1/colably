import { useState } from "react";
import Navbar from "./components/navbar";
import ButtonList from "./components/bottonlist";
import VideoConfWindow from "./components/videoConfWindow";

export default function App() {
  const [window, setWindow] = useState("videoConf");

  function switchController(string){
    console.log(`The button clicked is ${string}`);
  }

  return (
    <div className="h-screen flex flex-col  bg-whitesmoke items-center">
      <Navbar />
      <ButtonList onButtonClick ={switchController}/>
      {window === "videoConf" && <VideoConfWindow />}
    </div>
  );
}
