import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Bottom = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-500 mt-7 to-blue-500 text-white p-8 sticky   text-center  rounded-3xl shadow-lg">
      
      <div className="max-w-2xl mx-auto">
        
        <p className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaGraduationCap />
          Created by <span className='text-blue-800' >Benzineb Mohamed</span>
        </p>
        
       
        <div className="flex justify-center gap-8 text-3xl mb-6">
          <a href="https://github.com/MHMD-dz" 
          target="_blank" rel="noopener noreferrer"
             className="bg-white text-gray-800 p-2.5 rounded-full hover:bg-gray-300 transition-all shadow-lg"
             title="GitHub Profile">
            <FaGithub />
          </a>
          
          <a href="https://www.linkedin.com/in/mohammed-benzineb-aa0b53310" 
             target="_blank" rel="noopener noreferrer"
             className="bg-white text-blue-600 p-2.5 rounded-full hover:bg-gray-300 transition-all shadow-lg"
             title="LinkedIn Profile">
            <FaLinkedin />
          </a>
          
          <a href="mailto:mhmdhayza@gmail.com" 
             className="bg-white text-red-500 p-2.5 rounded-full hover:bg-gray-300 transition-all shadow-lg"
             title="Send Email">
            <FaEnvelope />
          </a>
        </div>
        
        
        <p className="text-sm opacity-90">
          L3 Computer Science Project - EcoKids App
        </p>
      </div>
      
    </div>
  )
}

export default Bottom