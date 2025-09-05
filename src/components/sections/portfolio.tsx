"use client";

import { useState, useRef, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "온라인 쇼핑몰",
    description: "React와 Node.js로 구현한 반응형 이커머스 플랫폼입니다. 결제 프로세스, 사용자 인증, 제품 관리 기능을 포함합니다.",
    category: "풀스택",
    demoUrl: "#",
    codeUrl: "https://github.com",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux"]
  },
  {
    id: 2,
    title: "포트폴리오 웹사이트",
    description: "Next.js와 TailwindCSS를 활용하여 개발한 모던 포트폴리오 웹사이트입니다. 다크모드와 반응형 디자인을 지원합니다.",
    category: "프론트엔드",
    demoUrl: "#",
    codeUrl: "https://github.com",
    skills: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    id: 3,
    title: "일정 관리 앱",
    description: "Vue.js와 Firebase를 사용하여 개발한 일정 관리 애플리케이션입니다. 실시간 데이터 동기화를 지원합니다.",
    category: "프론트엔드",
    demoUrl: "#",
    codeUrl: "https://github.com",
    skills: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "SNS API 서버",
    description: "Node.js와 GraphQL을 사용하여 개발한 소셜 네트워크 서비스 API 서버입니다. 인증, 권한 관리, 파일 업로드 기능을 포함합니다.",
    category: "백엔드",
    codeUrl: "https://github.com",
    skills: ["Node.js", "GraphQL", "PostgreSQL", "JWT", "Docker"]
  },
  {
    id: 5,
    title: "마크다운 편집기",
    description: "React와 TypeScript로 개발한 실시간 마크다운 편집기입니다. 구문 강조와 실시간 미리보기를 제공합니다.",
    category: "프론트엔드",
    demoUrl: "#",
    codeUrl: "https://github.com",
    skills: ["React", "TypeScript", "Marked.js", "CodeMirror"]
  },
  {
    id: 6,
    title: "채팅 애플리케이션",
    description: "Socket.io와 Express를 사용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 개인 메시지, 알림 기능을 포함합니다.",
    category: "풀스택",
    demoUrl: "#",
    codeUrl: "https://github.com",
    skills: ["Socket.io", "React", "Express", "MongoDB"]
  }
];

export function Portfolio() {
  const [filter, setFilter] = useState<string>("all");
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

  const categories = ["all", "프론트엔드", "백엔드", "풀스택"];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <section
      id="portfolio"
      className="section"
      style={{
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container section-animation" ref={sectionRef}>
        <div className="section-header">
          <h2>포트폴리오</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            제가 진행한 다양한 웹 개발 프로젝트를 확인해보세요
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category === "all" ? "전체" : category}
            </button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {/* 프로젝트 이미지 (이미지가 없는 경우 그라데이션 배경) */}
              <div className="project-image">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              {/* 프로젝트 정보 */}
              <div className="project-info">
                <div className="project-category">
                  {project.category}
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                {/* 사용된 기술 */}
                <div className="project-skills">
                  {project.skills.map(skill => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* 링크 버튼 */}
                <div className="project-links">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      데모 보기
                    </a>
                  )}
                  
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline"
                    >
                      코드 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>해당 카테고리에 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .section-divider {
          height: 4px;
          width: 60px;
          background-color: var(--primary);
          margin: 0.5rem auto 1rem;
        }
        
        .section-description {
          color: var(--foreground);
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .filter-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          background-color: transparent;
          border: 1px solid var(--border);
          color: var(--foreground);
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .filter-btn:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .dark .filter-btn:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .filter-btn.active {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .project-card {
          background-color: var(--card-bg);
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .dark .project-card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .project-image {
          height: 12rem;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .project-title {
          font-size: 1.25rem;
          color: var(--foreground);
          text-align: center;
        }
        
        .project-info {
          padding: 1.5rem;
        }
        
        .project-category {
          display: inline-block;
          font-size: 0.75rem;
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        
        .project-description {
          font-size: 0.875rem;
          color: var(--foreground);
          opacity: 0.8;
          margin-bottom: 1rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        
        .project-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .skill-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background-color: var(--background);
          border: 1px solid var(--border);
          border-radius: 9999px;
        }
        
        .project-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        
        .project-links .btn {
          padding: 0.5rem 0;
          text-align: center;
          font-size: 0.75rem;
        }
        
        .no-projects {
          text-align: center;
          padding: 3rem 0;
          color: var(--foreground);
          opacity: 0.7;
        }
        
        @media (min-width: 640px) {
          .filter-btn {
            padding: 0.5rem 1.25rem;
            font-size: 0.9375rem;
          }
          
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .project-links .btn {
            font-size: 0.875rem;
          }
        }
        
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}