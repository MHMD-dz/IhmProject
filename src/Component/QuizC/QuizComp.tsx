import { quizData, type QuizQuestion } from "../../DataBase/DB";
import { useState , useEffect } from "react";
import WinQ from "./WinQ";
import  LoseQ  from "./LoseQ";
import { useContext } from "react";
import { ProgressContext } from "../../Hooks/PrgContext";

type Props = {
    time : number ;
    lessonId: number;
}


const QuizComp = ({ lessonId , time }: Props) => {
    const { compliteLesson } = useContext(ProgressContext);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [timer , setTimer ] = useState(time);
    const question = quizData[lessonId].questions ;
    const [showWinScreen, setShowWinScreen] = useState(false);
    const [showLoseScreen, setShowLoseScreen] = useState(false);

    useEffect(() =>{
        if (timer <= 0) {
            return ;
        } 
        const LessTime = setInterval(() => {
            setTimer(prev => prev - 1)
        },1000)
        return () => clearInterval(LessTime)
    
    },[timer] )

    const handleAnswer = ( questionId : number , optId : number ) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: optId }));
    }


    const getOptionStyle = (questionId: number, optionId: number) => {
        const isSelected = selectedAnswers[questionId] === optionId;
        const baseStyle = "flex items-center p-3 rounded-lg border transition-all duration-200 cursor-pointer ";
        
        if (isSelected) {
            return baseStyle + "bg-blue-500 text-white border-blue-600 shadow-md";
        }
        return baseStyle + "bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300";
    };


    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const percentage = (timer / time) * 100;


    let timerColor = "text-green-600";
    if (timer < 60) timerColor = "text-red-600";
    else if (timer < 120) timerColor = "text-yellow-600";

    let progressColor = "bg-green-500";
    if (timer < 60) progressColor = "bg-red-500";
    else if (timer < 120) progressColor = "bg-yellow-500";


    const calculateScore = () => {
        let correctCount = 0;
        
        question.forEach(question => {
            const userAnswer = selectedAnswers[question.id];
            const correctOption = question.options.find(opt => opt.correct);
            
            if (userAnswer === correctOption?.id) {
                correctCount++;
            }
    });
    
    return correctCount;
};


    const correctCount = calculateScore();

    const handleRestart = () => {
        setSelectedAnswers({});
        setTimer(time);
    }
    const handleSubmit = () => {
        const score = calculateScore();
        console.log('Quiz Submit - LessonId:', lessonId, 'Score:', score, 'Timer:', timer);
        console.log('Calling compliteLesson with index:', lessonId-1);
        if (score >= 5 && timer >= 0) {
            compliteLesson(lessonId-1);
            console.log('Quiz completed! Should update progress.');
            setShowWinScreen(true);
        } else {
            setShowLoseScreen(true);
        }
    }





  return (
    <div className='bg-linear-to-br from-blue-50 to-green-50 w-[90vw] max-w-4xl p-6 mt-8 mx-auto rounded-3xl border-2 border-green-300 shadow-xl'>
        <div className="text-center mb-8">
           
            <h1  className='text-4xl font-bold text-green-700 mb-2'>
                🌟 Quiz Time! 🌟 
            </h1>
            <p className="text-lg text-gray-600">Test your recycling knowledge!</p>
        </div>
        
        <div className="flex flex-col items-center mb-6">
            <div className={`text-3xl font-bold ${timerColor} mb-2`}>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${progressColor}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">
                Time Remaining and the scour is {correctCount}
            </div>
        </div>

        <div className="space-y-6">
            {quizData[lessonId].questions.map((question: QuizQuestion) => (
                <div 
                    className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 hover:shadow-xl transition-shadow duration-300"
                    key={question.id}
                >
                    <div className="flex items-center mb-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Question {question.id}
                        </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
                        {question.question}
                    </h2>
                    
                    <div className="grid gap-3">
                        {question.options.map((opt) => (
                            <div 
                                key={opt.id}
                                className={getOptionStyle(question.id, opt.id)}
                                onClick={() => handleAnswer(question.id , opt.id) }
                                
                            >
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                    {String.fromCharCode(64 + opt.id)}
                                </span>
                                <span className="text-gray-700">{opt.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-8 pt-6 border-t border-green-200">
            <button onClick={() => handleSubmit()} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                Submit Answers 🚀
            </button>
        </div>
        <div>
            {showWinScreen && <WinQ onRestart={handleRestart} correctCount={correctCount} />}
            {showLoseScreen && <LoseQ onRestart={handleRestart} correctCount={correctCount} />}
        </div>
    </div>
  )
}

export default QuizComp