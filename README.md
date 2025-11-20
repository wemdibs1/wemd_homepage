# WeMD 위엠디 에스테틱 홈페이지

React 19 + Vite + Tailwind CSS 4로 제작된 위엠디 에스테틱 공식 홈페이지입니다.

## 기술 스택

- **React 19** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS 4** - 스타일링
- **shadcn/ui** - UI 컴포넌트
- **Wouter** - 라우팅
- **TypeScript** - 타입 안정성

## 로컬 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

## Vercel 배포

1. GitHub에 저장소 생성 및 코드 푸시
2. [Vercel](https://vercel.com)에서 "New Project" 클릭
3. GitHub 저장소 연결
4. 자동으로 설정 감지됨 (Vite 프로젝트)
5. "Deploy" 클릭

### 빌드 설정 (자동 감지됨)

- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

## 프로젝트 구조

```
wemd_homepage_vercel/
├── public/              # 정적 파일 (이미지 등)
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   └── ui/        # shadcn/ui 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── contexts/      # React Context
│   ├── hooks/         # 커스텀 Hooks
│   ├── lib/           # 유틸리티 함수
│   ├── App.tsx        # 라우팅 설정
│   ├── main.tsx       # 앱 진입점
│   └── index.css      # 글로벌 스타일
├── index.html         # HTML 템플릿
├── package.json       # 의존성 관리
├── vite.config.ts     # Vite 설정
└── tailwind.config.ts # Tailwind 설정
```

## 주요 기능

- 반응형 디자인 (모바일/데스크톱)
- 스와이프 가능한 카드 슬라이더
- WeMD Core Values 소개
- 가격 안내 (얼굴/바디/맞춤 케어)
- 입점 문의 폼
- 하단 네비게이션 바

## 라이선스

© 2025 WeMD 위엠디 에스테틱. All rights reserved.
