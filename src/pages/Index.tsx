import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SwimLevelTest from '@/components/SwimLevelTest';

const Index = () => {
  const [selectedAudience, setSelectedAudience] = useState<'kids' | 'adults' | 'individual'>('kids');

  const prices = {
    kids: [
      { name: 'Старт', sessions: 4, price: 4200, perSession: 1050, savings: null, popular: false },
      { name: 'Прогресс', sessions: 8, price: 7800, perSession: 975, savings: 600, popular: false },
      { name: 'Мастер', sessions: 12, price: 9900, perSession: 825, savings: 2700, popular: true },
    ],
    adults: [
      { name: 'Старт', sessions: 4, price: 4500, perSession: 1125, savings: null, popular: false },
      { name: 'Прогресс', sessions: 8, price: 8400, perSession: 1050, savings: 600, popular: false },
      { name: 'Мастер', sessions: 12, price: 10800, perSession: 900, savings: 2700, popular: true },
    ],
    individual: [
      { name: 'Пробное', sessions: 1, price: 2500, perSession: 2500, savings: null, popular: false },
      { name: 'Базовый', sessions: 4, price: 9000, perSession: 2250, savings: 1000, popular: false },
      { name: 'Интенсив', sessions: 8, price: 16000, perSession: 2000, savings: 4000, popular: true },
    ],
  };



  const pools = [
    {
      name: 'Спортивный комплекс "Яуза"',
      address: 'Олонецкий пр., 5, Москва',
      features: '25-метровый бассейн, финская сауна',
      coordinates: { lat: 55.8444, lng: 37.6604 },
    },
    {
      name: 'Голден Фитнесс',
      address: 'Староватутинский пр., 14, Москва',
      features: 'Детский бассейн, персональные занятия',
      coordinates: { lat: 55.6189, lng: 37.5989 },
    },
    {
      name: 'НИУ МГСУ Бассейн',
      address: 'Ярославское ш., 26, стр. 4, Москва',
      features: 'Олимпийский бассейн, группы для спортсменов',
      coordinates: { lat: 55.8507, lng: 37.6757 },
    },
  ];

  const reviews = [
    {
      text: 'Дочь боялась воды, но после 5 занятий с Антоном Владиславовичем она не только плавает, но и ныряет! Это чудо! Спасибо, Swim Family!',
      author: 'Екатерина',
      role: 'мама 7-летней Алисы',
    },
    {
      text: 'Я всю жизнь боялся глубины. Думал, это навсегда. Но в Swim Family мне помогли преодолеть страх и научили плавать правильно. Теперь бассейн — мое любимое место для отдыха!',
      author: 'Дмитрий',
      role: 'ученик группы для взрослых',
    },
    {
      text: 'Сын занимается уже полгода. Результаты превзошли все ожидания! Он не только научился плавать, но и начал участвовать в соревнованиях. Спасибо тренерам за профессионализм!',
      author: 'Марина',
      role: 'мама 10-летнего Максима',
    },
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/2b714740-d40e-4ef4-b8ae-4db5d5a39d93/files/b4a07ed4-f3f3-4861-97e1-a969684f7524.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-background/95" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/fc0fad9a-d15c-4f05-82d5-781513eeb086.jpg" 
              alt="Swim Family Logo" 
              className="h-24 md:h-32 mx-auto mb-8 drop-shadow-2xl"
            />
          </div>

          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl hover:animate-water-ripple transition-all duration-300 cursor-default leading-tight">
              Школа плавания Swim Family - больше, чем просто уроки плавания
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/95 font-semibold drop-shadow-lg max-w-4xl mx-auto">
              От полного новичка до уверенного пловца всего за 10 занятий по нашей авторской методике. Гарантия результата!
            </h2>
            
            <Badge className="mb-6 text-base md:text-lg px-6 py-3 bg-white/95 text-primary hover:bg-white shadow-xl">
              <Icon name="Award" className="mr-2" size={20} />
              Помогли 450+ ученикам за 6 лет!
            </Badge>
            
            <div className="mb-8 overflow-hidden py-2">
              <div className="inline-block bg-gradient-to-r from-destructive via-orange-500 to-destructive text-white px-8 py-3 text-base md:text-lg font-bold animate-marquee-slow whitespace-nowrap shadow-xl rounded-full">
                ИДЕТ НАБОР НА НОЯБРЬ
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-gradient-to-r from-orange-500 to-destructive text-white hover:scale-110 transition-all duration-300 shadow-2xl group relative overflow-hidden font-bold"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Хочу%20записаться%20на%20пробную%20тренировку%20со%20скидкой%2050%25">
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name="Waves" size={24} />
                  ЗАПИСАТЬСЯ НА ПРОБНУЮ ТРЕНИРОВКУ СО СКИДКОЙ 50%
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 animate-ripple-wave bg-white/20 rounded-lg" />
                </span>
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDk2YzciIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Плаваем на результат и удовольствие от процесса!
          </h2>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80 leading-relaxed">
            В Swim Family каждый урок — это погружение в мир заботы и безопасности.
          </p>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/90 leading-relaxed">
            Мы понимаем, что вода может пугать, но наша уникальная <span className="font-bold text-primary">Авторская Методика</span> превращает этот страх в истинное удовольствие и уверенность.
          </p>
          
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto font-semibold text-primary">
            С первого занятия по нашей собственной методике мы поможем вам:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: 'Smile',
                title: 'Разрушить барьер страха',
                description: 'Адаптируетесь к водной среде и поймёте, что вода — ваш лучший друг, а не враг',
              },
              {
                icon: 'Heart',
                title: 'Обрести истинную любовь к плаванию',
                description: 'Забудете о скучных занятиях и будете с нетерпением ждать каждого похода в бассейн!',
              },
              {
                icon: 'TrendingUp',
                title: 'Раскрыть свой потенциал',
                description: 'Проплывёте первые метры, а затем и первые дистанции, которыми будете гордиться',
              },
              {
                icon: 'LineChart',
                title: 'Преобразить свои навыки',
                description: 'Улучшите технику, скорость и выносливость, достигая новых спортивных вершин',
              },
              {
                icon: 'Dumbbell',
                title: 'Улучшить физическую форму',
                description: 'Укрепите осанку, забудьте про боль в спине и шее, избавитесь от лишних килограмм',
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:animate-bubble-float">
                      <Icon name={benefit.icon} size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300 shadow-xl"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20вашей%20методике%20плавания">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Узнать о нашей методике подробнее!
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-secondary/20"></path>
          </svg>
        </div>
      </section>

      <section id="principles" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Swim Family: Плавайте, как дома, достигайте, как чемпионы!
          </h2>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80">
            Наша школа — это не просто бассейн, это сообщество, где каждый чувствует себя особенным:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: 'Users',
                title: 'Теплая Семейная Атмосфера',
                description: 'Мы создаем комфорт, где вы или ваш ребенок ощущает себя, как дома. Уютные группы до 6 человек, пристальное внимание тренера к каждому!',
              },
              {
                icon: 'HandHeart',
                title: 'Тренеры-Наставники',
                description: 'Это вдохновители, которые верят в каждого ученика, поддерживают на каждом этапе и учат не бояться ошибок.',
              },
              {
                icon: 'Brain',
                title: 'Индивидуальный Подход и Психологический Комфорт',
                description: 'Индивидуальные программы, внимание к психологии занимающегося, безопасная среда и видимый прогресс уже через несколько занятий!',
              },
              {
                icon: 'Award',
                title: 'Техника Мастерства',
                description: 'Тренировки с акцентом на безупречную технику, которая позволит вам плавать эффективно, красиво и без усталости.',
              },
            ].map((principle, index) => (
              <Card key={index} className="border-2 border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-full">
                      <Icon name={principle.icon} size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-primary">
                        {principle.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <Icon name="ClipboardCheck" className="inline mr-2" size={28} />
                  Узнайте, подходит ли вам Swim Family за 1 минуту!
                </h3>
                <p className="text-lg mb-6 text-foreground/80">
                  Пройдите короткий тест и получите персональное предложение
                </p>
                <a href="#test">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-destructive text-white hover:scale-105 transition-all shadow-xl"
                  >
                    <Icon name="Target" className="mr-2" size={24} />
                    Пройти тест и получить бонус!
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="test" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <SwimLevelTest />
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Инвестируйте в себя: Выберите свой абонемент!
          </h2>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={selectedAudience === 'kids' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setSelectedAudience('kids')}
              className="px-8 py-6 text-lg hover:scale-105 transition-all hover:animate-ripple-wave"
            >
              <Icon name="Baby" className="mr-2" size={20} />
              Групповые занятия для детей
            </Button>
            <Button
              variant={selectedAudience === 'adults' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setSelectedAudience('adults')}
              className="px-8 py-6 text-lg hover:scale-105 transition-all hover:animate-ripple-wave"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Групповые занятия для взрослых
            </Button>
            <Button
              variant={selectedAudience === 'individual' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setSelectedAudience('individual')}
              className="px-8 py-6 text-lg hover:scale-105 transition-all hover:animate-ripple-wave"
            >
              <Icon name="User" className="mr-2" size={20} />
              Индивидуальные занятия
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {prices[selectedAudience].map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'border-4 border-orange-500 scale-105' : 'border-2 border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-destructive text-white px-4 py-2 text-sm font-bold">
                    ТОП-ВЫБОР!
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {plan.price.toLocaleString()} ₽
                    </div>
                    <div className="text-sm text-foreground/60">
                      {plan.sessions} {plan.sessions === 1 ? 'занятие' : 'занятия'}
                    </div>
                    <div className="text-lg text-primary font-semibold mt-2">
                      {plan.perSession} ₽ / занятие
                    </div>
                  </div>
                  {plan.savings && (
                    <Badge className="mb-4 bg-green-500 text-white">
                      Экономия {plan.savings} ₽
                    </Badge>
                  )}
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all"
                    size="lg"
                    asChild
                  >
                    <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Хочу%20выбрать%20абонемент">
                      Выбрать абонемент
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                Бонусы, которые вы получаете с каждым абонементом:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'Hand', text: 'Индивидуальный подход еще до начала занятий' },
                  { icon: 'Users', text: 'Комфортные группы до 6 человек' },
                  { icon: 'Droplet', text: 'Всегда чистый бассейн' },
                  { icon: 'Clock', text: 'Возможность заморозки абонемента в случае болезни' },
                ].map((bonus, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={bonus.icon} size={24} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{bonus.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-gradient-to-r from-orange-500 to-destructive text-white hover:scale-110 transition-all shadow-2xl"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Хочу%20начать%20плыть%20к%20мечте">
                <Icon name="Waves" className="mr-2" size={24} />
                ВЫБРАТЬ АБОНЕМЕНТ И НАЧАТЬ ПЛЫТЬ К МЕЧТЕ!
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Что говорят те, кто уже выбрал Swim Family?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 text-primary/20 text-6xl font-serif">"</div>
                <CardContent className="p-8 relative z-10">
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">
                    {review.text}
                  </p>
                  <div className="border-t-2 border-primary/20 pt-4">
                    <p className="font-bold text-primary">{review.author}</p>
                    <p className="text-sm text-foreground/60">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-gradient-to-r from-orange-500 to-destructive text-white hover:scale-110 transition-all shadow-2xl"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Хочу%20попасть%20на%20занятие%20со%20скидкой%2050%25">
                <Icon name="Star" className="mr-2" size={24} />
                ПОПАСТЬ НА ЗАНЯТИЕ СО СКИДКОЙ 50% И НАЧАТЬ СВОЮ ИСТОРИЮ УСПЕХА!
              </a>
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              Скидка действует только для новых клиентов и при записи онлайн!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">
            Выберите удобный для вас бассейн Swim Family
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pools.map((pool, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{pool.name}</h3>
                  <p className="text-foreground/80 mb-2 flex items-start gap-2">
                    <Icon name="MapPin" size={18} className="flex-shrink-0 mt-1 text-accent" />
                    {pool.address}
                  </p>
                  <p className="text-foreground/70 mb-4 flex items-start gap-2">
                    <Icon name="Info" size={18} className="flex-shrink-0 mt-1 text-accent" />
                    {pool.features}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a
                        href={`https://yandex.ru/maps/?rtext=~${pool.coordinates.lat},${pool.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="Navigation" size={18} className="mr-2" />
                        Маршрут
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Swim Family</h3>
              <p className="text-white/80">
                Школа плавания, где каждый чувствует себя как дома
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:+79169455813" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Icon name="Phone" size={20} />
                  +7 (916) 945-58-13
                </a>
                <a href="mailto:ochagovanton@yandex.ru" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Icon name="Mail" size={20} />
                  ochagovanton@yandex.ru
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=79169455813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="https://t.me/+79169455813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                >
                  <Icon name="Send" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-xl mb-4"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=79169455813&text=Здравствуйте!%20Прошу%20перезвонить%20мне">
                <Icon name="PhoneCall" className="mr-2" size={20} />
                ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
              </a>
            </Button>
            <p className="text-white/60 text-sm mt-6">
              © 2024 Swim Family. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;