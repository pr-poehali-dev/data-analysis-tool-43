export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ШВЕЙЦАРСКИЙ ДИЗАЙН
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Принципы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              История
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Итоги
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Урок / Графический дизайн</p>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              SWISS
              <br />
              STYLE
            </h1>
            <p className="text-xl max-w-xl">
              Швейцарский интернациональный стиль — направление в дизайне, возникшее в 1950-х годах. Ясность, порядок и функциональность как основа любой визуальной коммуникации.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute top-8 left-8 text-white font-bold text-6xl leading-none tracking-tighter">
                1950<br />—<br />NOW
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section — Принципы */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ПРИНЦИПЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Принцип 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-7xl font-bold group-hover:text-white transition-colors">01</span>
                  <span className="text-black font-bold uppercase tracking-widest mt-2 group-hover:text-white transition-colors text-sm">Сетка</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Модульная сетка</h3>
              <p className="text-neutral-400">Все элементы выстраиваются по строгой математической сетке. Никакого хаоса — только система и порядок.</p>
            </div>

            {/* Принцип 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-7xl font-bold group-hover:text-white transition-colors">02</span>
                  <span className="text-black font-bold uppercase tracking-widest mt-2 group-hover:text-white transition-colors text-sm">Гротеск</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Гротескная типографика</h3>
              <p className="text-neutral-400">Шрифты без засечек — Helvetica, Univers, Akzidenz-Grotesk. Читабельность превыше декоративности.</p>
            </div>

            {/* Принцип 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-7xl font-bold group-hover:text-white transition-colors">03</span>
                  <span className="text-black font-bold uppercase tracking-widest mt-2 group-hover:text-white transition-colors text-sm">Функция</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Форма следует функции</h3>
              <p className="text-neutral-400">Никаких лишних украшений. Каждый элемент должен нести смысл и решать коммуникационную задачу.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section — История */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ИСТОРИЯ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold tracking-tighter">1957</div>
                    <div className="text-sm uppercase tracking-widest mt-2">Helvetica</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Швейцарский стиль сложился в 1950-х годах в городах Цюрих и Базель. Дизайнеры стремились создать универсальный визуальный язык, понятный без знания конкретного языка и культуры.
              </p>
              <p className="mb-6">
                Ключевые фигуры — Йозеф Мюллер-Брокманн, Армин Хофманн, Макс Билл. Именно в этот период была создана Helvetica — один из самых известных шрифтов в истории дизайна.
              </p>
              <p className="mb-6">
                Стиль повлиял на корпоративный дизайн, навигационные системы и интерфейсы по всему миру. Логотипы крупнейших компаний и знаки метро многих городов созданы на его основе.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Характеристики</h3>
                  <ul className="space-y-2">
                    <li>Модульная сетка</li>
                    <li>Левое выравнивание</li>
                    <li>Асимметрия</li>
                    <li>Чёрно-белая палитра</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Мастера стиля</h3>
                  <ul className="space-y-2">
                    <li>Й. Мюллер-Брокманн</li>
                    <li>Армин Хофманн</li>
                    <li>Макс Билл</li>
                    <li>Эмиль Рудер</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section — Итоги */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ИТОГИ</h2>
              <p className="text-xl mb-8">Швейцарский стиль актуален по сей день — он лежит в основе современного UI/UX-дизайна и фирменных стилей.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold leading-none">→</span>
                  <p>Сетка и типографика — базовые инструменты любого дизайнера</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold leading-none">→</span>
                  <p>Функциональность важнее декоративности</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold leading-none">→</span>
                  <p>Хороший дизайн — незаметный дизайн</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold leading-none">→</span>
                  <p>Швейцарский стиль — отправная точка для изучения графического дизайна</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-2 border-white p-8">
                <h3 className="text-sm uppercase tracking-widest mb-6">Вопросы для обсуждения</h3>
                <ul className="space-y-4">
                  <li className="border-b border-white/30 pb-4">Где вы встречали швейцарский стиль в повседневной жизни?</li>
                  <li className="border-b border-white/30 pb-4">Почему Helvetica до сих пор популярна?</li>
                  <li className="border-b border-white/30 pb-4">Как принципы Swiss Style применяются в мобильных интерфейсах?</li>
                  <li>Какой из принципов кажется вам наиболее важным и почему?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Урок по швейцарскому стилю — Графический дизайн</p>
          <div className="flex space-x-8">
            <span className="text-sm uppercase tracking-widest text-neutral-400">Müller-Brockmann</span>
            <span className="text-sm uppercase tracking-widest text-neutral-400">Hofmann</span>
            <span className="text-sm uppercase tracking-widest text-neutral-400">Bill</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
