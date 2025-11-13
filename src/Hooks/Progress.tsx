import { useState , useEffect } from "react";


export interface Progress {
    lessonsCompleted: number;
    gamesFinished: number;
    badgesEarned: {
        lesson: number;
        game: number;
        lessons: boolean;
        games: boolean;   
    };
}

export const useProgress = () => {

    const [progress, setProgress] = useState<Progress>({
        lessonsCompleted: 0,
        gamesFinished: 0,
        badgesEarned: {
            lesson: 0,
            game: 0,
            lessons: false,
            games: false,
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


    const compliteLesson = () => {
        setProgress( prev => ({ ...prev , lessonsCompleted: prev.lessonsCompleted + 1  , 
            badgesEarned: {...prev.badgesEarned , lesson : prev.badgesEarned.lesson + 1 }
        })  )
    }

    const finishGame = () => {
        setProgress( prev => ({ ...prev , gamesFinished: prev.gamesFinished + 1  , 
            badgesEarned: {...prev.badgesEarned , game : prev.badgesEarned.game + 1 }
        })  )
    }



  return {
     progress , compliteLesson , finishGame 
    }
  
}

export default useProgress