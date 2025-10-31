import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Question {
  id: number;
  question: string;
  options: { text: string; points: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Как вы себя чувствуете в воде?',
    options: [
      { text: 'Боюсь воды, испытываю панику', points: 0 },
      { text: 'Немного нервничаю, но могу войти в воду', points: 1 },
      { text: 'Чувствую себя уверенно на мелкой воде', points: 2 },
      { text: 'Полностью комфортно на любой глубине', points: 3 },
    ],
  },
  {
    id: 2,
    question: 'Можете ли вы держаться на воде?',
    options: [
      { text: 'Нет, сразу иду ко дну', points: 0 },
      { text: 'Могу держаться с поддержкой или бортиком', points: 1 },
      { text: 'Могу держаться на воде несколько секунд', points: 2 },
      { text: 'Легко держусь на воде длительное время', points: 3 },
    ],
  },
  {
    id: 3,
    question: 'Умеете ли вы нырять и опускать голову под воду?',
    options: [
      { text: 'Нет, боюсь опускать лицо в воду', points: 0 },
      { text: 'Могу опустить лицо на пару секунд', points: 1 },
      { text: 'Могу нырять и открывать глаза под водой', points: 2 },
      { text: 'Ныряю свободно и плаваю под водой', points: 3 },
    ],
  },
  {
    id: 4,
    question: 'Какую дистанцию вы можете проплыть?',
    options: [
      { text: 'Не умею плавать совсем', points: 0 },
      { text: 'Могу проплыть несколько метров', points: 1 },
      { text: 'Проплываю 25 метров (длина бассейна)', points: 2 },
      { text: 'Легко проплываю 50+ метров', points: 3 },
    ],
  },
  {
    id: 5,
    question: 'Владеете ли вы техникой плавания?',
    options: [
      { text: 'Не знаю никаких техник', points: 0 },
      { text: 'Плаваю "по-собачьи" или как получится', points: 1 },
      { text: 'Знаю один стиль (кроль или брасс)', points: 2 },
      { text: 'Владею несколькими стилями плавания', points: 3 },
    ],
  },
];

const levelResults = [
  {
    level: 'Новичок',
    minPoints: 0,
    maxPoints: 4,
    color: 'bg-red-500',
    icon: 'Baby',
    description: 'Вы только начинаете свой путь в плавании',
    recommendation: 'Рекомендуем начать с базового курса преодоления страха воды и освоения основ',
    program: 'Программа "Первые шаги": 12 занятий',
    benefits: [
      'Преодоление страха воды',
      'Обучение держаться на воде',
      'Правильное дыхание',
      'Базовые движения',
    ],
  },
  {
    level: 'Начинающий',
    minPoints: 5,
    maxPoints: 8,
    color: 'bg-orange-500',
    icon: 'Users',
    description: 'У вас есть базовые навыки, но требуется развитие техники',
    recommendation: 'Рекомендуем курс постановки правильной техники и увеличения выносливости',
    program: 'Программа "Техника": 10 занятий',
    benefits: [
      'Постановка правильной техники кроля',
      'Улучшение координации движений',
      'Увеличение дистанции',
      'Развитие выносливости',
    ],
  },
  {
    level: 'Средний',
    minPoints: 9,
    maxPoints: 12,
    color: 'bg-blue-500',
    icon: 'Award',
    description: 'Вы уверенно держитесь на воде и владеете базовой техникой',
    recommendation: 'Рекомендуем курс совершенствования техники и изучения новых стилей',
    program: 'Программа "Мастерство": 8 занятий',
    benefits: [
      'Изучение всех стилей плавания',
      'Совершенствование техники',
      'Увеличение скорости',
      'Подготовка к соревнованиям',
    ],
  },
  {
    level: 'Продвинутый',
    minPoints: 13,
    maxPoints: 15,
    color: 'bg-green-500',
    icon: 'Trophy',
    description: 'Вы опытный пловец с отличной техникой',
    recommendation: 'Рекомендуем индивидуальные тренировки для достижения спортивных результатов',
    program: 'Программа "Чемпион": индивидуальный план',
    benefits: [
      'Спортивная подготовка',
      'Работа над скоростью и выносливостью',
      'Подготовка к соревнованиям',
      'Индивидуальный план тренировок',
    ],
  },
];

export default function SwimLevelTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalPoints = answers.reduce((sum, points) => sum + points, 0);
  const result = levelResults.find(
    (r) => totalPoints >= r.minPoints && totalPoints <= r.maxPoints
  );

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!isOpen) {
    return (
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all">
        <CardContent className="p-8 md:p-10 text-center">
          <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Узнайте свой уровень плавания за 1 минуту!
          </h3>
          <p className="text-foreground/70 mb-6 text-lg">
            Пройдите короткий тест из 5 вопросов и получите персональную программу обучения
          </p>
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg shadow-lg hover:scale-105 transition-all"
          >
            <Icon name="FileQuestion" className="mr-2" size={20} />
            Пройти тест и получить программу!
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto shadow-2xl border-2 border-primary/30">
      <CardContent className="p-8 md:p-10">
        {!showResult ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-primary">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/60 hover:text-foreground"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    variant="outline"
                    className="w-full p-6 text-left justify-start hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 border-2 text-base"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {currentQuestion > 0 && (
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setAnswers(answers.slice(0, -1));
                }}
                className="text-foreground/60 hover:text-foreground"
              >
                <Icon name="ChevronLeft" className="mr-2" size={20} />
                Назад
              </Button>
            )}
          </>
        ) : (
          result && (
            <>
              <div className="text-center mb-8">
                <div className={`inline-block p-4 rounded-full ${result.color} mb-4`}>
                  <Icon name={result.icon} size={64} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  Ваш уровень: {result.level}
                </h3>
                <p className="text-lg text-foreground/70 mb-4">{result.description}</p>
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
                  <span className="font-bold text-primary">
                    Набрано баллов: {totalPoints} из {questions.length * 3}
                  </span>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-primary flex items-center gap-2">
                    <Icon name="Target" size={24} />
                    Рекомендация
                  </h4>
                  <p className="text-foreground/80 mb-4">{result.recommendation}</p>
                  <Badge className="text-base px-4 py-2 bg-primary text-white">
                    {result.program}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-primary/10 mb-6">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                    <Icon name="Sparkles" size={24} />
                    Что вас ждет
                  </h4>
                  <div className="space-y-2">
                    {result.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all py-6 text-lg"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Записаться на занятие
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetTest}
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg"
                >
                  <Icon name="RotateCcw" className="mr-2" size={20} />
                  Пройти ещё раз
                </Button>
              </div>
            </>
          )
        )}
      </CardContent>
    </Card>
  );
}
