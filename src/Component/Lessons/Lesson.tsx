import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProgressContext } from "../../Hooks/PrgContext";



type Lesson = {
  id: number;
  icon: string;
  name: string;
  difficulty: string;
  stars: string;
  status: 'completed' | 'available' | 'locked';
}


  

const getLevelStyles = (status: string) => {
    switch (status) {
        case 'completed':
            return 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-400 shadow-lg hover:shadow-xl';
        case 'available':
            return 'bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-400 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105';
        case 'locked':
            return 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 opacity-75';
        default:
            return 'bg-white border-gray-300';
    }
};

  const getQuizButtonStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'available':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'locked':
        return 'bg-gray-400 cursor-not-allowed text-gray-200';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getQuizButtonText = (status: string) => {
    switch (status) {
      case 'completed': return 'PLAY AGAIN';
      case 'available': return 'PLAY QUIZ';
      case 'locked': return 'LOCKED';
      default: return 'PLAY';
    }
  };
  const getLessonButtonText = (status: string) => {
    switch (status) {
        case 'completed':case 'available':  return 'READ LESSON';
        case 'locked': return 'LOCKED';
        default: return 'PLAY';
    }
  };
  const getLessonButtonStyles = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-purple-500 hover:bg-purple-600 text-white';
    case 'available':
      return 'bg-indigo-500 hover:bg-indigo-600 text-white';
    case 'locked':
      return 'bg-gray-400 cursor-not-allowed text-gray-200';
    default:
      return 'bg-indigo-500 text-white';
  }
};
  


const Lessons = () => {
      const navigate = useNavigate();
      const { progress } = useContext(ProgressContext);
      const firstIncomplete = progress.lessonsCompleted.indexOf(false);
    const StatusS = (lessonId: number) => {
      if(progress.lessonsCompleted[lessonId] === true) {
        return 'completed';
      } else if (lessonId === firstIncomplete) {
        return 'available';
      } else {
        return 'locked';
      }
    }


  const lessons : Lesson[] = [
      {id: 1, icon: '♻️', name: 'The Magic of Recycling ', status: `${StatusS(0)}` , difficulty: 'Easy' , stars: "★☆☆☆"},
      {id: 2, icon: '🗑️♻️🍎', name: 'The Three Super Bins ', status: `${StatusS(1)}` , difficulty: 'Medium' , stars: "★★☆☆" },
      {id: 3, icon: '🍳', name: 'Kitchen Recycling Adventure ', status: `${StatusS(2)}` , difficulty: 'Hard' , stars: "★★★☆"},
      {id: 4, icon: '🔍', name: 'Become a Recycling Detective ', status: `${StatusS(3)}` , difficulty: 'Expert' , stars: "★★★★"},
      ]
    const handleLessonClick = (lesson: Lesson) => {
      if (lesson.status === 'locked') return;
      navigate(`/lessons/${lesson.id}`);
      
    };

    const handleQuizClick = (lesson: Lesson) => {
      if (lesson.status === 'locked') return;
      navigate(`/quiz/${lesson.id}`);
    };

    return (
    <div className='w-[73%] mx-auto rounded-2xl my-6 bg-white border-4 border-blue-200 p-9 text-center '>

      <h2 className="text-5xl font-bold text-blue-800 mb-7">Choose Your Lesson & Quiz</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className={`${getLevelStyles(lesson.status)} p-6 transition-all border-4 rounded-2xl flex flex-col justify-between min-h-[380px]`}>
            
            <div>
              <div className="text-4xl mb-4 drop-shadow-sm">{lesson.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">LEVEL {lesson.id}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-3 capitalize">{lesson.name}</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-600">{lesson.difficulty}</span>
                <span className="text-yellow-500 text-xl font-bold">{lesson.stars}</span>
              </div>
            </div>

            <div>
              <button
              onClick={() => handleLessonClick(lesson)}
              className={`${getLessonButtonStyles(lesson.status)} shadow-md w-full py-3 rounded-full mb-2 text-lg font-semibold hover:scale-105 transition-all`}>
                {getLessonButtonText(lesson.status)}
              </button>
              
              <button 
              onClick={() => handleQuizClick(lesson)}
              className={`${getQuizButtonStyles(lesson.status)} w-full py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all`}>
                {getQuizButtonText(lesson.status)}
              </button>

              <div className="mt-3">
                {lesson.status === 'completed' && (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    ✅ COMPLETED
                  </span>
                )}
                {lesson.status === 'available' && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    🎮 AVAILABLE
                  </span>
                )}
              </div>
              
            </div>
          </div>
        ))}

      
      </div>
      <div className="   mt-7 ">
        <p className="text-gray-600 text-sm">
          Complete Quiz to unlock new Lessons and become a recycling master! 🌟
        </p>
      </div>
    </div>
  )
}


export default Lessons