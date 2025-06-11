import React from "react";

interface MonsterCharacterProps {
  mood: "neutral" | "happy" | "angry" | "thinking";
  isAsking: boolean;
}

const MonsterCharacter: React.FC<MonsterCharacterProps> = ({
  mood,
  isAsking,
}) => {
  const getMonsterEmoji = () => {
    switch (mood) {
      case "happy":
        return "😈";
      case "angry":
        return "👹";
      case "thinking":
        return "🤔";
      default:
        return "👻";
    }
  };

  const getMoodText = () => {
    switch (mood) {
      case "happy":
        return "Хорошо! Продолжаем...";
      case "angry":
        return "Хм, интересно...";
      case "thinking":
        return "Думаю над следующим вопросом...";
      default:
        return "Готов к игре?";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`text-8xl transition-all duration-500 ${
          isAsking ? "animate-bounce" : ""
        } ${mood === "angry" ? "animate-pulse" : ""}`}
      >
        {getMonsterEmoji()}
      </div>

      <div className="bg-purple-900/50 rounded-lg p-4 border-2 border-purple-500">
        <p className="text-purple-200 text-center font-medium">
          {getMoodText()}
        </p>
      </div>
    </div>
  );
};

export default MonsterCharacter;
