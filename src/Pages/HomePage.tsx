import Title from "../Component/HomePageC/Title"
import Laila from "../Component/HomePageC/Laila"
import Choose from "../Component/HomePageC/Choose"
import Bottom from "../Component/HomePageC/Bottom"
function HomePage() {
  
  return (
    
      <div className="min-h-screen bg-linear-to-br from-green-400 to-blue-300  p-6 text-cente ">
        <Title/>
        <Laila/>
        <Choose/>
        <Bottom/>
      </div>
     
  )
}
export default HomePage