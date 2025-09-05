"use client";

import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3/SASS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "RESTful API", level: 88, category: "backend" },
  { name: "GraphQL", level: 72, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animated');
            } else {
              const target = entry.target as HTMLDivElement;
              const width = target.getAttribute('data-width');
              if (width) {
                target.style.width = `${width}%`;
                target.style.opacity = '1';
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const toolSkills = skills.filter(skill => skill.category === "tools");

  return (
    <section id="skills" className="section">
      <div className="container section-animation" ref={sectionRef}>
        <div className="section-header">
          <h2>기술 스택</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            다양한 웹 기술과 도구를 활용하여 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="skills-grid">
          {/* 프론트엔드 스킬 */}
          <div className="skill-card">
            <h3 className="skill-category">
              <span className="category-indicator frontend"></span>
              프론트엔드 개발
            </h3>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      ref={(el) => { progressRefs.current[index] = el; }}
                      className="skill-progress frontend"
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 백엔드 스킬 */}
          <div className="skill-card">
            <h3 className="skill-category">
              <span className="category-indicator backend"></span>
              백엔드 개발
            </h3>
            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      ref={(el) => { progressRefs.current[frontendSkills.length + index] = el; }}
                      className="skill-progress backend"
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 개발 도구 및 기타 */}
        <div className="skill-card tools">
          <h3 className="skill-category">
            <span className="category-indicator tools"></span>
            개발 도구 및 기타
          </h3>
          <div className="tools-grid">
            {toolSkills.map((skill) => (
              <div key={skill.name} className="tool-tag">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .skill-card {
          background-color: var(--card-bg);
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .skill-card.tools {
          margin-top: 1.5rem;
        }
        
        .skill-category {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .category-indicator {
          height: 1.5rem;
          width: 4px;
          margin-right: 0.75rem;
          border-radius: 2px;
        }
        
        .category-indicator.frontend {
          background-color: var(--primary);
        }
        
        .category-indicator.backend {
          background-color: #22c55e;
        }
        
        .category-indicator.tools {
          background-color: var(--secondary);
        }
        
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .skill-item {
          width: 100%;
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
        
        .skill-name {
          font-weight: 500;
        }
        
        .skill-bar-container {
          height: 0.5rem;
          background-color: var(--border);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          border-radius: 9999px;
          width: 0;
          opacity: 0;
          transition: width 1s ease-out, opacity 0.3s;
        }
        
        .skill-progress.frontend {
          background-color: var(--primary);
        }
        
        .skill-progress.backend {
          background-color: #22c55e;
        }
        
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .tool-tag {
          background-color: var(--background);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .skill-card {
            padding: 2rem;
          }
          
          .skill-category {
            font-size: 1.5rem;
          }
          
          .skill-header {
            font-size: 1rem;
          }
          
          .skill-bar-container {
            height: 0.625rem;
          }
          
          .tool-tag {
            padding: 0.5rem 1.25rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}