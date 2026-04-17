# 디자인 규칙

레퍼런스: 에디토리얼 미니멀리즘 스타일 (NARRATIVE Studio 포트폴리오 참고)

---

## 색상 팔레트

```ts
// tailwind.config.ts > extend.colors
colors: {
  background: '#FFFFFF',   // 순백 배경
  foreground: '#0A0A0A',   // 거의 검정 텍스트
  muted:      '#6B6B6B',   // 보조 텍스트 (네비, 서브헤딩)
  border:     '#111111',   // 테두리 / 구분선
  accent:     '#FFFFFF',   // 강조 (배경 반전 시 사용)
}
```

- 전체 배경: 흰색 (`bg-background`)
- 주 텍스트: 거의 검정 (`text-foreground`)
- 포인트 컬러 없음 — 흑백 대비만으로 위계 구성
- 사진/이미지가 유일한 컬러 요소

---

## 타이포그래피

### 폰트

```ts
// app/layout.tsx
import { Inter } from 'next/font/google'
// 대안: Space Grotesk, Neue Haas Grotesk
```

- 폰트 패밀리: **Sans-serif 그로테스크** 계열 1종만 사용
- 폰트 스타일: 이탤릭 사용 금지, Regular / Bold 두 weight만

### 타입 스케일

| 역할           | 클래스                                   | 특징                        |
|--------------|------------------------------------------|---------------------------|
| Hero 타이틀    | `text-[10vw] font-black uppercase leading-none tracking-tight` | 뷰포트 너비 기반, 풀 블리드  |
| 섹션 헤딩      | `text-4xl md:text-6xl font-bold uppercase` | 대문자 고정                 |
| 내비게이션     | `text-xs uppercase tracking-widest`      | 자간 넓게, 전부 대문자       |
| 본문           | `text-sm md:text-base font-normal leading-relaxed` | 가독성 우선               |
| 캡션 / 메타    | `text-xs text-muted`                     | 날짜, 카테고리 등           |

- **줄간격(leading)**: Hero는 `leading-none`, 본문은 `leading-relaxed`
- **자간(tracking)**: 헤딩은 `tracking-tight`, 내비/라벨은 `tracking-widest`

---

## 레이아웃

### 그리드

- 기본 컨테이너: `max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20`
- 섹션 패딩: `py-20 md:py-32`
- 컬럼 수: 12컬럼 베이스, 필요 시 `grid-cols-12` 사용

### 내비게이션 (2-row 구조)

```
[상단 바]  로고(좌) ─────────────── GET IN TOUCH  ☰
[하단 바]  이름 | 태그라인(좌) ─── 섹션링크 (우)
```

- `position: sticky`, `top-0`, `z-50`
- 배경: `bg-white/95 backdrop-blur-sm`
- 하단 바는 `md:` 이상에서만 표시

### Hero 섹션

- 헤딩: 전체 너비를 꽉 채우는 대형 텍스트 (`w-full`)
- 이미지: 헤딩 바로 아래, 좌우 여백 없는 풀 블리드 (`-mx-6 md:-mx-12 lg:-mx-20`)
- 이미지 비율: `aspect-[16/9]` 또는 `aspect-[3/2]`
- 이미지에 검정 외곽 테두리: `ring-4 ring-foreground`

---

## 컴포넌트 패턴

### 내비게이션 링크

```tsx
<a className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity duration-200">
  ABOUT
</a>
```

### 프로젝트 카드

- 이미지 + 하단 메타(번호, 제목, 연도)
- 호버 시 이미지 스케일: `hover:scale-[1.02] transition-transform duration-500`
- 테두리 없음, 여백으로만 구분

```tsx
<article className="group">
  <div className="overflow-hidden aspect-[4/3]">
    <img className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
  </div>
  <div className="mt-4 flex justify-between items-baseline">
    <span className="text-xs text-muted">01</span>
    <h3 className="text-sm uppercase tracking-widest">Project Title</h3>
    <span className="text-xs text-muted">2024</span>
  </div>
</article>
```

### CTA 버튼

- 스타일: 테두리만 있는 아웃라인 또는 배경 반전(검정 배경 + 흰 텍스트)
- 라운드 없음: `rounded-none`

```tsx
// 아웃라인
<button className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors duration-200">
  GET IN TOUCH
</button>
```

### 구분선

```tsx
<hr className="border-t border-foreground/10 my-16" />
```

---

## 이미지 처리

- `object-fit: cover` 필수
- 흑백 필터 옵션: `grayscale hover:grayscale-0 transition-all duration-500`
- 외곽 프레임: 전체 페이지를 감싸는 검정 테두리 `p-2 md:p-4 border-4 border-foreground` (선택)
- `alt` 속성 필수

---

## 애니메이션

- 원칙: 모션 최소화, 전환은 `opacity` / `transform` 만 사용
- 기본 duration: `duration-200` (UI 반응), `duration-500` (이미지/레이아웃)
- `prefers-reduced-motion` 준수:

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; }
}
```

- 페이지 진입 애니메이션: fade-up (translateY + opacity), stagger 적용

---

## 간격 토큰

| 토큰   | 값          | 용도                  |
|--------|-------------|----------------------|
| `gap-2`  | 8px       | 인라인 요소 간격       |
| `gap-6`  | 24px      | 카드 내부 요소         |
| `gap-12` | 48px      | 카드 사이              |
| `gap-20` | 80px      | 섹션 간               |
| `gap-32` | 128px     | 대형 섹션 여백         |

---

## 금지 사항

- 그림자(`shadow-*`) 사용 금지 — 평면적 디자인 유지
- 그라디언트 배경 금지
- 라운드 코너 최소화 (`rounded-none` 기본)
- 포인트 컬러(빨강, 파랑 등) 사용 금지
- 아이콘 라이브러리 남용 금지 — 텍스트 링크 우선
