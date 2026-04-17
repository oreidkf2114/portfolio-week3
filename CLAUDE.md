# 포트폴리오 웹페이지 프로젝트

## 프로젝트 개요

개인 포트폴리오 웹페이지를 제작하는 프로젝트입니다.
Next.js와 Tailwind CSS를 사용하는 정적 웹사이트입니다.

## 기술 스택

- **Next.js** (App Router)
- **Tailwind CSS** v3
- **TypeScript**
- 패키지 매니저: npm

## 디렉토리 구조

```
week3/
├── CLAUDE.md
├── app/
│   ├── layout.tsx        # 루트 레이아웃
│   ├── page.tsx          # 메인 페이지
│   └── globals.css       # 전역 스타일 (Tailwind directives)
├── components/           # 섹션별 컴포넌트
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── public/
│   └── images/           # 이미지 리소스
├── tailwind.config.ts
└── next.config.ts
```

## 페이지 구성 섹션

1. **Hero** — 이름, 직함, 한 줄 소개 + CTA 버튼
2. **About** — 자기소개 및 기술 스택
3. **Projects** — 프로젝트 카드 목록 (제목, 설명, 링크)
4. **Contact** — 연락처 및 소셜 링크 (GitHub, LinkedIn 등)

## 코딩 규칙

- 들여쓰기: 스페이스 2칸
- 컴포넌트 파일명: PascalCase (예: `ProjectCard.tsx`)
- 스타일은 Tailwind 유틸리티 클래스 우선 사용, 커스텀 CSS 최소화
- `var` 금지, ES6+ / TypeScript 문법 사용
- 반응형 디자인 필수 (모바일 우선: `sm:` → `md:` → `lg:`)
- 시맨틱 HTML 태그 사용 (`<section>`, `<nav>`, `<article>` 등)

## 디자인 원칙

- 색상 팔레트는 `tailwind.config.ts`의 `extend.colors`에서 중앙 관리
- 다크 모드: Tailwind `dark:` variant 활용
- 애니메이션은 `prefers-reduced-motion` 미디어 쿼리 준수
- 외부 폰트는 `next/font` (Google Fonts) 사용

## 개발 서버 실행

```bash
npm run dev   # http://localhost:3000
```

## 주의사항

- 개인정보(이메일, 전화번호)는 소스코드에 하드코딩하지 않음
- 이미지는 `alt` 속성 필수 기재 (접근성)
- 외부 라이브러리 추가 시 사용자에게 먼저 확인
