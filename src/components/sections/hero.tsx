"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animated');
    }
  }, []);

  const heroSectionStyle = {
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '6rem 0 4rem',
  };

  const backgroundStyle = {
    position: 'absolute' as const,
    inset: 0,
    zIndex: 0,
    backgroundColor: 'var(--background)',
  };

  const contentStyle = {
    position: 'relative' as const,
    zIndex: 1,
    maxWidth: '45rem',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '1.5rem',
    color: 'var(--foreground)',
  };

  const highlightStyle = {
    color: 'var(--primary)',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
    lineHeight: 1.6,
    marginBottom: '2rem',
    color: 'var(--foreground)',
    opacity: 0.8,
  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    width: '100%',
  };

  const decorationStyle = {
    position: 'absolute' as const,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none' as const,
    opacity: 0.2,
  };

  const scrollIndicatorStyle = {
    position: 'absolute' as const,
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    color: 'var(--foreground)',
    opacity: 0.7,
    animation: 'bounce 2s infinite',
  };

  return (
    <section id="home" style={heroSectionStyle}>
      <div style={backgroundStyle}></div>
      
      <div className="container section-animation" style={contentStyle} ref={heroRef}>
        <h1 style={headingStyle}>
          안녕하세요, <br />
          <span style={highlightStyle}>웹 개발자</span> 입니다
        </h1>
        
        <p style={paragraphStyle}>
          풀스택 개발 역량을 바탕으로 사용자 중심의 웹 경험을 만드는 데 전념합니다.
          최신 기술과 디자인 트렌드를 활용하여 기능적이고 시각적으로 매력적인 웹 솔루션을 제공합니다.
        </p>
        
        <div style={buttonsContainerStyle}>
          <Link
            href="#portfolio"
            className="btn btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
          >
            프로젝트 보기
          </Link>
          
          <Link
            href="#contact"
            className="btn btn-outline"
            style={{ width: '100%', textAlign: 'center' }}
          >
            연락하기
          </Link>
        </div>
      </div>
      
      {/* 배경 장식 요소 */}
      <div style={decorationStyle}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '70%',
          height: '70%',
          background: 'linear-gradient(to bottom left, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}></div>
      </div>
      
      {/* 스크롤 다운 표시 */}
      <div style={scrollIndicatorStyle}>
        <span style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>스크롤 하세요</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
        
        @media (min-width: 640px) {
          .btn {
            width: auto !important;
          }
          
          div > .btn + .btn {
            margin-left: 1rem;
          }
        }
      `}</style>
    </section>
  );
}