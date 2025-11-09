import HomePage from "./Pages/HomePage";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import Learn from "./Pages/Learn";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {
  
  return (
    
      <div>
        <Play />
        <Learn/>
      </div>
     
  )
}

export default App
