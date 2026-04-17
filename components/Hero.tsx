export default function Hero() {
  return (
    <section id="hero" className="px-6 md:px-12 lg:px-20 pt-12 pb-0">
      <div className="max-w-screen-2xl mx-auto">
        {/* 대형 디스플레이 타이틀 */}
        <h1 className="text-[18vw] sm:text-[15vw] font-black uppercase leading-none tracking-tight mb-6">
          HGD
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <p className="text-sm text-muted uppercase tracking-widest leading-relaxed max-w-xs">
            사용자 경험을 중심으로<br />아름답고 기능적인 웹을 만듭니다
          </p>
          <a
            href="#projects"
            className="self-start sm:self-auto border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors duration-200 rounded-none"
          >
            Featured Works
          </a>
        </div>
      </div>

      {/* 풀 블리드 히어로 이미지 영역 */}
      <div className="-mx-6 md:-mx-12 lg:-mx-20">
        <div className="w-full h-[55vh] bg-foreground/5 ring-4 ring-foreground flex items-center justify-center overflow-hidden">
          <span className="text-xs uppercase tracking-widest text-muted">
            Frontend Developer · Seoul · 2024
          </span>
        </div>
      </div>
    </section>
  )
}
