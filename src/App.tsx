import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Play from "./Pages/Play";
import Game from "./Pages/Game";
import Learn  from "./Pages/Learn";
import Lessons from "./Pages/Lessons";
import Quiz from "./Pages/Quiz";
import Achievements from "./Pages/Achievements";
import Sittings from "./Pages/Sittings";
import ProgressContextProvider from "./Hooks/PrgContext"; 





function App() {
  return (
    
      <div>

        <ProgressContextProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/play" element={<Play/>}/>
            <Route path="/game/:levelId" element={<Game/>}/>
            <Route path="/learn" element={<Learn/>}/>
            <Route path="/lessons/:lessonId" element={<Lessons/>}/>
            <Route path="/quiz/:lessonId" element={<Quiz/>}/>
            <Route path="/achievements" element={<Achievements/>}/>
            <Route path="/sittings" element={<Sittings/>}/>
          </Routes>
        </ProgressContextProvider>
      </div>
     
  )
}

export default App
