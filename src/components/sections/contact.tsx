"use client";

import { useState, FormEvent, useRef, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 입력 시 해당 필드의 에러 메시지 제거
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }
    
    // 이메일 검증
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요";
    }
    
    // 메시지 검증
    if (!formData.message.trim()) {
      newErrors.message = "메시지를 입력해주세요";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "메시지는 최소 10자 이상 입력해주세요";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitMessage({ type: "", message: "" });
      
      try {
        // 실제 API 연동 부분 (현재는 가상의 API 호출)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 성공 메시지 설정
        setSubmitMessage({
          type: "success",
          message: "메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다."
        });
        
        // 폼 초기화
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        // 에러 메시지 설정
        setSubmitMessage({
          type: "error",
          message: "메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요."
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container section-animation" ref={sectionRef}>
        <div className="section-header">
          <h2>Contact</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            프로젝트 협업, 채용, 또는 문의사항이 있으시면 연락주세요
          </p>
        </div>

        <div className="contact-container">
          {/* 연락처 정보 */}
          <div className="contact-info">
            <div className="info-card">
              {/* 이메일 */}
              <div className="info-item">
                <div className="icon-container">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="info-title">이메일</h4>
                  <a href="mailto:example@email.com" className="info-content">
                    example@email.com
                  </a>
                </div>
              </div>

              {/* 위치 */}
              <div className="info-item">
                <div className="icon-container">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="info-title">위치</h4>
                  <p className="info-content">서울, 한국</p>
                </div>
              </div>

              {/* SNS 링크 */}
              <h4 className="sns-title">SNS</h4>
              <div className="sns-container">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sns-link"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sns-link"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sns-link"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 연락 폼 */}
          <div className="contact-form">
            <div className="form-card">
              <h3 className="form-title">메시지 보내기</h3>
              
              {submitMessage.message && (
                <div className={`alert ${submitMessage.type}`}>
                  {submitMessage.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* 이름 필드 */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      placeholder="홍길동"
                    />
                    {errors.name && (
                      <p className="error-text">{errors.name}</p>
                    )}
                  </div>

                  {/* 이메일 필드 */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>

                  {/* 메시지 필드 */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      메시지
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`form-textarea ${errors.message ? "error" : ""}`}
                      placeholder="문의사항을 입력해주세요"
                    ></textarea>
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </div>

                  {/* 제출 버튼 */}
                  <div className="form-group">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="spinner"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="spinner-circle"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="spinner-path"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          전송 중...
                        </>
                      ) : (
                        "메시지 보내기"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .contact-info {
          width: 100%;
        }
        
        .info-card {
          background-color: var(--card-bg);
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          flex-shrink: 0;
        }
        
        .info-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .info-content {
          font-size: 0.9375rem;
          color: var(--foreground);
          opacity: 0.8;
        }
        
        .sns-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .sns-container {
          display: flex;
          gap: 0.75rem;
        }
        
        .sns-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--foreground);
          transition: background-color 0.2s;
        }
        
        .sns-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .dark .sns-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .contact-form {
          width: 100%;
        }
        
        .form-card {
          background-color: var(--card-bg);
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .form-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .alert {
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        
        .alert.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .dark .alert.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .alert.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .dark .alert.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .form-grid {
          display: grid;
          gap: 1.5rem;
        }
        
        .form-group {
          width: 100%;
        }
        
        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid var(--border);
          background-color: var(--background);
          color: var(--foreground);
          font-size: 0.875rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-input.error,
        .form-textarea.error {
          border-color: #ef4444;
        }
        
        .error-text {
          font-size: 0.75rem;
          color: #ef4444;
          margin-top: 0.25rem;
        }
        
        .submit-button {
          width: 100%;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 0.375rem;
          padding: 0.75rem 1rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .submit-button:hover {
          background-color: var(--primary-dark);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .spinner-circle {
          opacity: 0.25;
        }
        
        .spinner-path {
          opacity: 0.75;
        }
        
        @media (minWidth: 768px) {
          .contact-container {
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
          }
          
          .form-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}