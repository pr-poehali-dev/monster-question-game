import React, { useState, useEffect } from "react";
import MonsterCharacter from "@/components/MonsterCharacter";
import QuestionCard from "@/components/QuestionCard";
import ScoreDisplay from "@/components/ScoreDisplay";
import { getRandomQuestion, Question } from "@/data/questions";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [monsterMood, setMonsterMood] = useState<
    "neutral" | "happy" | "angry" | "thinking"
  >("neutral");
  const [isAsking, setIsAsking] = useState(false);
  const [usedQuestionIndices, setUsedQuestionIndices] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);

  const loadNewQuestion = () => {
    setMonsterMood("thinking");
    setIsAsking(false);

    setTimeout(() => {
      const { question, index } = getRandomQuestion(usedQuestionIndices);
      setCurrentQuestion(question);
      setUsedQuestionIndices((prev) => [...prev, index]);
      setMonsterMood("neutral");
      setIsAsking(true);
    }, 1500);
  };

  const handleAnswer = (userAnswer: boolean) => {
    setTotalQuestions((prev) => prev + 1);

    // Проверяем "правильность" ответа (это субъективно, но создает игровой элемент)
    const isCorrect = currentQuestion?.expectedAnswer === userAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setMonsterMood("happy");
    } else {
      setMonsterMood("angry");
    }

    setIsAsking(false);

    // Загружаем новый вопрос через 2 секунды
    setTimeout(() => {
      loadNewQuestion();
    }, 2000);
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTotalQuestions(0);
    setUsedQuestionIndices([]);
    loadNewQuestion();
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestion(null);
    setScore(0);
    setTotalQuestions(0);
    setUsedQuestionIndices([]);
    setMonsterMood("neutral");
    setIsAsking(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      {/* Фоновые эффекты */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <ScoreDisplay score={score} totalQuestions={totalQuestions} />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
            👹 Монстр-Загадочник 👹
          </h1>
          <p className="text-xl text-purple-200">
            Отвечай честно на вопросы таинственного монстра!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <MonsterCharacter mood={monsterMood} isAsking={isAsking} />

          {!gameStarted ? (
            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg text-xl
                         border-2 border-purple-400"
              >
                🎮 Начать Игру
              </button>
            </div>
          ) : (
            <>
              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion.text}
                  onAnswer={handleAnswer}
                  isVisible={isAsking}
                />
              )}

              <div className="text-center">
                <button
                  onClick={resetGame}
                  className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg 
                           transition-all duration-300 hover:scale-105 text-sm
                           border border-gray-400"
                >
                  🔄 Новая Игра
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
