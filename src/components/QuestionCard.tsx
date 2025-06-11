import React from "react";

interface QuestionCardProps {
  question: string;
  onAnswer: (answer: boolean) => void;
  isVisible: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="bg-gray-800/90 rounded-xl p-8 border-2 border-red-500 shadow-2xl animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">{question}</h2>

        <div className="flex justify-center space-x-6">
          <button
            onClick={() => onAnswer(true)}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg
                     border-2 border-green-400"
          >
            ✅ ДА
          </button>

          <button
            onClick={() => onAnswer(false)}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg
                     border-2 border-red-400"
          >
            ❌ НЕТ
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
