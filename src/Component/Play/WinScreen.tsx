import React from 'react';
import Laila from '../HomePageC/Laila';
import { Link } from 'react-router-dom';


interface WinScreenProps {
  score: number;
  onRestart: () => void;
}

const WinScreen: React.FC<WinScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-green-300  flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-[40vw] w-full mx-4">
        
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          You Win!
        </h2>
        
        <Laila
          title="Eco Champion! 🏅"
          text="Mission accomplished! You've made the world 
                cleaner and greener! 🦸‍♀️💫"
          lailaImage='/Laila/LailaHappy.png'
        />
        
        
      
        <div className="bg-green-100 mt-8 rounded-xl p-4 mb-6">
          <div className="text-2xl font-bold text-green-700">
            Final Score: {score}
          </div>
        </div>


        <div className="flex flex-row gap-4">  
          <Link to="/"
           className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all"
          >
            <button >
              🏠 Home
            </button>
          </Link>
          

        <button 
          onClick={onRestart}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all"
        >
          🔄 Play Again
        </button>
        </div>

      </div>
    </div>
  );
};

export default WinScreen;