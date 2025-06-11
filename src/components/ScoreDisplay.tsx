import React from "react";

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  totalQuestions,
}) => {
  return (
    <div className="fixed top-4 right-4 bg-purple-800/80 rounded-lg p-4 border border-purple-400">
      <div className="text-center">
        <div className="text-purple-200 text-sm font-medium">Счёт</div>
        <div className="text-white text-xl font-bold">
          {score} / {totalQuestions}
        </div>
        <div className="text-purple-300 text-xs">
          {totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0}%
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
