import React, { type ReactNode } from 'react';
import { lessonsData } from '../../DataBase/DB';

interface LessonPageProps {
  LessonId: number;
}

interface LessonPart {
  id: number;
  title: string;
  content: ReactNode;
  image: string;
  imagePosition?: 'left' | 'right';
}

const LessonPage: React.FC<LessonPageProps> = ({ LessonId }) => {
  const lesson = lessonsData[LessonId - 1].Lessons; ;


  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Lesson not found</h1>
          <p className="text-gray-600">Lesson {LessonId - 1} doesn't exist.</p>
        </div>
      </div>
    );
  }

  const LessonPart = ({ part }: { part: LessonPart }) => {
    if (part.id % 2 === 0) {
      return (
        <div className="flex bg-blue-50 flex-col md:flex-row items-center justify-between min-h-[10vh] my-5 py-8 rounded-2xl border-2 border-blue-100  ">

          <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
            <div className="text-8xl md:text-9xl bg-blue-100 hover:bg-blue-200 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:scale-104">
              <img src={part.image} alt="explaining imag" />
            </div>
          </div>


          <div className="flex-1 flex flex-col justify-center p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {part.title}
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line">
              {part.content}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex shadow-[] bg-blue-50 flex-col md:flex-row items-center justify-between min-h-[10vh] my-5 py-8 rounded-2xl border-2 border-blue-100 ">

          <div className="flex-1 flex flex-col justify-center p-4 md:p-8 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {part.title}
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line">
              {part.content}
            </div>
          </div>


          <div className="flex-1 flex justify-center items-center mb-6 md:mb-0 order-1 md:order-2">
            <div className="text-8xl md:text-9xl hover:bg-blue-200 bg-blue-100 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:scale-104 ">
              <img src={part.image} alt="explaining imag" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen p-3  ">
      

      <div className=" w-[70vw]  mx-auto mt-6">
        {lesson.map((part) => (
            <LessonPart key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default LessonPage;