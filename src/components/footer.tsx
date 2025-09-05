"use client";

import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* 상단 이동 버튼 */}
          <button
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
            className="top-button"
          >
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
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>

          {/* 빠른 링크 */}
          <div className="quick-links">
            <Link href="#home" className="footer-link">Home</Link>
            <Link href="#about" className="footer-link">About</Link>
            <Link href="#skills" className="footer-link">Skills</Link>
            <Link href="#portfolio" className="footer-link">Portfolio</Link>
            <Link href="#contact" className="footer-link">Contact</Link>
          </div>

          {/* SNS 아이콘 */}
          <div className="social-links">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* 저작권 */}
          <div className="copyright">
            <p>&copy; {currentYear} 포트폴리오 웹사이트. All rights reserved.</p>
            <p className="built-with">
              Built with{" "}
              <span className="tech">Next.js</span> and{" "}
              <span className="tech">CSS</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--card-bg);
          border-top: 1px solid var(--border);
          padding: 3rem 0;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .top-button {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 9999px;
          margin-bottom: 2rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .top-button:hover {
          background-color: var(--primary-dark);
        }
        
        .quick-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .footer-link {
          color: var(--foreground);
          opacity: 0.7;
          font-size: 0.9375rem;
          transition: opacity 0.2s;
        }
        
        .footer-link:hover {
          opacity: 1;
          text-decoration: underline;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 9999px;
          color: var(--foreground);
          transition: background-color 0.2s;
        }
        
        .social-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .dark .social-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .copyright {
          font-size: 0.875rem;
          color: var(--foreground);
          opacity: 0.6;
        }
        
        .built-with {
          margin-top: 0.5rem;
        }
        
        .tech {
          color: var(--primary);
          font-weight: 500;
        }
        
        @media (minWidth: 768px) {
          .quick-links {
            gap: 2rem;
          }
          
          .social-links {
            gap: 1.25rem;
          }
          
          .copyright {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </footer>
  );
}