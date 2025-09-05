# 포트폴리오 웹사이트

개인 역량, 경력, 프로젝트를 전문적으로 소개하는 1페이지 포트폴리오 웹사이트입니다.

## 구현된 기능

- 반응형 디자인: PC/태블릿/모바일 최적화
- 다크 모드 지원 (시스템 설정 기반)
- 스크롤 애니메이션: 각 섹션 진입 시 Fade-in, Slide-up 효과
- 폼 유효성 검사: Contact Form 입력값 검증
- 스무스 스크롤 네비게이션

## 기술 스택

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **UI 컴포넌트**: 커스텀 컴포넌트
- **애니메이션**: CSS 애니메이션, Intersection Observer API
- **배포**: Vercel (예정)

## 개발 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
portfolio_app/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # 앱 레이아웃
│   │   ├── page.tsx       # 메인 페이지
│   │   └── globals.css    # 전역 스타일
│   ├── components/
│   │   ├── header.tsx     # 헤더/내비게이션
│   │   ├── footer.tsx     # 푸터
│   │   ├── theme-provider.tsx # 다크모드 관리
│   │   ├── theme-toggle.tsx   # 다크모드 토글 버튼
│   │   └── sections/      # 페이지 섹션 컴포넌트
│   │       ├── hero.tsx
│   │       ├── about.tsx
│   │       ├── skills.tsx
│   │       ├── portfolio.tsx
│   │       └── contact.tsx
├── public/                # 정적 자산 (이미지 등)
├── tailwind.config.js     # Tailwind CSS 설정
└── package.json
```

## 요구사항 명세서

개인 포트폴리오 1페이지 웹사이트 기능 명세서 (v1.0)

### 1. 개요

* **목적**: 개인 역량, 경력, 프로젝트를 전문적으로 소개하는 1페이지 웹사이트
* **타겟**: 잠재 고객, 채용 담당자, 협업 파트너
* **스타일**: 미니멀 · 모던 · 전문적 (화이트/다크 모드 지원 고려)

---

### 2. 페이지 주요 섹션

1. **헤더(Header) / 내비게이션**

   * 상단 고정형
   * 로고(이니셜 또는 심볼)
   * 내비게이션 메뉴 (Home, About, Skills, Portfolio, Contact)
   * 스크롤 시 부드럽게 해당 섹션으로 이동 (Smooth Scroll)

2. **히어로(Hero) 섹션**

   * 이름, 직무/전문 분야 (예: Web Developer / UX Designer)
   * 간단한 소개 문구 (1\~2문장)
   * CTA 버튼 (예: "프로젝트 보기", "이메일 보내기")
   * 배경: 심플 패턴/그래디언트/애니메이션 효과

3. **About Me 섹션**

   * 프로필 사진
   * 자기소개 (경력 요약, 가치관, 강점)
   * 다운로드 가능한 이력서(Resume) 버튼

4. **Skills 섹션**

   * 기술 아이콘/태그 (HTML, CSS, JavaScript, React 등)
   * 숙련도 시각화 (Progress Bar, Circle Chart 등)

5. **Portfolio 섹션**

   * 주요 프로젝트 카드(Grid 레이아웃)
     * 이미지/썸네일
     * 프로젝트명 + 간략 설명
     * GitHub/Live Demo 링크 버튼
   * Hover 시 간단한 효과(줌인, 오버레이)

6. **Contact 섹션**

   * 간단한 연락 양식 (이름, 이메일, 메시지)
   * 이메일 전송 기능 (SMTP 또는 API 연동)
   * SNS 아이콘 링크 (LinkedIn, GitHub, Instagram 등)

7. **푸터(Footer)**

   * 저작권 표기
   * 빠른 링크(상단 이동 버튼 포함)
   * SNS 아이콘 반복 노출

---

### 3. 기능 요구사항

* **반응형 디자인**: PC/태블릿/모바일 최적화
* **다크 모드 지원** (토글 버튼)
* **스크롤 애니메이션**: 각 섹션 진입 시 Fade-in, Slide-up 효과
* **폼 유효성 검사**: Contact Form 입력값 검증
* **SEO 기본 메타태그**: title, description, open graph
* **퍼포먼스 최적화**: Lazy Loading(이미지), CSS/JS Minify

---

### 4. 기술 스택 제안

* **Frontend**: HTML5, CSS3, JavaScript(ES6+)
* **UI Framework(선택)**: React + TailwindCSS (또는 단순 HTML/CSS + Vanilla JS)
* **애니메이션**: Framer Motion / AOS.js
* **Contact Form 처리**: EmailJS, Formspree, 또는 백엔드 API (Node.js/Express)
* **배포**: GitHub Pages / Vercel / Netlify

---

### 5. 개발 체크리스트

* [x] 헤더/내비게이션 스크롤 이동 정상 동작
* [x] Hero 섹션 CTA 버튼 링크 정상 작동
* [x] Skills 시각화 UI 정상 출력
* [x] Portfolio 카드 Hover 효과 적용
* [x] Contact Form 데이터 전송/검증 정상 작동
* [x] 반응형 레이아웃 테스트 완료
* [x] 다크 모드 토글 정상 작동

---