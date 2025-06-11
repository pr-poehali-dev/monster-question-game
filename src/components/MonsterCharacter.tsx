import React from "react";

interface MonsterCharacterProps {
  mood: "neutral" | "happy" | "angry" | "thinking" | "screaming";
  isAsking: boolean;
  onScream?: () => void;
}

const MonsterCharacter: React.FC<MonsterCharacterProps> = ({
  mood,
  isAsking,
  onScream,
}) => {
  const getMonsterEmoji = () => {
    switch (mood) {
      case "happy":
        return "😈";
      case "angry":
        return "👹";
      case "thinking":
        return "🤔";
      case "screaming":
        return "👺";
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
      case "screaming":
        return "РРРААААА!!! 👻👺";
      default:
        return "Готов к игре?";
    }
  };

  const scream = () => {
    if (onScream) {
      onScream();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`text-8xl transition-all duration-500 ${
          isAsking ? "animate-bounce" : ""
        } ${mood === "angry" ? "animate-pulse" : ""} ${
          mood === "screaming"
            ? "animate-pulse text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-[pulse_0.3s_ease-in-out_infinite]"
            : ""
        }`}
        style={{
          animation:
            mood === "screaming"
              ? "shake 0.5s ease-in-out infinite"
              : undefined,
        }}
        onClick={mood === "screaming" ? scream : undefined}
      >
        {getMonsterEmoji()}
      </div>

      {onScream && (
        <button
          onClick={onScream}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-lg 
                   transition-all duration-300 hover:scale-105 hover:shadow-lg
                   border-2 border-red-400 mb-4"
        >
          👺 КРИК
        </button>
      )}

      <div
        className={`bg-purple-900/50 rounded-lg p-4 border-2 border-purple-500 ${
          mood === "screaming"
            ? "border-red-500 bg-red-900/50 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            : ""
        }`}
      >
        <p
          className={`text-center font-medium ${
            mood === "screaming" ? "text-red-200 font-bold" : "text-purple-200"
          }`}
        >
          {getMoodText()}
        </p>
      </div>
    </div>
  );
};

export default MonsterCharacter;
