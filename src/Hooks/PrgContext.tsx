import { createContext } from "react";
import { type Progress , useProgress} from "./Progress";


interface ProgressContextType {
    progress: Progress;
    compliteLesson: (lessonId: number) => void;
    finishGame: (levelId: number) => void;
    resetProgress: () => void;
}


export const ProgressContext = createContext<ProgressContextType>({
    progress: {
        lessonsCompleted: [false, false, false, false],
        gamesFinished: [false, false, false, false]
    } , 
    compliteLesson: () => {} , 
    finishGame: () => {} ,
    resetProgress: () => {}
});


const ProgressContextProvider = ({children} : {children: React.ReactNode}) => {
    const { progress , compliteLesson , finishGame , resetProgress } = useProgress();
    return (
        <ProgressContext.Provider value={{ progress , compliteLesson , finishGame , resetProgress}}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContextProvider;
