import Laila from "../Component/HomePageC/Laila";
import useProgress from "../Hooks/Progress";


const Achievements = () => {
    const { progress } = useProgress();
    const { lessonsCompleted , gamesFinished , badgesEarned } = progress;
    const bg = () => {
        if (lessonsCompleted === 4 && gamesFinished === 4) {
            return 1;
        }
        return 0;
    };
    const bl = () => {
        if (lessonsCompleted === 4) {
            return 1;
        }
        return 0;
    };
    const TotalbadgesEarned = badgesEarned.game + badgesEarned.lesson + bl() + bg();
    return (
        <div className="min-h-screen bg-linear-to-br from-green-300 to-blue-300 p-6">
            <Laila
                title=" Here are your Achievements! 🎉"
                text=" Track your recycling journey and collect amazing badges!"
                lailaImage="../../../public/LailaTr.png"
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
                        <p className="text-2xl font-bold text-green-600">{lessonsCompleted}/4</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="text-3xl mb-2">🎮</div>
                        <h3 className="text-xl font-bold text-gray-800">Games Finished</h3>
                        <p className="text-2xl font-bold text-blue-600">{gamesFinished}/4</p>
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
                        
                        <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg border-2 border-purple-200 text-center">
                            <div className="text-5xl mb-4">
                                <img src="../../public/Badges/hero.png" alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Adventure Master</h3>
                            <p className="text-gray-600 mb-4">Complete all 4 game levels</p>
                            <div className="bg-gray-200 rounded-full h-3">
                                <div className="bg-purple-500 h-3 rounded-full" style={{width: `${gamesFinished * 25}%`}}></div>
                            </div>
                            <p className="text-sm text-purple-600 mt-2">{gamesFinished}/4 levels completed</p>
                        </div>

                        
                        <div className="bg-linear-to-br from-green-100 to-blue-100 rounded-2xl p-6 shadow-lg border-2 border-green-200 text-center">
                            <div className="text-5xl mb-4">
                                <img src="../../public/Badges/mhmd.png" alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Wisdom Keeper</h3>
                            <p className="text-gray-600 mb-4">Finish all 4 lessons</p>
                            <div className="bg-gray-200 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full" style={{width: `${lessonsCompleted * 25}%`}}></div>
                            </div>
                            <p className="text-sm text-green-600 mt-2">{lessonsCompleted}/4 lessons completed</p>
                        </div>

                        
                        <div className="bg-linear-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-lg border-2 border-yellow-200 text-center">
                            <div className="text-5xl mb-4">
                                <img src="../../public/Badges/laila.png" alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Super Eco Hero</h3>
                            <p className="text-gray-600 mb-4">Complete everything in the app</p>
                            <div className="bg-gray-200 rounded-full h-3">
                                <div className="bg-yellow-500 h-3 rounded-full" style={{width: `${TotalbadgesEarned * 25}%`}}></div>
                            </div>
                            <p className="text-sm text-yellow-600 mt-2">Keep going!</p>
                        </div>
                    </div>
                </div>

                
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Lesson Badges 📖
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-300 text-center">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/lesson1.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Recycling Magician</h3>
                            <p className="text-sm text-gray-600 mb-3">Complete Lesson 1</p>
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Earned</span>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-300 text-center">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/lesson2.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Bin Sorting Hero</h3>
                            <p className="text-sm text-gray-600 mb-3">Complete Lesson 2</p>
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Earned</span>
                        </div>

                        
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-2 border-gray-300 text-center opacity-60">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/lesson3.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 mb-2">Kitchen Eco Chef</h3>
                            <p className="text-sm text-gray-500 mb-3">Complete Lesson 3</p>
                            <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Locked</span>
                        </div>

                        
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-2 border-gray-300 text-center opacity-60">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/lesson4.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 mb-2">Eco Detective</h3>
                            <p className="text-sm text-gray-500 mb-3">Complete Lesson 4</p>
                            <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Locked</span>
                        </div>
                    </div>
                </div>

                
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Game Level Badges 🎯
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-yellow-300 text-center">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/level1.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Kitchen Master</h3>
                            <p className="text-sm text-gray-600 mb-3">Finish Kitchen Level</p>
                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Earned</span>
                        </div>

                        
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-2 border-gray-300 text-center opacity-60">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/level2.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 mb-2">School Scholar</h3>
                            <p className="text-sm text-gray-500 mb-3">Finish School Level</p>
                            <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Locked</span>
                        </div>

                        
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-2 border-gray-300 text-center opacity-60">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/level3.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 mb-2">Park Guardian</h3>
                            <p className="text-sm text-gray-500 mb-3">Finish Park Level</p>
                            <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Locked</span>
                        </div>

                     
                        <div className="bg-gray-100 rounded-xl p-6 shadow-md border-2 border-gray-300 text-center opacity-60">
                            <div className="text-4xl mb-3">
                                <img src="../../public/Badges/level4.png" alt="" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-500 mb-2">City Hero</h3>
                            <p className="text-sm text-gray-500 mb-3">Finish City Level</p>
                            <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Locked</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Achievements;