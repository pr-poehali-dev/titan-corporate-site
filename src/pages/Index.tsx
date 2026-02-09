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
      <header className="metal-texture text-white sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Factory" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ТИТАН</h1>
                <p className="text-sm text-gray-300">Приём цветного лома</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-accent transition">О компании</a>
              <a href="#services" className="hover:text-accent transition">Услуги</a>
              <a href="#prices" className="hover:text-accent transition">Цены</a>
              <a href="#calculator" className="hover:text-accent transition">Калькулятор</a>
              <a href="#gallery" className="hover:text-accent transition">Галерея</a>
              <a href="#faq" className="hover:text-accent transition">FAQ</a>
              <a href="#contacts" className="hover:text-accent transition">Контакты</a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="metal-texture text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ПРИЁМ ЦВЕТНОГО ЛОМА
              <span className="block text-accent mt-2">ПО ВЫСОКИМ ЦЕНАМ</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Работаем с физическими и юридическими лицами. Вывоз от 500 кг бесплатно. Подольск и область.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать приёмщика
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Icon name="Cog" size={400} className="absolute right-0 top-20 text-white animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании ТИТАН</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Более 15 лет принимаем цветной лом в Подольске и Московской области. 
                Честные цены, точные весы, все документы для юридических лиц.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Работаем с медью, алюминием, латунью, бронзой, свинцом и нержавеющей сталью. 
                Принимаем любые объёмы — от частных лиц и до промышленных предприятий.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">работаем</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 flex items-center justify-center">
                <Icon name="Factory" size={200} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по приёму цветного лома
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition border-2 hover:border-accent">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Актуальные цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прайс-лист на {new Date().toLocaleDateString('ru-RU')}
          </p>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {metalTypes.map((metal, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 hover:bg-muted/50 transition">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Icon name="Gem" size={24} className="text-accent" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{metal.name}</div>
                          <div className="text-sm text-muted-foreground">за 1 кг</div>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-accent">{metal.price} ₽</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Цены могут меняться в зависимости от объёма и качества лома. Для точного расчёта используйте калькулятор или звоните нам.
            </p>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Рассчитайте стоимость вашего лома прямо сейчас
            </p>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Расчёт стоимости лома</CardTitle>
                <CardDescription>Выберите тип металла и укажите вес</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="metal-type">Тип металла</Label>
                  <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                    <SelectTrigger id="metal-type">
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
                <div className="space-y-2">
                  <Label htmlFor="weight">Вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <Button onClick={calculatePrice} className="w-full bg-accent hover:bg-accent/90 text-white font-semibold" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать
                </Button>
                {calculatedPrice !== null && (
                  <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 text-center animate-fade-in">
                    <div className="text-sm text-muted-foreground mb-2">Предварительная стоимость</div>
                    <div className="text-4xl font-bold text-accent">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="application" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес вывоза</Label>
                  <Input id="address" placeholder="Подольск, ул. Ленина, д. 1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Опишите что хотите сдать и примерный вес" rows={4} />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши объекты и процесс работы
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center hover:scale-105 transition cursor-pointer">
                <Icon name="Image" size={64} className="text-white opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Частые вопросы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Ответы на популярные вопросы о приёме лома
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Какие документы нужны для сдачи лома?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для физических лиц — паспорт. Для юридических лиц — учредительные документы, доверенность на сдачу лома, акт о списании.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Бесплатно ли вывозите лом?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, вывоз бесплатный при весе от 500 кг. Для меньших объёмов стоимость вывоза обговаривается индивидуально.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Как быстро приедете после заявки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В течение 2-4 часов в пределах Подольска. В область — в течение рабочего дня.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наличные, перевод на карту, безналичный расчёт для юридических лиц.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Принимаете лом в выходные?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем 24/7. Вы можете оставить заявку в любое время, и мы согласуем удобное время приёма.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (495) 765-43-21</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@priemloma.pro</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Подольск, Промышленная зона, ул. Заводская 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Мы на карте</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта загружается...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="metal-texture text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Factory" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">ТИТАН</div>
                  <div className="text-xs text-gray-400">Приём цветного лома</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Надёжный партнёр в сфере приёма цветных металлов с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition">Приём меди</a></li>
                <li><a href="#" className="hover:text-accent transition">Приём алюминия</a></li>
                <li><a href="#" className="hover:text-accent transition">Приём латуни</a></li>
                <li><a href="#" className="hover:text-accent transition">Вывоз лома</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-accent transition">О нас</a></li>
                <li><a href="#prices" className="hover:text-accent transition">Цены</a></li>
                <li><a href="#faq" className="hover:text-accent transition">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-accent transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@priemloma.pro</li>
                <li>г. Подольск</li>
                <li>ул. Заводская 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 ТИТАН. Все права защищены. ИНН 5036034567 ОГРН 1095036001234</p>
          </div>
        </div>
      </footer>
    </div>
  );
}