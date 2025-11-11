import HomePage from "./Pages/HomePage";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import Learn  from "./Pages/Learn";
import Lessons from "./Pages/Lessons";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {
  
  return (
    
      <div>
        
        <Lessons 
          lessonId={1}
        />
      </div>
     
  )
}

export default App
