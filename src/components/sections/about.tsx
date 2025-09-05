"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container section-animation" ref={sectionRef}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>About Me</h2>
          <div
            style={{
              height: '4px',
              width: '60px',
              backgroundColor: 'var(--primary)',
              margin: '0 auto',
            }}
          ></div>
        </div>

        <div className="about-content">
          {/* 프로필 이미지 부분 */}
          <div className="profile-image">
            <div className="image-container">
              <div className="placeholder">홍길동</div>
            </div>
          </div>

          {/* 자기소개 부분 */}
          <div className="profile-info">
            <h3>웹 개발자</h3>
            <p>
              5년 이상의 웹 개발 경험을 가진 풀스택 개발자입니다. 
              사용자 중심 설계와 성능 최적화에 중점을 두고 있으며, 
              JavaScript/TypeScript, React, Next.js, Node.js 등의 현대적인 기술 스택을 활용하여 
              웹 애플리케이션을 구축합니다.
            </p>
            <p>
              저는 지속적인 학습을 통해 최신 기술 트렌드를 따라가며, 
              문제 해결과 팀 협업에 있어 탁월한 능력을 갖추고 있습니다. 
              사용자의 필요를 깊이 이해하고 이를 기술적으로 구현하는 과정에서 
              큰 보람을 느끼고 있습니다.
            </p>
            
            {/* 개인 정보 */}
            <div className="personal-info">
              <div>
                <p><strong>이름:</strong> 홍길동</p>
                <p><strong>이메일:</strong> example@email.com</p>
              </div>
              <div>
                <p><strong>지역:</strong> 서울, 한국</p>
                <p><strong>경력:</strong> 5년+</p>
              </div>
            </div>

            {/* 이력서 다운로드 버튼 */}
            <div className="resume-btn-container">
              <Link 
                href="#" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  alert('이력서 다운로드 기능은 준비 중입니다.');
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginRight: '0.5rem' }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                이력서 다운로드
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        
        .profile-image {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .image-container {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
        }
        
        .profile-info {
          width: 100%;
          text-align: center;
        }
        
        .profile-info h3 {
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        
        .profile-info p {
          margin-bottom: 1.5rem;
          color: var(--foreground);
          opacity: 0.8;
          line-height: 1.7;
        }
        
        .personal-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
          text-align: left;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .personal-info p {
          margin-bottom: 0.5rem;
        }
        
        .resume-btn-container {
          display: flex;
          justify-content: center;
        }
        
        @media (min-width: 768px) {
          .about-content {
            flex-direction: row;
            align-items: flex-start;
          }
          
          .profile-image {
            width: 40%;
            max-width: 300px;
          }
          
          .image-container {
            width: 250px;
            height: 250px;
          }
          
          .profile-info {
            width: 60%;
            text-align: left;
          }
          
          .personal-info {
            grid-template-columns: 1fr 1fr;
            margin-left: 0;
            margin-right: 0;
          }
          
          .resume-btn-container {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}