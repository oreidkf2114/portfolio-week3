export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          안녕하세요, <span className="text-blue-600 dark:text-blue-400">홍길동</span>입니다
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Frontend Developer
        </p>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 mb-8">
          사용자 경험을 중심으로 아름답고 기능적인 웹을 만듭니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
