interface Project {
  index: string
  title: string
  description: string
  tech: string[]
  year: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    index: '01',
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 사이트입니다.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024',
    github: 'https://github.com',
  },
  {
    index: '02',
    title: 'Todo 앱',
    description: 'React와 로컬스토리지를 활용한 할 일 관리 애플리케이션입니다.',
    tech: ['React', 'TypeScript'],
    year: '2024',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    index: '03',
    title: '날씨 앱',
    description: 'OpenWeather API를 연동한 실시간 날씨 정보 앱입니다.',
    tech: ['React', 'REST API'],
    year: '2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <hr className="border-t border-foreground/10 mb-16" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted block mb-4">01 — Featured Works</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none tracking-tight">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <article key={project.index} className="group">
              {/* 이미지 플레이스홀더 */}
              <div className="overflow-hidden aspect-[4/3] bg-foreground/5 mb-4">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                  <span className="text-xs uppercase tracking-widest text-muted">{project.title}</span>
                </div>
              </div>

              {/* 메타 */}
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-xs text-muted">{project.index}</span>
                <span className="text-xs text-muted">{project.year}</span>
              </div>

              <h3 className="text-sm uppercase tracking-widest mb-2">{project.title}</h3>
              <p className="text-xs text-muted leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-widest text-muted border border-foreground/20 px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
