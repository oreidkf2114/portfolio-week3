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

- **DESIGN.md를 반드시 먼저 읽고 작업할 것** — 색상, 타이포그래피, 컴포넌트 패턴 모두 정의되어 있음
- 색상 팔레트는 `globals.css`의 `@theme inline` 블록에서 중앙 관리 (`--color-background`, `--color-foreground`, `--color-muted`)
- 다크 모드 없음 — 흑백 단색 디자인 (DESIGN.md 참고)
- 애니메이션은 `prefers-reduced-motion` 미디어 쿼리 준수
- 외부 폰트는 `next/font` (Google Fonts) 사용 — **Inter** 사용
- 그림자(`shadow-*`), 그라디언트, 라운드 코너 사용 금지
- 포인트 컬러(파랑, 빨강 등) 사용 금지 — 흑백 대비만으로 위계 구성
- `rounded-none` 기본, 아웃라인 버튼 스타일 사용

## 디자인 작업 지침

디자인 작업 시 아래 순서로 진행:

1. `DESIGN.md` 색상 팔레트 → `globals.css` `@theme inline`에 반영
2. `layout.tsx` → Inter 폰트 적용, Nav 컴포넌트 삽입
3. 각 섹션 컴포넌트 → DESIGN.md의 컴포넌트 패턴 적용
4. 금지 사항 체크 — `shadow-*`, `rounded-*`, `blue-*`, 그라디언트 제거

## 개발 서버 실행

```bash
npm run dev   # http://localhost:3000
```

## 주의사항

- 개인정보(이메일, 전화번호)는 소스코드에 하드코딩하지 않음
- 이미지는 `alt` 속성 필수 기재 (접근성)
- 외부 라이브러리 추가 시 사용자에게 먼저 확인
