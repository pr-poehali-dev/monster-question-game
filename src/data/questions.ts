export interface Question {
  text: string;
  expectedAnswer?: boolean; // для подсчета "правильных" ответов
}

export const monsterQuestions: Question[] = [
  { text: "Ты боишься темноты?", expectedAnswer: true },
  { text: "Любишь смотреть фильмы ужасов?", expectedAnswer: false },
  { text: "Веришь в привидений?", expectedAnswer: false },
  { text: "Ты когда-нибудь видел НЛО?", expectedAnswer: false },
  { text: "Умеешь плавать?", expectedAnswer: true },
  { text: "Ты любишь пиццу?", expectedAnswer: true },
  { text: "Боишься пауков?", expectedAnswer: true },
  { text: "Умеешь водить машину?", expectedAnswer: true },
  { text: "Веришь в магию?", expectedAnswer: false },
  { text: "Любишь дождь?", expectedAnswer: false },
  { text: "Ты когда-нибудь летал на самолете?", expectedAnswer: true },
  { text: "Боишься высоты?", expectedAnswer: true },
  { text: "Умеешь готовить?", expectedAnswer: true },
  { text: "Веришь в судьбу?", expectedAnswer: false },
  { text: "Любишь зиму больше лета?", expectedAnswer: false },
  { text: "Ты жаворонок?", expectedAnswer: false },
  { text: "Боишься змей?", expectedAnswer: true },
  { text: "Умеешь играть на музыкальном инструменте?", expectedAnswer: false },
  { text: "Веришь в вампиров?", expectedAnswer: false },
  { text: "Любишь острую еду?", expectedAnswer: false },
];

export const getRandomQuestion = (
  excludeIndices: number[] = [],
): { question: Question; index: number } => {
  const availableQuestions = monsterQuestions
    .map((q, index) => ({ question: q, index }))
    .filter((item) => !excludeIndices.includes(item.index));

  if (availableQuestions.length === 0) {
    return {
      question: { text: "Хочешь начать заново?", expectedAnswer: true },
      index: -1,
    };
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
};
