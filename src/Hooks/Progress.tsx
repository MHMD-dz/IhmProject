import { useState , useEffect } from "react";


export interface Progress {
    lessonsCompleted: boolean[] ;
    gamesFinished: boolean[];
    
}

export const useProgress = () => {

    const [progress, setProgress] = useState<Progress>(() => {
        const sevedProgress = localStorage.getItem('recyclingAppProgress');
        if (sevedProgress) {
            return JSON.parse(sevedProgress);
        } else {
            return {
                lessonsCompleted: [true, false, false, false],
                gamesFinished: [true, false, false, false]
            }
        }
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
        console.log('compliteLesson called with lessonId:', lessonId);
        setProgress( prev => {
            console.log('Previous progress:', prev);
            const newProgress = [...prev.lessonsCompleted];
            newProgress[lessonId] = true;
            console.log('New lessonsCompleted array:', newProgress);
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
    const resetProgress = () => {
        const initialProgress = {
        lessonsCompleted: [false, false, false, false],
        gamesFinished: [false, false, false, false],
        };
        setProgress(initialProgress);
        localStorage.removeItem('recyclingAppProgress'); 
  };



  return {
     progress , compliteLesson , finishGame , resetProgress
    }
  
}

export default useProgress