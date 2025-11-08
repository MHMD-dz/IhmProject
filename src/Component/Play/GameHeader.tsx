type propsType = {
    Time : number;
    Score : number;
    Lives : number;
    scoreToWin : number;
}

const GameHeader = ( { Time , Score , Lives  , scoreToWin} : propsType  ) => {
  return (
    <div className="flex justify-between items-center mb-6 bg-green-100 rounded-2xl border-blue-200 p-4  shadow-lg border-3">
      <div className="text-xl font-bold text-green-700">⭐ Score: {Score} / {scoreToWin}</div>
      <div className="text-xl font-bold text-blue-700">⏰ Time: {Time}s</div>
      <div className="text-xl font-bold text-red-700">❤️ Lives: {Lives}</div>
    </div>
    
  )
}

export default GameHeader