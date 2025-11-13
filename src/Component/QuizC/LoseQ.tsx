import Laila from "../HomePageC/Laila"

type Props = {
    correctCount : number ;
    onRestart : () => void
}

const LoseQ = ( { correctCount , onRestart} : Props ) => {
  return (
    <div className="fixed inset-0 bg-red-200  flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-[40vw] w-full mx-4">
        
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          You're Learning!
        </h2>
        
        <Laila
          title="You're Getting There!"
          text="Learning takes time and you're making great progress!🦸‍♀️"
          lailaImage='/LailaSad.png'
        />
        
        <div className="bg-red-100 mt-8 rounded-xl p-4 mb-4">
          <div className="text-2xl font-bold text-red-700">
            You get {correctCount}/8 questions correct
          </div>
        </div>
        <div>
            <button 
            onClick={onRestart}
            className="w-full text-2xl text-white bg-red-300 hover:bg-red-400  font-bold py-4 px-6 rounded-2xl  transition-all"
          >
            Try Again 🔄 
          </button>
        </div>


      </div>
    </div>
  )
}

export default LoseQ