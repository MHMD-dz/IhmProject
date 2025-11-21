import { Link } from "react-router-dom"
type propsType = {
  Restart: () => void ;
  Pause: () => void ;
}


const GameFooter : React.FC<propsType> = ({ Restart , Pause }) => {
  return (
    <div className="flex justify-between items-center mb-6 bg-green-100 rounded-2xl border-blue-200 p-4  shadow-lg border-3">    
        <Link to="/">
          <button className='bg-blue-100 text-gray-800 p-3 rounded-2xl hover:bg-blue-300 transition-all shadow-lg' >
            🏠 Home
          </button>
        </Link>
        
        <button onClick={Pause} className='bg-blue-100 text-gray-800 p-3 rounded-2xl hover:bg-blue-300 transition-all shadow-lg' >
          ⏸️ Pause </button>
        <button onClick={Restart} className='bg-blue-100 text-gray-800 p-3 rounded-2xl hover:bg-blue-300 transition-all shadow-lg' >
          🔄 Restart </button>
        
    </div>
  )
}

export default GameFooter