import { useState , useEffect } from "react";


export interface Progress {
    lessonsCompleted: boolean[] ;
    gamesFinished: boolean[];
    
}

export const useProgress = () => {

    const [progress, setProgress] = useState<Progress>({
        lessonsCompleted: [true , true , true , false] ,
        gamesFinished: [true , true , false , true]
        
    })

    useEffect(() => {
        const savedProgress = localStorage.getItem('recyclingAppProgress');
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recyclingAppProgress', JSON.stringify(progress));
    }, [progress]);


    const compliteLesson = (lessonId: number) => {
        setProgress( prev => {
            const newProgress = [...prev.lessonsCompleted];
            newProgress[lessonId] = true;
            return { ...prev , lessonsCompleted: newProgress };
        } )
    }

    const finishGame = (levelId: number) => {
        setProgress( prev => {
            const newProgress = [ ...prev.gamesFinished];
            newProgress[levelId] = true;
            return { ...prev , gamesFinished: newProgress };
        })
    }



  return {
     progress , compliteLesson , finishGame 
    }
  
}

export default useProgress