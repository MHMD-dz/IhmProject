import Title from "../Component/HomePageC/Title"
import Laila from "../Component/HomePageC/Laila"
import Choose from "../Component/HomePageC/Choose"
import Bottom from "../Component/HomePageC/Bottom"
function HomePage() {
  
  return (
    
      <div className="min-h-screen bg-linear-to-br from-green-400 to-blue-300  p-3 text-cente ">
        <Title title="🌿 Green-Visionaries 🌿" />
        <Laila 
            title="Hello, I am Laila! 👋" 
            text="Hello, future Green-Visionary! 🌟 I'm Laila, your guide on this amazing adventure to protect our planet. Together,
             we'll explore the magic of recycling, learn how to sort waste, and discover ways to turn trash into treasure! ♻️✨"
            lailaImage="/Laila/LailaWel.png" />
        <Choose/>
        <Bottom/>
      </div>
     
  )
}
export default HomePage