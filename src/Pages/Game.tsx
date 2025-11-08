import GameArea from '../Component/Play/GameArea'
import GameHeader from '../Component/Play/GameHeader'
import GameFooter from '../Component/Play/GameFooter'
import { useState } from 'react'

const Game = () => {
  const [gameStats, setGameStats] = useState({
    score: 0,
    timeLeft: 0,
    lives: 0,
    scoreToWin: 0,
  });

  const [restartToken, setRestartToken] = useState(0);
  const [pauseToken, setPauseToken] = useState(0);

  const updateGameStats = (newStats: Partial<typeof gameStats>) => {
    setGameStats(prev => ({ ...prev, ...newStats }));
  };
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-300 to-blue-200  p-6 text-cente ' >
        <GameHeader
          Time={gameStats.timeLeft}
          Score={gameStats.score}
          Lives={gameStats.lives}
          scoreToWin={gameStats.scoreToWin}
          />
        <GameArea 
          onStatsUpdate={updateGameStats}
          levelId={2}
          restartToken={restartToken}
          pauseToken={pauseToken}
        />
        <GameFooter
          Restart={() => setRestartToken(t => t + 1)}
          Pause={() => setPauseToken(t => t + 1)}
        />
    </div>
  )
}

export default Game