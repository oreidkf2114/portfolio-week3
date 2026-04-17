const skills = [
  'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Node.js', 'Git', 'PostgreSQL', 'Docker',
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <hr className="border-t border-foreground/10 mb-16" />

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* 섹션 레이블 */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-widest text-muted">02 — About</span>
          </div>

          {/* 본문 */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none tracking-tight mb-10">
              About<br />Me
            </h2>
            <p className="text-sm leading-relaxed text-muted mb-4">
              안녕하세요! 저는 사용자 중심의 웹 서비스를 만드는 것을 좋아하는
              프론트엔드 개발자입니다.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              새로운 기술을 배우고 문제를 해결하는 과정을 즐기며,
              클린 코드와 좋은 사용자 경험을 추구합니다.
            </p>
          </div>

          {/* 기술 스택 */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-widest mb-6">기술 스택</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-foreground/20 px-3 py-1 text-xs uppercase tracking-widest hover:border-foreground transition-colors duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
