

const Choose = () => {
  return (
   <div className="w-[90%] max-w-4xl m-auto bg-green-100 rounded-2xl flex flex-col items-center p-8 gap-6 shadow-lg border-2 border-green-200 mt-6">

        <h1 className="font-bold text-4xl text-green-800 mb-6">Choose Your Adventure!</h1>

        <div className="flex flex-wrap justify-center gap-6 w-full">
        <button className="flex-1 min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md">
          🎮 PLAY
        </button>
        <button className="flex-1 min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md">
          📚 LEARN
        </button>
        </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <button className="flex-1 min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md">
          🏆 ACHIEVEMENTS
        </button>
        <button className="flex-1 min-w-[200px] max-w-[300px] text-green-600 text-2xl font-bold p-8 bg-blue-100 rounded-2xl border-4 border-green-300 hover:bg-blue-200 hover:scale-105 transition-all shadow-md">
          ⚙️ SETTINGS
        </button>
        </div>
    </div>
  )
}

export default Choose