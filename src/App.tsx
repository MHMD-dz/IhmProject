import HomePage from "./Pages/HomePage";
import Notfound from "./Pages/Play";
import Oooom from "./Pages/Learn";
import Pr from "./Pages/Achievements";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Notfound/>,
  },
  {
    path: "/oooo",
    element: <Oooom />,
    errorElement: <Notfound/>,
  },
  {
    path: "/pr",
    element: <Pr />,
    errorElement: <Notfound/>,
  },
  {
    path: "/pr/:id",
    element:<Pr/>,
    errorElement: <Notfound/>,
  }
  
]);
function App() {
  
  return (
    
      <div >
        <RouterProvider router={router}/>
      </div>
     
  )
}

export default App
