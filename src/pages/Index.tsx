import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
      role: 'Главный тренер',
      experience: 'Стаж 10 лет, КМС по плаванию',
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

  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 150, 199, 0.4), rgba(51, 195, 240, 0.5)), url('https://cdn.poehali.dev/projects/2b714740-d40e-4ef4-b8ae-4db5d5a39d93/files/a9386189-c77d-48c7-99e2-a141b8e53b5d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/80" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
              Swim Family: Почувствуйте Свободу в Воде — Страх Останется Вчера!
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-8 text-white/95 font-semibold drop-shadow-lg">
              От полного новичка до уверенного пловца всего за 10 занятий по нашей авторской методике
            </h2>
            
            <Badge className="mb-6 text-lg px-6 py-3 bg-white/90 text-primary hover:bg-white">
              <Icon name="Trophy" className="mr-2" size={20} />
              Помогли 850+ ученикам за 10 лет!
            </Badge>
            
            <div className="mb-8 overflow-hidden">
              <div className="inline-block bg-destructive text-white px-8 py-3 text-lg font-bold animate-wave">
                ИДЕТ НАБОР НА НОЯБРЬ — СПЕШИТЕ, МЕСТА ОГРАНИЧЕНЫ!
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="text-xl px-10 py-8 bg-white text-primary hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-2xl group"
            >
              <span className="relative">
                ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ripple bg-primary/20" />
              </span>
            </Button>
            
            <p className="text-white/90 mt-4 text-lg">+ Диагностика вашего уровня!</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Мы не просто учим плавать. Мы учим любить воду!
          </h2>
          
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80">
            В Swim Family каждый урок — это погружение в мир заботы и безопасности. Мы понимаем, что вода может пугать, 
            но наша уникальная Авторская Методика превращает этот страх в истинное удовольствие и уверенность.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/50"
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full group-hover:animate-float">
                    <Icon name={item.icon} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Узнать о нашей методике подробнее
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Swim Family: Плавайте, как дома, достигайте, как чемпионы!
          </h2>
          
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-foreground/80">
            Наша школа — это не просто бассейн, это сообщество, где каждый чувствует себя особенным
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Users',
                title: 'Теплая Семейная Атмосфера',
                description: 'Уютные группы до 6 человек, пристальное внимание тренера к каждому!',
              },
              {
                icon: 'HandHeart',
                title: 'Тренеры-Наставники',
                description: 'Вдохновители, которые верят в каждого ученика и поддерживают на каждом этапе',
              },
              {
                icon: 'Brain',
                title: 'Индивидуальный Подход',
                description: 'Программы с учетом психологии, безопасная среда и видимый прогресс через несколько занятий!',
              },
              {
                icon: 'Award',
                title: 'Техника Мастерства',
                description: 'Акцент на безупречную технику, которая позволит плавать эффективно и красиво',
              },
            ].map((principle, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <Icon name={principle.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{principle.title}</h3>
                  <p className="text-sm text-foreground/70">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Инвестируйте в себя: Выберите свой абонемент!
          </h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={selectedAudience === 'kids' ? 'default' : 'outline'}
              onClick={() => setSelectedAudience('kids')}
              className="hover:scale-105 transition-transform"
            >
              Групповые занятия для детей
            </Button>
            <Button
              variant={selectedAudience === 'adults' ? 'default' : 'outline'}
              onClick={() => setSelectedAudience('adults')}
              className="hover:scale-105 transition-transform"
            >
              Групповые занятия для взрослых
            </Button>
            <Button
              variant={selectedAudience === 'individual' ? 'default' : 'outline'}
              onClick={() => setSelectedAudience('individual')}
              className="hover:scale-105 transition-transform"
            >
              Индивидуальные занятия
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {prices[selectedAudience].map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-4 border-primary scale-105' : 'hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-destructive text-white px-4 py-1 text-sm font-bold">
                    ТОП-ВЫБОР!
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-primary">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">{plan.price} ₽</div>
                    <div className="text-sm text-foreground/60">{plan.sessions} занятий</div>
                    <div className="text-lg text-foreground/80 mt-2">{plan.perSession} ₽ за занятие</div>
                  </div>
                  {plan.savings && (
                    <Badge className="mb-4 bg-accent text-accent-foreground">
                      Экономия {plan.savings} ₽
                    </Badge>
                  )}
                  <Button className="w-full" size="lg">
                    Выбрать абонемент
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="max-w-4xl mx-auto bg-secondary/20 border-2 border-primary/30">
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
                    <Icon name={bonus.icon} className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground/80">{bonus.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-xl px-10 py-6 hover:scale-105 transition-transform">
              ВЫБРАТЬ АБОНЕМЕНТ И НАЧАТЬ ПЛЫТЬ К МЕЧТЕ!
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Познакомьтесь с нашей командой — теми, кто влюбляет в воду!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{trainer.name}</h3>
                  <Badge className="mb-4">{trainer.role}</Badge>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm text-foreground/80">{trainer.experience}</span>
                    </div>
                    {trainer.phone && (
                      <div className="flex items-start gap-2">
                        <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <a href={`tel:+${trainer.phone}`} className="text-sm text-primary font-semibold hover:underline">
                          +{trainer.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {trainer.phone ? (
                    <Button className="w-full" variant="outline" asChild>
                      <a href={`tel:+${trainer.phone}`}>
                        <Icon name="Phone" className="mr-2" size={18} />
                        Записаться: +{trainer.phone}
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline">
                      Записаться к {trainer.name.split(' ')[1]}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Что говорят те, кто уже выбрал Swim Family?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                text: 'Дочь боялась воды, но после 5 занятий с Антоном Владиславовичем она не только плавает, но и ныряет! Это чудо! Спасибо, Swim Family!',
                author: 'Екатерина',
                role: 'мама 7-летней Алисы',
              },
              {
                text: 'Я всю жизнь боялся глубины. Думал, это навсегда. Но в Swim Family мне помогли преодолеть страх и научили плавать правильно. Теперь бассейн — мое любимое место для отдыха!',
                author: 'Дмитрий',
                role: '35 лет',
              },
              {
                text: 'Отличная школа! Сын занимается уже полгода, прогресс потрясающий. Тренеры профессиональные, атмосфера дружелюбная. Рекомендую всем!',
                author: 'Анна',
                role: 'мама 10-летнего Максима',
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-foreground/80 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
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
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-xl px-10 py-6 bg-destructive hover:bg-destructive/90 text-white hover:scale-105 transition-transform">
              ПОПАСТЬ НА ЗАНЯТИЕ СО СКИДКОЙ 50% И НАЧАТЬ СВОЮ ИСТОРИЮ УСПЕХА!
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              Скидка действует только для новых клиентов и при записи онлайн!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Выберите удобный для вас бассейн Swim Family
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pools.map((pool, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{pool.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{pool.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{pool.features}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Icon name="Navigation" className="mr-2" size={16} />
                      Построить маршрут
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Посмотреть расписание
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Остались вопросы? Свяжитесь с нами!</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-2">
                <Icon name="Phone" size={32} />
                <div className="text-lg font-semibold">+7 (XXX) XXX-XX-XX</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="Mail" size={32} />
                <div className="text-lg font-semibold">info@swimfamily.ru</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="MessageCircle" size={32} />
                <div className="text-lg font-semibold">Мы в соцсетях</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                <Icon name="MessageCircle" size={24} />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Send" size={24} />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Share2" size={24} />
              </Button>
            </div>
            
            <Button size="lg" variant="secondary" className="text-xl px-10 py-6 hover:scale-105 transition-transform">
              ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
            </Button>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70">© 2024 Swim Family. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;