import Levels from "../Component/Play/Levels";
import Title from "../Component/HomePageC/Title"
import Laila from "../Component/HomePageC/Laila"

const Play = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-blue-200  p-3 text-cente ">
      <Title title="🎮 Let's Play 🎮" />
      <Laila 
          title="Let's Begin, Green-Visionary! 🦸‍♂️🌿"
          text="Welcome in the game section! Every level you complete makes Earth happier. Which environment would you like to clean up first?"
          lailaImage="/Laila/LailaPl.png"
          />
      <Levels/>
    </div>
  )
}

export default Play