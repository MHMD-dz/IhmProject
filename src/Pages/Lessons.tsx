import Title from "../Component/HomePageC/Title"
import LessonPage from "../Component/Lessons/ChooseL";
import Laila from "../Component/HomePageC/Laila";

interface Props  {
    lessonId : number ;
}
const Lessons = ( {lessonId} : Props ) => {
  return (
    <div className="min-h-screen bg-green-100  p-3 text-cente " >
      <Title
        title={`📚 Lesson ${lessonId} 📚`}
      />

      <Laila
        title={` Welcome to lesson ${lessonId} `}
        text="Hello there, future eco-hero! 🌟 I'm Laila, and I'm so excited to be your recycling guide. Get ready for a fun adventure where we'll learn how to protect our amazing planet together. Let's become Earth's superheroes! 🦸‍♀️🌍!"
        lailaImage="/Laila/LailaLrn.png"
      />
      
      <LessonPage
        LessonId={lessonId}
      />
    </div>
  )
}

export default Lessons