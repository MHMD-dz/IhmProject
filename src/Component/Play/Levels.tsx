import { useState } from "react"

type Level = {
  id: number;
  name: string;
  icon: string;
  difficulty: string;
  status: 'completed' | 'available' | 'locked';
  stars: string;
}

const Levels = () => {
  const [levels, setLevels] = useState<Level[]>([
    {id: 1, name: 'Kitchen', icon: '🍴', difficulty: 'Easy', status: 'completed', stars: '★☆☆☆'},
    {id: 2, name: 'School', icon: '🏫', difficulty: 'Medium', status: 'available', stars: '★★☆☆'},
    {id: 3, name: 'Park', icon: '🌳', difficulty: 'Hard', status: 'locked', stars: '☆☆☆☆'},
    {id: 4, name: 'City', icon: '🌇', difficulty: 'Expert', status: 'locked', stars: '☆☆☆☆'},
  ])
  const getLevelStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-400 shadow-lg hover:shadow-xl';
      case 'available':
        return 'bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-400 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105';
      case 'locked':
        return 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 opacity-75';
      default:
        return 'bg-white border-gray-300';
    }
  };

  const getButtonStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'available':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'locked':
        return 'bg-gray-400 cursor-not-allowed text-gray-200';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getButtonText = (status: string) => {
    switch (status) {
      case 'completed': return 'PLAY AGAIN';
      case 'available': return 'PLAY NOW';
      case 'locked': return 'LOCKED';
      default: return 'PLAY';
    }
  };

  const handleLevelClick = (level: Level) => {
    if (level.status === 'locked') return;
    console.log('Starting level:', level.id);
  };

  return (
    <div className="w-[90%] max-w-6xl m-auto bg-linear-to-br from-blue-50 to-green-50 rounded-3xl p-8 gap-6 shadow-2xl border-4 border-blue-300 mt-8">
      
      
      <div className="text-center mb-8">
        <h1 className="font-bold text-5xl text-blue-800 mb-4 drop-shadow-sm">
          Choose Your Level! 🎮
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Start your recycling adventure! Each level teaches you about different types of waste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => (
          <div key={level.id} 
               className={`${getLevelStyles(level.status)} border-4 rounded-2xl p-6 text-center transition-all duration-300 transform min-h-[280px] flex flex-col justify-between`}>

            <div className="text-5xl mb-3 drop-shadow-sm">{level.icon}</div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">LEVEL {level.id}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-3 capitalize">{level.name}</p>
    
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-sm font-medium text-gray-600">{level.difficulty}</span>
                <span className="text-yellow-500 text-xl font-bold">{level.stars}</span>
              </div>
            </div>

            
            <button 
              onClick={() => handleLevelClick(level)}
              className={`${getButtonStyles(level.status)} font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-md mt-4`}
              disabled={level.status === 'locked'}
            >
              {getButtonText(level.status)}
            </button>

            
            <div className="mt-3">
              {level.status === 'completed' && (
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                  ✅ COMPLETED
                </span>
              )}
              {level.status === 'available' && (
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  🎮 AVAILABLE
                </span>
              )}
            </div>

          </div>
        ))}
      </div>

      
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          Complete levels to unlock new challenges and become a recycling master! 🌟
        </p>
      </div>

    </div>
  )
}

export default Levels