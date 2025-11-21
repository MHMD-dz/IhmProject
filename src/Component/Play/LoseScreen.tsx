import Laila from '../HomePageC/Laila';
import React from 'react';
import { Link } from 'react-router-dom';

interface LoseScreenProps {
  score: number;
  onRestart: () => void;
}

const LoseScreen: React.FC<LoseScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-red-300 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-[40vw] w-full mx-4">


        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Game Over
        </h2>
        
        <Laila
          title="Oops! Let's Try Again!"
          text="Oh no! The planet needs your help! 
                  Don't give up - let's clean up together! 🌱✨"
          lailaImage='/Laila/LailaSad.png'
        />

        
        <div className="bg-red-100 mt-8 rounded-xl p-4 mb-6">
          <div className="text-2xl font-bold text-red-700">
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
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all"
          >
            🔄 Try Again
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default LoseScreen;