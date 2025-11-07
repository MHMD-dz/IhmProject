import Title from "../Component/HomePageC/Title"
import Laila from "../Component/HomePageC/Laila"
import Choose from "../Component/HomePageC/Choose"
import Bottom from "../Component/HomePageC/Bottom"
function HomePage() {
  
  return (
    
      <div className="min-h-screen bg-linear-to-br from-green-400 to-blue-300  p-6 text-cente ">
        <Title title="🌱 EcoKids 🌱" />
        <Laila 
            title="Hello, I am Laila! 👋" 
            text="Welcome to EcoKids, your fun adventure in learning about recycling and protecting our beautiful planet! <br></br>
                Together we'll learn how to sort waste, recycle properly, and become true eco-heroes."
            lailaImage="/LailaWel.png" />
        <Choose/>
        <Bottom/>
      </div>
     
  )
}
export default HomePage