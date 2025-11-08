import React, { useEffect, useState } from 'react';
import {  getLevelItems, bins } from '../../DataBase/DB';
import type { WasteItem , Bin} from '../../DataBase/DB';
import WinScreen from './WinScreen';
import LoseScreen from './LoseScreen';

interface GameAreaProps {
  onStatsUpdate: (stats: { score?: number; timeLeft?: number; lives?: number }) => void;
  levelId: number;
  restartToken?: number;
  pauseToken?: number;
}
const GameArea: React.FC<GameAreaProps> = ({ onStatsUpdate , levelId, restartToken, pauseToken }) => {

    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [lives, setLives] = useState(3);
    const [isPlaying, setIsPlaying] = useState(true);
    const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);
    const [showWinScreen, setShowWinScreen] = useState(false);
    const [showLoseScreen, setShowLoseScreen] = useState(false);


    useEffect(() => {
        onStatsUpdate({ score, timeLeft, lives });
    }, [score, timeLeft, lives]);

    interface FallingItem {
        id: number;
        item: WasteItem;
        position: { x: number; y: number };
        isFalling: boolean;
    }


    const levelItems = getLevelItems(levelId);

   const startGame = () => {
    setScore(0);
    setLives(3);
    setTimeLeft(600);
    setIsPlaying(true);
    };


    useEffect(() => {
    if (!isPlaying || fallingItems.length === 0) return;

    const fallInterval = setInterval(() => {
        setFallingItems(prev => {
        const updatedItems = prev.map(fallingItem => {
            if (!fallingItem.isFalling) return fallingItem;
            
            const newY = fallingItem.position.y + 2; 
            
            
            if (newY > 100) {
            return { ...fallingItem, isFalling: false };
            }
            
            return {
            ...fallingItem,
            position: { ...fallingItem.position, y: newY }
            };
        });

        
        return updatedItems.filter(item => item.isFalling);
        });
    }, 50); 

    return () => clearInterval(fallInterval);
    }, [isPlaying, fallingItems.length]);

  const handleItemDrop = (itemId: number, binType: string) => {
  if (!isPlaying) return;
  
  const item = levelItems.find(i => i.id === itemId);
  if (!item) return;

  if (item.type === binType) {
    setScore(prev => prev +10);
    
    
    setFallingItems(prev => prev.filter(fi => fi.item.id !== itemId));
    
  } else {
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) endGame(false);
      return newLives;
    });
  }
 
};


useEffect(() => {
  if (!isPlaying) return;

  const spawnInterval = setInterval(() => {
    const randomItem =
      levelItems[Math.floor(Math.random() * levelItems.length)];

    const newItem: FallingItem = {
      id: Date.now(),
      item: randomItem,
      position: { x: Math.random() * 70 + 15, y: -10 },
      isFalling: true,
    };

    setFallingItems((prev) => [...prev, newItem]);
  }, 1500); 

  return () => clearInterval(spawnInterval);
}, [isPlaying]);

    const handleDragStart = (e: React.DragEvent, itemId: number) => {
        e.dataTransfer.setData('text/plain', itemId.toString());
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, binType: string) => {
        e.preventDefault();
    const itemId = parseInt(e.dataTransfer.getData('text/plain'));
        handleItemDrop(itemId, binType);
    };

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
      if (typeof restartToken === 'number') {
        startGame();
      }
    }, [restartToken]);

    
    useEffect(() => {
      if (typeof pauseToken === 'number') {
        setIsPlaying(prev => !prev);
      }
    }, [pauseToken]);



    useEffect(() => {
      if (!isPlaying || timeLeft <= 0) return;

      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, [isPlaying, timeLeft]);

    useEffect(() => {
      const WIN_SCORE = 100;
      if (score >= WIN_SCORE && isPlaying) {
        endGame(true);
      }
    }, [score, isPlaying]);


    const endGame = (won: boolean) => {
        setIsPlaying(false);
        if (won) {
            setShowWinScreen(true);
        } else {
            setShowLoseScreen(true);
        }
    };

    const handleRestart = () => {
        setShowWinScreen(false);
        setShowLoseScreen(false);
        startGame();
    };

  return (
   
    <>
        <div className="bg-white rounded-3xl h-[75vh] p-8 shadow-2xl border-4 border-green-300 mb-6">
        
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Catch the falling items!</h2>
            </div>

            <div className="relative h-[45vh] bg-blue-50 rounded-2xl mb-8 border-2 border-dashed border-blue-200 overflow-hidden">
                {fallingItems.map(fallingItem => (
                <div
                    key={fallingItem.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, fallingItem.item.id)}
                    className="text-6xl cursor-grab absolute transition-all duration-100"
                    style={{
                    left: `${fallingItem.position.x}%`,
                    top: `${fallingItem.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                    }}
                >
                    {fallingItem.item.emoji}
                </div>
                ))}
            </div>

        <div className="flex justify-around items-end">
            {bins.map(bin => (
            <div
                key={bin.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, bin.type)}
                className={`${bin.color} text-white text-4xl p-6 rounded-2xl w-28 h-28 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all shadow-lg`}
            >
                <div>{bin.emoji}</div>
                <div className="text-sm font-bold mt-2">{bin.name}</div>
            </div>
            ))}
        </div>

        </div>
            {showWinScreen && (
            <WinScreen 
                score={score}
                onRestart={handleRestart}
            />
            )}
            
            {showLoseScreen && (
            <LoseScreen 
              score={score}
              onRestart={handleRestart}
        />
        )}
    </>
);
}


export default GameArea