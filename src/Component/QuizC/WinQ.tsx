import Laila from "../HomePageC/Laila"

type Props = {
    correctCount : number ;
    onRestart : () => void
}

const WinQ = ( { correctCount , onRestart} : Props ) => {
    return (
    <div className="fixed inset-0 bg-green-300  flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-[40vw] w-full mx-4">
        
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Congratulations 🎉 !
        </h2>
        
        <Laila
          title="You Did It!"
          text="You've mastered recycling knowledge! You're an eco-superstar! 🦸‍♀️💫"
          lailaImage='/LailaHappy.png'
        />
        
        <div className="bg-green-100 mt-8 rounded-xl p-4 mb-4">
          <div className="text-2xl font-bold text-green-600">
            You get {correctCount}/8 questions correct
          </div>
        </div>
        <div>
            <button 
            onClick={onRestart}
            className="w-full text-2xl text-gray-800 bg-gray-300 hover:bg-gray-400  font-bold py-4 px-6 rounded-2xl  transition-all"
          >
            Home 🏠
          </button>
        </div>


      </div>
    </div>
  )
}


export default WinQ