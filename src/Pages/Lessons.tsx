import Title from "../Component/HomePageC/Title"
import LessonPage from "../Component/Lessons/ChooseL";
import Laila from "../Component/HomePageC/Laila";
import { useParams } from 'react-router-dom';




const Lessons = () => {
  const { lessonId } = useParams();
  return (
    <div className="min-h-screen bg-green-100  p-3 text-cente " >
      <Title
        title={`📚 Lesson ${lessonId} 📚`}
      />

      <Laila
        title={` Welcome to lesson ${lessonId} `}
        text="It's time to learn how to save our planet!
              Pay close attention — read well if you want to pass the quiz and become a true recycling hero! 🦸‍♀️🌍"
        lailaImage="/Laila/LailaLrn.png"
      />
      
      <LessonPage
        LessonId={Number(lessonId)}
      />
    </div>
  )
}

export default Lessons