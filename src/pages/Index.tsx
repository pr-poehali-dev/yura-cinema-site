
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
    "Все", "Боевики", "Комедии", "Драмы", "Фантастика", 
    "Триллеры", "Ужасы", "Мультфильмы"
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Навигационная панель */}
      <header className="sticky top-0 z-10 bg-[#1A1F2C]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="font-montserrat text-2xl font-bold tracking-tight text-white">
                Киномания
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Главная</a>
                <a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Фильмы</a>
                <a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Сериалы</a>
                <a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Новинки</a>
                <a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Подборки</a>
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
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white md:hidden">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white md:hidden">
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
        <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-[-1]" 
            style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080?movie,cinema')` }}
          ></div>
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
                Дюна: Часть вторая
              </h1>
              <p className="text-lg mb-6 text-gray-200">
                Продолжение истории Пола Атрейдеса, который объединяется с Чани и фрименами, чтобы отомстить заговорщикам, разрушившим его семью.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm">Фантастика</span>
                <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm">Приключения</span>
                <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm">Драма</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#9b87f5] hover:bg-[#8a75e4]">
                  <Icon name="Play" className="mr-2" size={16} />
                  Смотреть
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить в избранное
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
                  className={index === 0 
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
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-montserrat text-2xl font-bold">Популярные фильмы</h2>
              <Button variant="link" className="text-[#9b87f5] hover:text-[#8a75e4]">
                Смотреть все
                <Icon name="ChevronRight" className="ml-1" size={16} />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {popularMovies.map((movie) => (
                <Card 
                  key={movie.id} 
                  className="bg-gray-800/50 border-gray-700 overflow-hidden group hover-scale"
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 rounded-md px-2 py-1 text-xs font-medium">
                      {movie.rating}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button className="bg-[#9b87f5] hover:bg-[#8a75e4] w-full">
                        <Icon name="Play" className="mr-2" size={14} />
                        Смотреть
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-medium text-sm truncate">{movie.title}</h3>
                    <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
                      <span>{movie.year}</span>
                      <span>{movie.genre}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Секция подписки */}
        <section className="py-16 bg-gradient-to-r from-[#1e2435] to-[#1A1F2C]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat text-3xl font-bold mb-4">Получите доступ к тысячам фильмов и сериалов</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Оформите подписку и смотрите новинки кино в отличном качестве без рекламы
            </p>
            <Button className="bg-[#9b87f5] hover:bg-[#8a75e4] px-8 py-6 text-lg">
              Оформить подписку
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#151823] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat text-xl font-bold mb-4">Киномания</h3>
              <p className="text-gray-400 text-sm">
                Лучший сервис для просмотра фильмов и сериалов онлайн в отличном качестве
              </p>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Фильмы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сериалы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мультфильмы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аниме</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правообладателям</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <a href="mailto:info@kinomania.ru" className="hover:text-white transition-colors">
                    info@kinomania.ru
                  </a>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Киномания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
