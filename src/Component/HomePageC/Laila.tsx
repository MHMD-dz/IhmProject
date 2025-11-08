import LailaWel from '../../../public/LailaWel.png'
import LailaEX from '../../../public/LailaEx.png'
import LailaPl from '../../../public/LailaPl.png'
import LailaSad from '../../../public/LailaSad.png'
import LailaHappy from '../../../public/LailaHappy.png'



type Props = {
  title : string ;
  text : string ;
  lailaImage : string ;
}
const Laila = (  { title  , text  , lailaImage } : Props  ) => {
  return (
    <div className='w-[90%] m-auto h-auto bg-green-100 rounded-2xl flex items-center p-4 gap-4 shadow-lg border-2 border-green-200'>
      <div className='shrink-0'>
        <img 
          src={lailaImage} 
          alt="Laila" 
          className="w-35 h-35 object-cover rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className='bg-white w-full p-4 rounded-2xl shadow-sm border border-green-100'>
        <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-3">
          {text}
        </p>
      </div>
      
    </div>
  )
}

export default Laila

