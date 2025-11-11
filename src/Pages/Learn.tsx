import Title from "../Component/HomePageC/Title"
import Laila from "../Component/HomePageC/Laila"
import Lessons from "../Component/Lessons/Lesson"

const Learn = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-green-100 to-blue-100  p-6 text-cente ' >
      <Title
        title="📚 Let's Learn 📚"
      />
      <Laila
        title="Welcome to the Learning Section!"
        text="Hello there, future eco-hero! 🌟 I'm Laila, and I'm so excited to be your recycling guide. Get ready for a fun adventure where we'll learn how to protect our amazing planet together. Let's become Earth's superheroes! 🦸‍♀️🌍!"
        lailaImage="../../../public/LailaLrn.png"
      />
      <Lessons/>
    </div>
  )
}

export default Learn