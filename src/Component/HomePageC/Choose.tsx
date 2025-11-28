import { Link } from "react-router-dom"

const Choose = () => {
  return (
   <div className="w-[90%] max-w-4xl m-auto bg-green-100 rounded-2xl flex flex-col items-center p-9 gap-6 shadow-lg border-2 border-green-200 mt-6">

        <h1 className="font-bold text-4xl text-green-800 mb-5">Choose Your Adventure!</h1>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          <Link to="/Play"
          className="flex-1 text-center min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md"
          >
            <button>
              🎮 PLAY
            </button>
          </Link>
          <Link to="/Learn"
          className="flex-1 text-center min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md"
          >
            <button>
              📚 LEARN
            </button>
          </Link>
        </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <Link to="/Achievements"  className="flex-1 min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md"
        >
          <button>
            🏆ACHIEVEMENTS
          </button>
        </Link>
        <Link to="/Sittings"  className="flex-1 text-center min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md"
        >
          <button>
            ⚙️ SETTINGS
          </button>
        </Link>
        
        </div>
    </div>
  )
}

export default Choose