import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Моковые данные фильмов
  const popularMovies = [
    {
      id: 1,
      title: "Дюна: Часть вторая",
      year: 2024,
      rating: 8.5,
      genre: "Фантастика",
      image: "https://source.unsplash.com/random/300x450?sci-fi,movie",
    },
    {
      id: 2,
      title: "Бегущий по лезвию 2049",
      year: 2017,
      rating: 8.0,
      genre: "Фантастика",
      image: "https://source.unsplash.com/random/300x450?movie,dystopia",
    },
    {
      id: 3,
      title: "Начало",
      year: 2010,
      rating: 8.8,
      genre: "Триллер",
      image: "https://source.unsplash.com/random/300x450?movie,thriller",
    },
    {
      id: 4,
      title: "Интерстеллар",
      year: 2014,
      rating: 8.6,
      genre: "Фантастика",
      image: "https://source.unsplash.com/random/300x450?movie,space",
    },
    {
      id: 5,
      title: "Джокер",
      year: 2019,
      rating: 8.4,
      genre: "Драма",
      image: "https://source.unsplash.com/random/300x450?movie,drama",
    },
    {
      id: 6,
      title: "Аватар 2: Путь воды",
      year: 2022,
      rating: 7.9,
      genre: "Фантастика",
      image: "https://source.unsplash.com/random/300x450?movie,fantasy",
    },
  ];

  // Категории фильмов
  const categories = [
    "Все",
    "Боевики",
    "Комедии",
    "Драмы",
    "Фантастика",
    "Триллеры",
    "Ужасы",
    "Мультфильмы",
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Навигационная панель */}
      <header className="sticky top-0 z-10 bg-[#1A1F2C]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="font-montserrat text-2xl font-bold tracking-tight text-white"
              >
                Киномания
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="text-sm hover:text-[#9b87f5] transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-[#9b87f5] transition-colors"
                >
                  Фильмы
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-[#9b87f5] transition-colors"
                >
                  Сериалы
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-[#9b87f5] transition-colors"
                >
                  Новинки
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-[#9b87f5] transition-colors"
                >
                  Подборки
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Input
                  type="text"
                  placeholder="Поиск фильмов и сериалов..."
                  className="w-64 bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-400 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Icon
                  name="Search"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="Bell" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white md:hidden"
              >
                <Icon name="Search" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white md:hidden"
              >
                <Icon name="Menu" size={20} />
              </Button>
              <Button className="hidden md:flex bg-[#9b87f5] hover:bg-[#8a75e4] text-white">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero секция */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1489599611389-4fcb7a2604c5?w=1920&h=1080&fit=crop')`,
            }}
          ></div>
          <div className="container mx-auto px-4 z-20 animate-slide-up">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#9b87f5] text-white text-sm font-medium rounded-full">
                  Премьера
                </span>
                <span className="text-yellow-400 text-sm font-medium">
                  ★ 8.5 IMDb
                </span>
              </div>
              <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Дюна: Часть вторая
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                Продолжение эпической саги о Поле Атрейдесе, который
                объединяется с Чани и фрименами в борьбе против Дома Харконненов
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                  Фантастика
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                  Приключения
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                  Драма
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                  2024
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#9b87f5] hover:bg-[#8a75e4] px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Icon name="Play" className="mr-3" size={20} />
                  Смотреть трейлер
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                >
                  <Icon name="Plus" className="mr-3" size={20} />В избранное
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                >
                  <Icon name="Info" className="mr-3" size={20} />
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Секция категорий */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-montserrat text-2xl font-bold">Категории</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-[#9b87f5] hover:bg-[#8a75e4]"
                      : "border-gray-700 hover:bg-gray-800 hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Секция популярных фильмов */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-montserrat text-3xl font-bold">
                Популярные фильмы
              </h2>
              <Button
                variant="link"
                className="text-[#9b87f5] hover:text-[#8a75e4] text-lg"
              >
                Смотреть все
                <Icon name="ChevronRight" className="ml-2" size={18} />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {popularMovies.map((movie, index) => (
                <Card
                  key={movie.id}
                  className="bg-gray-800/30 border-gray-700/50 overflow-hidden group hover:bg-gray-800/50 transition-all duration-300 rounded-xl backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[2/3] overflow-hidden rounded-t-xl">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                      {movie.rating}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
                      <Button className="bg-[#9b87f5] hover:bg-[#8a75e4] w-full rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Icon name="Play" className="mr-2" size={16} />
                        Смотреть
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-base truncate mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        {movie.year}
                      </span>
                      <span className="px-2 py-1 bg-gray-700/50 rounded-md text-xs">
                        {movie.genre}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Секция подписки */}
        <section className="py-24 bg-gradient-to-br from-[#1e2435] via-[#2a1f47] to-[#1A1F2C] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Безграничный мир кино
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Получите доступ к тысячам фильмов и сериалов в качестве 4K.
                Смотрите без рекламы на любых устройствах
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-[#9b87f5]" />
                  </div>
                  <span>Без рекламы</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center">
                    <Icon
                      name="Smartphone"
                      size={20}
                      className="text-[#9b87f5]"
                    />
                  </div>
                  <span>На всех устройствах</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-full flex items-center justify-center">
                    <Icon name="Crown" size={20} className="text-[#9b87f5]" />
                  </div>
                  <span>Качество 4K</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7c6ce0] hover:from-[#8a75e4] hover:to-[#6b5bd3] px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-[#9b87f5]/25 transition-all duration-300 transform hover:scale-105">
                <Icon name="Sparkles" className="mr-3" size={24} />
                Начать просмотр
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#151823] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat text-xl font-bold mb-4">
                Киномания
              </h3>
              <p className="text-gray-400 text-sm">
                Лучший сервис для просмотра фильмов и сериалов онлайн в отличном
                качестве
              </p>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">
                Разделы
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Фильмы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Сериалы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мультфильмы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аниме
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">
                Информация
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Правообладателям
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">
                Контакты
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <a
                    href="mailto:info@kinomania.ru"
                    className="hover:text-white transition-colors"
                  >
                    info@kinomania.ru
                  </a>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Киномания. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
