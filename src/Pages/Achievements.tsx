import BadgeCard from "../Component/AchievementsC/Badg";
import HeroBadg from "../Component/AchievementsC/HeroBadg";
import Laila from "../Component/HomePageC/Laila";
import { useContext } from "react";
import { ProgressContext } from "../Hooks/PrgContext";


const Achievements = () => {
    const { progress } = useContext(ProgressContext);
    const { lessonsCompleted , gamesFinished } = progress;
    const allGameDone = gamesFinished.map((game) => game).every(Boolean);
    const allLessonsDone = lessonsCompleted.map((lesson) => lesson).every(Boolean);
    const NumberOfGameDone = gamesFinished.filter((game) => game).length;
    const NumberOfLessonsDone = lessonsCompleted.filter((lesson) => (lesson)).length; 
    
    const bg = () => {
        if ( allGameDone  ) {
            return 1;
        }
        return 0;
    };
    const bl = () => {
        if (allLessonsDone) {
            return 1;
        }
        return 0;
    };

    const badgesEarned = {
        game: gamesFinished.filter((game) => game).length,
        lesson: lessonsCompleted.filter((lesson) => lesson).length,
    };

    const allDone = () => {
        if(bg() && bl()) {
            return 1 ;
        }
        return 0 ;
    };



    const TotalbadgesEarned = badgesEarned.game + badgesEarned.lesson + bl() + bg() + allDone();
    return (
        <div className="min-h-screen bg-linear-to-br from-green-300 to-blue-300 p-6">
            <Laila
                title=" Here are your Achievements! 🎉"
                text=" Track your recycling journey and collect amazing badges!"
                lailaImage="Laila/LailaTr.png"
            />
            <div className="max-w-6xl mt-7 mx-auto">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        My Achievements 🏆
                    </h1>
                    <p className="text-lg text-gray-600">
                        Track your recycling journey and collect amazing badges!
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="text-3xl mb-2">📚</div>
                        <h3 className="text-xl font-bold text-gray-800">Lessons Completed</h3>
                        <p className="text-2xl font-bold text-green-600">{NumberOfLessonsDone}/4</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="text-3xl mb-2">🎮</div>
                        <h3 className="text-xl font-bold text-gray-800">Games Finished</h3>
                        <p className="text-2xl font-bold text-blue-600">{NumberOfGameDone}/4</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="text-3xl mb-2">⭐</div>
                        <h3 className="text-xl font-bold text-gray-800">Total Badges</h3>
                        <p className="text-2xl font-bold text-yellow-600">
                            {TotalbadgesEarned}/11</p>
                    </div>
                </div>

                
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Hero Badges 🌟
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <HeroBadg
                            image="../../public/Badges/hero.png"
                            title="Adventure Master"
                            description="Complete all 4 game levels"
                            progressBar={NumberOfGameDone}
                            bg="bg-linear-to-br from-purple-100 to-pink-100"
                            borderColor="border-purple-200"
                            progressBarColor="bg-purple-500"
                            note={`${NumberOfGameDone}/4 levels completed`}
                            noteColor="text-purple-600"
                        />

        
                        <HeroBadg
                            image="../../public/Badges/mhmd.png"
                            title="Wisdom Keeper"
                            description="Finish all 4 lessons"
                            progressBar={NumberOfLessonsDone}
                            bg="bg-linear-to-br from-green-100 to-blue-100"
                            borderColor="border-green-200"
                            progressBarColor="bg-green-500"
                            note={`${NumberOfLessonsDone}/4 lessons completed`}
                            noteColor="text-green-600"
                        />
                        <HeroBadg
                            image="../../public/Badges/laila.png"
                            title="Super Eco Hero"
                            description="Complete everything in the app"
                            progressBar={TotalbadgesEarned/2.75}
                            bg="bg-linear-to-br from-yellow-100 to-orange-100"
                            borderColor="border-yellow-200"
                            progressBarColor="bg-yellow-500"
                            note="Keep going!"
                            noteColor="text-yellow-600"
                        />
                    </div>
                </div>

                
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Lesson Badges 📖
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {<BadgeCard
                            image="../../public/Badges/lesson1.png"
                            title="Recycling Magician"
                            description="Complete Lesson 1"
                            earned={lessonsCompleted[0]}
                            borderColor="border-green-200"
                        />}

                        <BadgeCard
                            image="../../public/Badges/lesson2.png"
                            title="Bin Sorting Hero"
                            description="Complete Lesson 2"
                            earned={lessonsCompleted[1]}
                            borderColor="border-blue-300"
                        />

                        <BadgeCard
                            image="../../public/Badges/lesson3.png"
                            title="Kitchen Eco Chef"
                            description="Complete Lesson 3"
                            earned={lessonsCompleted[2]}
                            borderColor="border-yellow-300"
                        />

                        <BadgeCard
                            image="../../public/Badges/lesson4.png"
                            title="Eco Detective"
                            description="Complete Lesson 4"
                            earned={lessonsCompleted[3]}
                            borderColor="border-green-400"
                        />

                    </div>
                </div>

                
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Game Level Badges 🎯
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <BadgeCard
                            image="../../public/Badges/level1.png"
                            title="Kitchen Master"
                            description="Finish Kitchen Level"
                            earned={gamesFinished[0]}
                            borderColor="border-yellow-300"
                        />
                        <BadgeCard
                            image="../../public/Badges/level2.png"
                            title="School Scholar"
                            description="Finish School Level"
                            earned={gamesFinished[1]}
                            borderColor="border-blue-300"
                        />

                        
                        <BadgeCard
                            image="../../public/Badges/level3.png"
                            title="Park Guardian"
                            description="Finish Park Level"
                            earned={gamesFinished[2]}
                            borderColor="border-green-300"
                        />

                        
                        <BadgeCard
                            image="../../public/Badges/level4.png"
                            title="City Hero"
                            description="Finish City Level"
                            earned={gamesFinished[3]}
                            borderColor="border-red-300"
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Achievements;