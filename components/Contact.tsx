export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <hr className="border-t border-foreground/10 mb-16" />

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* 섹션 레이블 */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-widest text-muted">03 — Contact</span>
          </div>

          {/* 콘텐츠 */}
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight mb-10">
              Let's Work<br />Together
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-12 max-w-md">
              새로운 기회나 협업에 열려 있습니다.<br />언제든지 연락주세요!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors duration-200 rounded-none text-center"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors duration-200 rounded-none text-center"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <hr className="border-t border-foreground/10 mt-20 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span className="text-xs text-muted uppercase tracking-widest">© 2024 홍길동</span>
          <span className="text-xs text-muted uppercase tracking-widest">Frontend Developer · Seoul</span>
        </div>
      </div>
    </section>
  )
}
