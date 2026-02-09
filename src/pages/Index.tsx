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
      <header className="bg-white border-b minimal-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold tracking-tight">ТИТАН</div>
            </div>
            <nav className="hidden lg:flex gap-10 text-sm font-light tracking-wide">
              <a href="#about" className="hover:opacity-60 transition-opacity">О компании</a>
              <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
              <a href="#prices" className="hover:opacity-60 transition-opacity">Цены</a>
              <a href="#calculator" className="hover:opacity-60 transition-opacity">Калькулятор</a>
              <a href="#contacts" className="hover:opacity-60 transition-opacity">Контакты</a>
            </nav>
            <Button className="bg-black text-white hover:bg-black/80 transition-all font-light text-sm px-6">
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-white py-40 relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="text-xs tracking-[0.3em] uppercase mb-12 font-light opacity-60">
              С 2009 года
            </div>
            <h1 className="text-7xl md:text-8xl font-normal mb-12 leading-[0.95] tracking-tight">
              Приём цветных
              <span className="block mt-4">металлов</span>
            </h1>
            <p className="text-lg text-foreground/60 mb-16 font-light leading-relaxed max-w-xl">
              Премиум-сервис для физических и юридических лиц. Подольск.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-black/80 font-light text-sm px-8 py-6">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="minimal-border hover:bg-black hover:text-white font-light text-sm px-8 py-6 transition-all">
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
                О компании
              </div>
              <h2 className="text-5xl font-normal mb-12 leading-[1.1] tracking-tight">Премиум-стандарты работы</h2>
              <p className="text-base text-foreground/70 mb-8 leading-relaxed font-light">
                Более 15 лет ТИТАН устанавливает высочайшие стандарты в индустрии приёма цветных металлов.
              </p>
              <p className="text-base text-foreground/70 mb-16 leading-relaxed font-light">
                Мы специализируемся на работе с медью, алюминием, латунью, бронзой. Обслуживаем частных клиентов и предприятия.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center py-8 minimal-border">
                  <div className="text-4xl font-normal mb-2">15+</div>
                  <div className="text-xs text-foreground/50 tracking-wide uppercase font-light">Лет на рынке</div>
                </div>
                <div className="text-center py-8 minimal-border">
                  <div className="text-4xl font-normal mb-2">5000+</div>
                  <div className="text-xs text-foreground/50 tracking-wide uppercase font-light">Клиентов</div>
                </div>
                <div className="text-center py-8 minimal-border">
                  <div className="text-4xl font-normal mb-2">24/7</div>
                  <div className="text-xs text-foreground/50 tracking-wide uppercase font-light">Работаем</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted/30 minimal-border flex items-center justify-center">
                <Icon name="Award" size={200} className="text-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
              Услуги
            </div>
            <h2 className="text-5xl font-normal mb-6 tracking-tight">Сервис</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 minimal-border hover-lift cursor-pointer group">
                <div className="mb-8">
                  <Icon name={service.icon} size={32} className="text-foreground/80" />
                </div>
                <h3 className="text-xl font-normal mb-3">{service.title}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
              ПРАЙС
            </div>
            <h2 className="text-5xl font-normal mb-6 tracking-tight">Цены</h2>
            <p className="text-sm text-muted-foreground font-light">
              {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white minimal-border">
              <div className="divide-y minimal-border">
                {metalTypes.map((metal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-8 hover:bg-muted/20 transition-colors group">
                    <div>
                      <div className="font-normal text-xl mb-1">{metal.name}</div>
                      <div className="text-xs text-muted-foreground tracking-wide uppercase font-light">за килограмм</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-normal">{metal.price} ₽</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-12 py-8 px-6 bg-muted/20 minimal-border">
              <p className="text-sm text-foreground/60 font-light leading-relaxed">
                Цены варьируются в зависимости от объёма и качества
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-32 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
                КАЛЬКУЛЯТОР
              </div>
              <h2 className="text-5xl font-normal mb-6 tracking-tight">Расчёт стоимости</h2>
            </div>
            <div className="bg-white minimal-border p-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="metal-type" className="text-sm font-light">Тип металла</Label>
                  <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                    <SelectTrigger id="metal-type" className="h-12 minimal-border">
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
                  <Label htmlFor="weight" className="text-sm font-light">Вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12 minimal-border"
                  />
                </div>
                <Button onClick={calculatePrice} className="w-full h-12 bg-black text-white hover:bg-black/80 font-light text-sm" size="lg">
                  Рассчитать
                </Button>
                {calculatedPrice !== null && (
                  <div className="bg-muted/30 minimal-border p-8 text-center">
                    <div className="text-xs text-foreground/50 mb-3 tracking-wide uppercase font-light">Предварительная стоимость</div>
                    <div className="text-5xl font-normal">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="application" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
                КОНТАКТ
              </div>
              <h2 className="text-5xl font-normal mb-6 tracking-tight">Вызов специалиста</h2>
              <p className="text-sm text-muted-foreground font-light">
                Ответим в течение 15 минут
              </p>
            </div>
            <div className="bg-white minimal-border p-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-light">Имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="h-12 minimal-border" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm font-light">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="h-12 minimal-border" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="address" className="text-sm font-light">Адрес</Label>
                  <Input id="address" placeholder="Подольск, ул. Ленина, д. 1" className="h-12 minimal-border" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="comment" className="text-sm font-light">Комментарий</Label>
                  <Textarea id="comment" placeholder="Опишите что хотите сдать" rows={4} className="minimal-border" />
                </div>
                <Button className="w-full h-12 bg-black text-white hover:bg-black/80 font-light text-sm mt-4" size="lg">
                  Отправить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
              ПОРТФОЛИО
            </div>
            <h2 className="text-5xl font-normal mb-6 tracking-tight">Наши проекты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-video bg-muted/20 minimal-border flex items-center justify-center hover-lift cursor-pointer group">
                <Icon name="Image" size={48} className="text-foreground/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
                FAQ
              </div>
              <h2 className="text-5xl font-normal mb-6 tracking-tight">Вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white minimal-border px-8 py-2">
                <AccordionTrigger className="text-base font-normal hover:opacity-60 transition">
                  Какие документы нужны?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 font-light">
                  Для физ. лиц — паспорт. Для юр. лиц — учредительные документы, доверенность, акт о списании.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white minimal-border px-8 py-2">
                <AccordionTrigger className="text-base font-normal hover:opacity-60 transition">
                  Бесплатно ли вывозите лом?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 font-light">
                  Да, вывоз бесплатный при весе от 500 кг. Для меньших объёмов стоимость индивидуальна.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white minimal-border px-8 py-2">
                <AccordionTrigger className="text-base font-normal hover:opacity-60 transition">
                  Как быстро приедете?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 font-light">
                  2-4 часа в Подольске. В область — в течение рабочего дня.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white minimal-border px-8 py-2">
                <AccordionTrigger className="text-base font-normal hover:opacity-60 transition">
                  Способы оплаты?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 font-light">
                  Наличные, перевод на карту, безналичный расчёт для юр. лиц.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white minimal-border px-8 py-2">
                <AccordionTrigger className="text-base font-normal hover:opacity-60 transition">
                  Работаете в выходные?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 font-light">
                  Да, 24/7. Оставьте заявку в любое время.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase mb-8 font-light opacity-60">
              КОНТАКТЫ
            </div>
            <h2 className="text-5xl font-normal mb-6 tracking-tight">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <div className="space-y-10">
                <div>
                  <div className="text-xs tracking-wide uppercase mb-3 font-light opacity-60">Телефон</div>
                  <div className="text-lg mb-1">+7 (495) 123-45-67</div>
                  <div className="text-lg">+7 (495) 765-43-21</div>
                </div>
                <div>
                  <div className="text-xs tracking-wide uppercase mb-3 font-light opacity-60">Email</div>
                  <div className="text-lg">info@priemloma.pro</div>
                </div>
                <div>
                  <div className="text-xs tracking-wide uppercase mb-3 font-light opacity-60">Адрес</div>
                  <div className="text-lg">г. Подольск<br />Промышленная зона<br />ул. Заводская 15</div>
                </div>
                <div>
                  <div className="text-xs tracking-wide uppercase mb-3 font-light opacity-60">Режим</div>
                  <div className="text-lg">24/7</div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square bg-muted/20 minimal-border flex items-center justify-center">
                <Icon name="Map" size={64} className="text-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="text-2xl font-normal mb-6">ТИТАН</div>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Приём цветных металлов с 2009 года
              </p>
            </div>
            <div>
              <div className="text-xs tracking-wide uppercase mb-6 font-light opacity-60">Услуги</div>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Приём меди</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Приём алюминия</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Приём латуни</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Вывоз лома</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-wide uppercase mb-6 font-light opacity-60">Компания</div>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#about" className="hover:opacity-60 transition-opacity">О нас</a></li>
                <li><a href="#prices" className="hover:opacity-60 transition-opacity">Цены</a></li>
                <li><a href="#faq" className="hover:opacity-60 transition-opacity">FAQ</a></li>
                <li><a href="#contacts" className="hover:opacity-60 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-wide uppercase mb-6 font-light opacity-60">Контакты</div>
              <ul className="space-y-3 text-sm font-light">
                <li>+7 (495) 123-45-67</li>
                <li>info@priemloma.pro</li>
                <li>г. Подольск</li>
                <li>ул. Заводская 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-xs text-gray-500 font-light">© 2025 ТИТАН. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}