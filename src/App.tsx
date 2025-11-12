import HomePage from "./Pages/HomePage";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import Learn  from "./Pages/Learn";
import Lessons from "./Pages/Lessons";
import Quiz from "./Pages/Quiz";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {
  
  return (
    
      <div>
        
        <Quiz 
          lessonId={1}
          
        />
      </div>
     
  )
}

export default App
