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

  const trainers = [
    {
      name: 'Очагов Антон Владиславович',
      role: 'Главный тренер, основатель методики',
      experience: 'Стаж 10 лет, КМС по плаванию',
      achievements: 'Подготовил 15+ спортсменов-разрядников',
      philosophy: 'Моя миссия — не просто научить технике, а показать, что вода — это источник силы и радости',
      specialization: 'Работа с аквафобией, постановка техники с нуля',
      phone: '89169455813',
      image: 'https://cdn.poehali.dev/files/2f7ae86d-58ab-4ebd-b63f-10d843a91c08.JPG',
    },
    {
      name: 'Амирханов Артем',
      role: 'Тренер-методист',
      experience: 'Стаж 5 лет, спортивный разряд',
      achievements: 'Успешно работает с детьми от 4 лет',
      philosophy: 'Я верю, что каждый может плавать красиво и легко. Моя задача — найти индивидуальный подход к каждому',
      specialization: 'Детское плавание, коррекция техники',
      image: 'https://cdn.poehali.dev/projects/2b714740-d40e-4ef4-b8ae-4db5d5a39d93/files/14a07152-a0a5-432a-90e4-e17688275bb4.jpg',
    },
  ];

  const pools = [
    {
      name: 'Спортивный комплекс "Яуза"',
      address: 'Олонецкий пр., 5, Москва',
      features: '25-метровый бассейн, финская сауна',
    },
    {
      name: 'Голден Фитнесс',
      address: 'Староватутинский пр., 14, Москва',
      features: 'Детский бассейн, персональные занятия',
    },
    {
      name: 'НИУ МГСУ Бассейн',
      address: 'Ярославское ш., 26, стр. 4, Москва',
      features: 'Олимпийский бассейн, группы для спортсменов',
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background/90" />

        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl hover:scale-105 hover:animate-water-ripple transition-transform duration-300 cursor-default leading-tight">
              Swim Family: Почувствуйте Свободу в Воде — Страх Останется Вчера!
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/95 font-semibold drop-shadow-lg max-w-4xl mx-auto">
              От полного новичка до уверенного пловца всего за 10 занятий по нашей авторской методике. Гарантия результата!
            </h2>
            
            <Badge className="mb-6 text-base md:text-lg px-6 py-3 bg-white/95 text-primary hover:bg-white shadow-xl">
              <Icon name="Trophy" className="mr-2" size={20} />
              Помогли 850+ ученикам за 10 лет!
            </Badge>
            
            <div className="mb-8 overflow-hidden py-2">
              <div className="inline-block bg-destructive text-white px-6 md:px-8 py-3 text-base md:text-lg font-bold animate-marquee whitespace-nowrap shadow-xl">
                🔥 ИДЕТ НАБОР НА НОЯБРЬ — СПЕШИТЕ, МЕСТА ОГРАНИЧЕНЫ! 🔥
              </div>
            </div>
            
            <a href="#test">
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-8 md:px-10 py-6 md:py-8 bg-white text-primary hover:bg-white/95 hover:scale-110 transition-all duration-300 shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10">
                  <Icon name="Target" className="inline mr-2" size={24} />
                  ДИАГНОСТИКА ВАШЕГО УРОВНЯ!
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 animate-ripple-wave bg-primary/20 rounded-full" />
                </span>
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 wave-divider" />
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDk2YzciIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 overflow-hidden">
            <a href="#pricing">
              <div className="inline-block bg-gradient-to-r from-destructive via-destructive/90 to-destructive text-white px-8 py-3 text-lg font-bold shadow-lg hover:shadow-xl transition-shadow cursor-pointer animate-pulse-slow hover:scale-105">
                <Icon name="CalendarDays" className="inline mr-2" size={20} />
                ИДЕТ НАБОР НА НОЯБРЬ — СПЕШИТЕ, МЕСТА ОГРАНИЧЕНЫ!
              </div>
            </a>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Мы не просто учим плавать. Мы учим любить воду!
          </h2>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80 leading-relaxed">
            В Swim Family каждый урок — это погружение в мир заботы и безопасности. Мы понимаем, что вода может пугать, 
            но наша уникая <span className="font-bold text-primary">Авторская Методика</span> превращает этот страх в истинное удовольствие и уверенность.
          </p>
          
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto font-semibold text-primary">
            С первого занятия по нашей собственной методике мы поможем вам:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
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
                icon: 'BarChart3',
                title: 'Преобразить свои навыки',
                description: 'Улучшите технику, скорость и выносливость, достигая новых спортивных вершин',
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/50 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 inline-block p-3 md:p-4 bg-primary/10 rounded-full group-hover:animate-bubble-float">
                    <Icon name={item.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 px-8 py-6 text-lg shadow-lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать о нашей методике подробнее!
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Swim Family: Плавайте, как дома, достигайте, как чемпионы!
          </h2>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80">
            Наша школа — это не просто бассейн, это сообщество, где каждый чувствует себя особенным:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Users',
                title: 'Теплая Семейная Атмосфера',
                description: 'Мы создаем комфорт, где вы или ваш ребенок ощущает себя, как дома. Уютные группы до 6 человек!',
              },
              {
                icon: 'HandHeart',
                title: 'Тренеры-Наставники',
                description: 'Это вдохновители, которые верят в каждого ученика и поддерживают на каждом этапе',
              },
              {
                icon: 'Brain',
                title: 'Индивидуальный Подход',
                description: 'Индивидуальные программы, внимание к психологии, безопасная среда и видимый прогресс!',
              },
              {
                icon: 'Swords',
                title: 'Техника Мастерства',
                description: 'Тренировки с акцентом на безупречную технику для эффективного плавания',
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/40"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div id="test" className="mt-12 scroll-mt-20">
            <SwimLevelTest />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(199,89%,48%)_0%,_transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Инвестируйте в себя: Выберите свой абонемент!
          </h2>
          
          <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
            {[
              { key: 'kids', label: 'Групповые для детей', icon: 'Baby' },
              { key: 'adults', label: 'Групповые для взрослых', icon: 'Users' },
              { key: 'individual', label: 'Индивидуальные', icon: 'User' },
            ].map((tab) => (
              <Button
                key={tab.key}
                onClick={() => setSelectedAudience(tab.key as typeof selectedAudience)}
                variant={selectedAudience === tab.key ? 'default' : 'outline'}
                className={`px-4 md:px-6 py-4 md:py-6 text-sm md:text-base transition-all duration-500 ${
                  selectedAudience === tab.key
                    ? 'bg-primary text-white shadow-xl scale-105 animate-water-ripple'
                    : 'hover:scale-105 border-primary/30'
                }`}
              >
                <Icon name={tab.icon} className="mr-2" size={20} />
                {tab.label}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {prices[selectedAudience].map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-4 border-primary shadow-2xl scale-105' 
                    : 'border-2 border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-destructive text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-2 shadow-lg">
                    ТОП-ВЫБОР!
                  </div>
                )}
                
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {plan.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm text-foreground/60">
                      {plan.sessions} {plan.sessions === 1 ? 'занятие' : 'занятий'}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-foreground/70">За занятие:</span>
                      <span className="font-bold text-primary">{plan.perSession} ₽</span>
                    </div>
                    
                    {plan.savings && (
                      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-3 text-center">
                        <Icon name="Sparkles" className="inline mr-1 text-green-600" size={18} />
                        <span className="font-bold text-green-600">
                          Экономия {plan.savings.toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 shadow-lg' 
                        : 'bg-primary/80 hover:bg-primary'
                    }`}
                  >
                    Выбрать "{plan.name}"
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-accent/20 to-secondary/30 border-2 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary text-center">
                Бонусы, которые вы получаете с каждым абонементом:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'HandHeart', text: 'Индивидуальный подход еще до начала занятий' },
                  { icon: 'Users', text: 'Комфортные группы до 6 человек' },
                  { icon: 'Droplet', text: 'Всегда чистый бассейн' },
                  { icon: 'Clock', text: 'Возможность заморозки абонемента в случае болезни' },
                ].map((bonus, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/50 rounded-lg p-4">
                    <Icon name={bonus.icon} className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground/80">{bonus.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:scale-110 transition-all duration-300 px-10 py-7 text-lg md:text-xl shadow-2xl">
              <Icon name="Waves" className="mr-2" size={24} />
              ВЫБРАТЬ АБОНЕМЕНТ И НАЧАТЬ ПЛЫТЬ К МЕЧТЕ!
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">
            Познакомьтесь с нашей командой — теми, кто влюбляет в воду!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">{trainer.name}</h3>
                  <Badge className="mb-4 text-base">{trainer.role}</Badge>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm text-foreground/80">{trainer.experience}</span>
                    </div>
                    {trainer.achievements && (
                      <div className="flex items-start gap-2">
                        <Icon name="Trophy" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-sm text-foreground/80">{trainer.achievements}</span>
                      </div>
                    )}
                    {trainer.specialization && (
                      <div className="flex items-start gap-2">
                        <Icon name="Target" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-sm text-foreground/80">{trainer.specialization}</span>
                      </div>
                    )}
                  </div>
                  
                  {trainer.philosophy && (
                    <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                      <p className="text-sm italic text-foreground/70">"{trainer.philosophy}"</p>
                    </div>
                  )}
                  
                  {trainer.phone ? (
                    <Button className="w-full py-6 text-base hover:scale-105 transition-all" variant="outline" asChild>
                      <a href={`tel:+${trainer.phone}`}>
                        <Icon name="Phone" className="mr-2" size={18} />
                        Записаться: +{trainer.phone}
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full py-6 text-base hover:scale-105 transition-all" variant="outline">
                      Записаться к {trainer.name.split(' ')[1]}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">
            Что говорят те, кто уже выбрал Swim Family?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 bg-white/80 backdrop-blur-sm overflow-hidden group"
              >
                <CardContent className="p-6 md:p-8 relative">
                  <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Icon name="Quote" size={64} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 mb-4 italic leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">{review.author}</div>
                      <div className="text-sm text-foreground/60">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Скидка 50% на пробное занятие!
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Начните свою историю успеха уже сегодня
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg md:text-xl shadow-lg hover:scale-110 transition-all"
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                ПОПАСТЬ НА ЗАНЯТИЕ СО СКИДКОЙ 50%!
              </Button>
              <p className="text-white/80 mt-4 text-sm">
                * Скидка действует только для новых клиентов и при записи онлайн!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">
            Выберите удобный для вас бассейн Swim Family
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pools.map((pool, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">{pool.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="Navigation" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{pool.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{pool.features}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      <Icon name="Map" className="mr-2" size={18} />
                      Построить маршрут
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      <Icon name="Calendar" className="mr-2" size={18} />
                      Посмотреть расписание
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Остались вопросы? Свяжитесь с нами!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3" />
                  <div className="text-sm mb-1">Телефон</div>
                  <a href="tel:+79169455813" className="font-bold hover:underline text-lg">
                    +7 (916) 945-58-13
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3" />
                  <div className="text-sm mb-1">Email</div>
                  <a href="mailto:info@swimfamily.ru" className="font-bold hover:underline text-lg">
                    info@swimfamily.ru
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-3" />
                  <div className="text-sm mb-1">Мессенджеры</div>
                  <div className="flex justify-center gap-3 mt-2">
                    <a href="#" className="hover:scale-125 transition-transform">
                      <Icon name="MessageCircle" size={24} />
                    </a>
                    <a href="#" className="hover:scale-125 transition-transform">
                      <Icon name="Send" size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg md:text-xl shadow-xl hover:scale-110 transition-all"
            >
              <Icon name="PhoneCall" className="mr-2" size={24} />
              ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
            </Button>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/80">
                © 2024 Swim Family. Школа плавания. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;