interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 사이트입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    title: "Todo 앱",
    description: "React와 로컬스토리지를 활용한 할 일 관리 애플리케이션입니다.",
    tech: ["React", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "날씨 앱",
    description: "OpenWeather API를 연동한 실시간 날씨 정보 앱입니다.",
    tech: ["React", "REST API"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
