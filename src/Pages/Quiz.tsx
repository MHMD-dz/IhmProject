import Title from "../Component/HomePageC/Title";
import Laila from "../Component/HomePageC/Laila";
import QuizComp from "../Component/QuizC/QuizComp";

interface QuizProps {
  lessonId: number;
}

const Quiz = ({lessonId}: QuizProps) => {
  return (
    <div className="min-h-screen bg-green-100  p-3 text-cente " >
      <Title
        title={`📚 Quiz ${lessonId} 📚`}
      />

      <Laila
        title={` Welcome to Quiz ${lessonId} `}
        text="Hello there, future eco-hero! 🌟 I'm Laila, and I'm so excited to be your recycling guide. Get ready for a fun adventure where we'll learn how to protect our amazing planet together. Let's become Earth's superheroes! 🦸‍♀️🌍!"
        lailaImage="/LailaLrn.png"
        />
        <QuizComp
          lessonId={lessonId}
          time={200}
        />
    </div>
  )
}

export default Quiz