import Title from "../Component/HomePageC/Title";
import Laila from "../Component/HomePageC/Laila";
import QuizComp from "../Component/QuizC/QuizComp";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { lessonId } = useParams();
  let time ;
  switch (Number(lessonId)) {
    case 1:
      time = 200 ;
      break;
    case 2:
      time = 185 ;
      break;
  
    case 3:
      time = 170 ;
      break;
    case 4:
      time = 155 ;
      break;
    default:
      time = 180;
      break;
  }
  return (

    <div className="min-h-screen bg-green-100  p-3 text-cente " >
      <Title
        title={`📚 Quiz ${lessonId} 📚`}
      />

      <Laila
        title={` Welcome to Quiz ${lessonId} `}
        text="It's quiz time! Use what you’ve learned, read carefully, and choose the right answers to show your recycling skills! 🦸‍♀️🌍!"
        lailaImage="/Laila/LailaLrn.png"
        />
        <QuizComp
          lessonId={Number(lessonId)}
          time={time}
        />
    </div>
  )
}

export default Quiz