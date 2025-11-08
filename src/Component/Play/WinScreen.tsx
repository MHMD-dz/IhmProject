import React from 'react';

interface WinScreenProps {
  score: number;
  onRestart: () => void;
}

const WinScreen: React.FC<WinScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md w-full mx-4">
        
        {/* الرمز */}
        <div className="text-8xl mb-4">🎉</div>
        
        {/* العنوان */}
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          You Win!
        </h2>
        
        {/* الرسالة */}
        <p className="text-xl text-gray-600 mb-4">
          Congratulations! You're an Eco Hero!
        </p>

        {/* النقاط */}
        <div className="bg-green-100 rounded-xl p-4 mb-6">
          <div className="text-2xl font-bold text-green-700">
            Final Score: {score}
          </div>
        </div>

        {/* الزر */}
        <button 
          onClick={onRestart}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all"
        >
          🔄 Play Again
        </button>

      </div>
    </div>
  );
};

export default WinScreen;