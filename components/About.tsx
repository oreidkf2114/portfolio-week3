const skills = [
  "TypeScript", "React", "Next.js", "Tailwind CSS",
  "Node.js", "Git", "PostgreSQL", "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              안녕하세요! 저는 사용자 중심의 웹 서비스를 만드는 것을 좋아하는 프론트엔드 개발자입니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              새로운 기술을 배우고 문제를 해결하는 과정을 즐기며,
              클린 코드와 좋은 사용자 경험을 추구합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
