import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import Learn  from "./Pages/Learn";
import Lessons from "./Pages/Lessons";
import Quiz from "./Pages/Quiz";
import Achievements from "./Pages/Achievements";
import Sittings from "./Pages/Sittings";




function App() {
  
  return (
    
      <div>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/play" element={<Play/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/lessons" element={<Lessons lessonId={1} />}/>
          <Route path="/quiz" element={<Quiz lessonId={1} />}/>
          <Route path="/achievements" element={<Achievements/>}/>
          <Route path="/sittings" element={<Sittings/>}/>
        </Routes>

      </div>
     
  )
}

export default App
