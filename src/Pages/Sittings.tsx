import { useContext } from "react";
import {ProgressContext} from "../Hooks/PrgContext";
const SettingsPage = () => {
    const { resetProgress } = useContext(ProgressContext);
    return (
        <div className="min-h-screen bg-linear-to-br from-green-300 to-blue-300 p-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
                
                
                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Sound</h2>
                    
                        <div className="flex justify-between items-center">
                            <span>Background Music</span>
                            <input type="checkbox" defaultChecked className="toggle" />
                        </div>
                        
                    
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <h2 className="text-xl font-bold text-red-600 mb-4">Reset</h2>
                    <button
                        onClick={() => {
                        if (window.confirm("Are you sure you want to reset your progress?")) {
                            resetProgress();
                        }
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Reset Progress
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;