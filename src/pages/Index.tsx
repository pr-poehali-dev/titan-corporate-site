import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const metalTypes = [
  { id: 'copper', name: 'Медь', price: 650 },
  { id: 'aluminum', name: 'Алюминий', price: 180 },
  { id: 'brass', name: 'Латунь', price: 380 },
  { id: 'bronze', name: 'Бронза', price: 420 },
  { id: 'lead', name: 'Свинец', price: 120 },
  { id: 'stainless', name: 'Нержавейка', price: 95 },
];

const services = [
  { icon: 'Truck', title: 'Вывоз лома', desc: 'Бесплатный вывоз от 500 кг' },
  { icon: 'Scale', title: 'Точное взвешивание', desc: 'Сертифицированные весы' },
  { icon: 'FileText', title: 'Все документы', desc: 'Полный пакет для юр. лиц' },
  { icon: 'Zap', title: 'Быстрый расчёт', desc: 'Оплата наличными или на карту' },
];

export default function Index() {
  const [selectedMetal, setSelectedMetal] = useState('');
  const [weight, setWeight] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const metal = metalTypes.find(m => m.id === selectedMetal);
    if (metal && weight) {
      setCalculatedPrice(metal.price * parseFloat(weight));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="luxury-gradient text-white sticky top-0 z-50 backdrop-blur-md bg-secondary/95 shadow-2xl border-b border-primary/20">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gold-shimmer rounded-xl flex items-center justify-center shadow-2xl">
                <Icon name="Crown" size={24} className="text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">ТИТАН</div>
                <div className="text-xs text-primary/90 tracking-widest uppercase">Premium Metals</div>
              </div>
            </div>
            <nav className="hidden lg:flex gap-10 text-sm font-medium tracking-wider">
              <a href="#about" className="hover:text-primary transition-colors">О КОМПАНИИ</a>
              <a href="#services" className="hover:text-primary transition-colors">УСЛУГИ</a>
              <a href="#prices" className="hover:text-primary transition-colors">ЦЕНЫ</a>
              <a href="#calculator" className="hover:text-primary transition-colors">КАЛЬКУЛЯТОР</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
            </nav>
            <Button className="gold-shimmer text-secondary hover:opacity-90 font-bold shadow-2xl" size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-32 luxury-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-5 py-2 bg-primary/30 rounded-full mb-8 backdrop-blur-sm border border-primary/40">
              <span className="text-primary text-sm font-bold tracking-widest uppercase">Премиальный сервис с 2009 года</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Приём <span className="gold-shimmer bg-clip-text text-transparent">цветных металлов</span>
            </h1>
            <p className="text-2xl mb-12 text-gray-200 max-w-2xl font-light leading-relaxed">
              Максимальные цены в Подольске • Бесплатный вывоз от 500 кг • Мгновенная оплата любым способом
            </p>
            <div className="flex gap-6">
              <Button className="gold-shimmer text-secondary hover:opacity-90 font-bold text-lg h-16 px-10 shadow-2xl" size="lg">
                <Icon name="Calculator" size={24} className="mr-3" />
                УЗНАТЬ ЦЕНУ
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-bold text-lg h-16 px-10" size="lg">
                <Icon name="Phone" size={24} className="mr-3" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="about" className="py-28 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">О КОМПАНИИ</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Премиум-стандарты работы</h2>
              <p className="text-xl text-foreground/70 mb-6 font-light leading-relaxed">
                Более 15 лет ТИТАН устанавливает высочайшие стандарты в индустрии приёма цветных металлов.
              </p>
              <p className="text-xl text-foreground/70 mb-10 font-light leading-relaxed">
                Мы специализируемся на работе с медью, алюминием, латунью, бронзой. Обслуживаем частных клиентов и предприятия.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="glass-effect rounded-2xl p-6 text-center border border-primary/20 shadow-lg">
                  <div className="text-4xl font-bold gold-shimmer bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm text-foreground/60 font-light">Лет на рынке</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center border border-primary/20 shadow-lg">
                  <div className="text-4xl font-bold gold-shimmer bg-clip-text text-transparent mb-2">5000+</div>
                  <div className="text-sm text-foreground/60 font-light">Клиентов</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center border border-primary/20 shadow-lg">
                  <div className="text-4xl font-bold gold-shimmer bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-sm text-foreground/60 font-light">Работаем</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square glass-effect rounded-3xl flex items-center justify-center border border-primary/20 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon name="Award" size={200} className="text-primary/30 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-6">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">УСЛУГИ</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Премиум-сервис</h2>
            <p className="text-xl text-gray-300 font-light">
              Полный спектр услуг для вашего удобства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20 shadow-xl">
                <div className="w-16 h-16 gold-shimmer rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-28 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">ПРАЙС-ЛИСТ</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">Цены на металл</h2>
            <p className="text-lg text-muted-foreground font-light">
              Актуально на {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <div className="divide-y divide-primary/10">
                {metalTypes.map((metal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-8 hover:bg-primary/5 transition-all group">
                    <div>
                      <div className="font-bold text-2xl mb-1">{metal.name}</div>
                      <div className="text-sm text-muted-foreground font-light">за килограмм</div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold gold-shimmer bg-clip-text text-transparent">{metal.price} ₽</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-12 py-8 px-6 glass-effect rounded-2xl border border-primary/20">
              <p className="text-sm text-foreground/60 font-light leading-relaxed">
                Цены варьируются в зависимости от объёма и качества
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-28 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-6">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">КАЛЬКУЛЯТОР</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Рассчёт стоимости</h2>
              <p className="text-xl text-gray-300 font-light">
                Узнайте предварительную стоимость вашего металла
              </p>
            </div>
            <div className="glass-effect rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <div className="p-10 space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="metal-type" className="text-white text-lg">Тип металла</Label>
                  <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                    <SelectTrigger id="metal-type" className="h-14 text-lg bg-white/5 border-primary/20 text-white">
                      <SelectValue placeholder="Выберите металл" />
                    </SelectTrigger>
                    <SelectContent>
                      {metalTypes.map(metal => (
                        <SelectItem key={metal.id} value={metal.id}>
                          {metal.name} — {metal.price} ₽/кг
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="weight" className="text-white text-lg">Вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-14 text-lg bg-white/5 border-primary/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button onClick={calculatePrice} className="w-full h-16 gold-shimmer text-secondary hover:opacity-90 font-medium text-xl shadow-2xl" size="lg">
                  <Icon name="Calculator" size={24} className="mr-3" />
                  Рассчитать
                </Button>
                {calculatedPrice !== null && (
                  <div className="bg-primary/20 border-2 border-primary rounded-2xl p-8 text-center animate-fade-in backdrop-blur-sm">
                    <div className="text-sm text-gray-300 mb-3 tracking-widest uppercase">Предварительная стоимость</div>
                    <div className="text-6xl font-bold gold-shimmer bg-clip-text text-transparent">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="application" className="py-28 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">КОНТАКТ</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Заказать вызов специалиста</h2>
              <p className="text-xl text-muted-foreground font-light">
                Мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <div className="glass-effect rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <div className="p-10 space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="h-14 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="h-14 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="address" className="text-base">Адрес вывоза</Label>
                  <Input id="address" placeholder="Подольск, ул. Ленина, д. 1" className="h-14 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="comment" className="text-base">Комментарий</Label>
                  <Textarea id="comment" placeholder="Опишите что хотите сдать и примерный вес" rows={5} className="text-lg" />
                </div>
                <Button className="w-full h-16 gold-shimmer text-secondary hover:opacity-90 font-medium text-xl shadow-2xl mt-8" size="lg">
                  <Icon name="Send" size={24} className="mr-3" />
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-28 luxury-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-6">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">ПОРТФОЛИО</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Наши проекты</h2>
            <p className="text-xl text-gray-300 font-light">
              Примеры нашей работы с крупнейшими клиентами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-video glass-effect rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon name="Image" size={72} className="text-primary/50 group-hover:text-primary/70 transition-colors relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-28 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">FAQ</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground font-light">
                Ответы на популярные вопросы
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="glass-effect border border-primary/20 rounded-2xl px-8 py-2">
                <AccordionTrigger className="text-xl font-bold hover:text-primary transition">
                  Какие документы нужны для сдачи лома?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 font-light">
                  Для физических лиц — паспорт. Для юридических лиц — учредительные документы, доверенность на сдачу лома, акт о списании.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="glass-effect border border-primary/20 rounded-2xl px-8 py-2">
                <AccordionTrigger className="text-xl font-bold hover:text-primary transition">
                  Бесплатно ли вывозите лом?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 font-light">
                  Да, вывоз бесплатный при весе от 500 кг. Для меньших объёмов стоимость вывоза обговаривается индивидуально.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="glass-effect border border-primary/20 rounded-2xl px-8 py-2">
                <AccordionTrigger className="text-xl font-bold hover:text-primary transition">
                  Как быстро приедете после заявки?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 font-light">
                  В течение 2-4 часов в пределах Подольска. В область — в течение рабочего дня.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="glass-effect border border-primary/20 rounded-2xl px-8 py-2">
                <AccordionTrigger className="text-xl font-bold hover:text-primary transition">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 font-light">
                  Наличные, перевод на карту, безналичный расчёт для юридических лиц.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="glass-effect border border-primary/20 rounded-2xl px-8 py-2">
                <AccordionTrigger className="text-xl font-bold hover:text-primary transition">
                  Принимаете лом в выходные?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/70 font-light">
                  Да, мы работаем 24/7. Вы можете оставить заявку в любое время, и мы согласуем удобное время приёма.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-28 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">КОНТАКТЫ</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">Мы всегда на связи</h2>
            <p className="text-xl text-muted-foreground font-light">
              Личный менеджер для каждого клиента
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass-effect rounded-3xl border border-primary/20 shadow-2xl">
              <div className="p-10 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gold-shimmer rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Icon name="Phone" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">Телефон</div>
                    <div className="text-foreground/70 text-lg mb-1">+7 (495) 123-45-67</div>
                    <div className="text-foreground/70 text-lg">+7 (495) 765-43-21</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gold-shimmer rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Icon name="Mail" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">Email</div>
                    <div className="text-foreground/70 text-lg">info@priemloma.pro</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gold-shimmer rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Icon name="MapPin" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">Адрес</div>
                    <div className="text-foreground/70 text-lg">г. Подольск, Промышленная зона, ул. Заводская 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gold-shimmer rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Icon name="Clock" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-2">Режим работы</div>
                    <div className="text-foreground/70 text-lg">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-3xl border border-primary/20 shadow-2xl overflow-hidden">
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6">Мы на карте</h3>
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-muted/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={80} className="text-primary/40 mx-auto mb-6" />
                    <p className="text-foreground/60 text-lg font-light">Карта загружается...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="luxury-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 gold-shimmer rounded-xl flex items-center justify-center shadow-2xl">
                  <Icon name="Crown" size={28} className="text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">ТИТАН</div>
                  <div className="text-xs text-primary/90 tracking-widest uppercase">Premium Metals</div>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Премиальный сервис по приёму цветных металлов с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Услуги</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-light">
                <li><a href="#" className="hover:text-primary transition-colors">Приём меди</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приём алюминия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приём латуни</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вывоз лома</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Компания</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-light">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#prices" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Контакты</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-light">
                <li>+7 (495) 123-45-67</li>
                <li>info@priemloma.pro</li>
                <li>г. Подольск</li>
                <li>ул. Заводская 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-10 text-center">
            <p className="text-sm text-gray-400 font-light">© 2025 ТИТАН. Все права защищены. ИНН 5036034567 ОГРН 1095036001234</p>
          </div>
        </div>
      </footer>
    </div>
  );
}