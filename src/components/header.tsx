"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: scrolled ? '0.5rem 0' : '1rem 0',
    backgroundColor: scrolled ? 'var(--background)' : 'transparent',
    boxShadow: scrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--foreground)',
  };

  const logoSpanStyle = {
    color: 'var(--primary)',
  };

  const desktopNavStyle = {
    display: 'none',
    alignItems: 'center',
    gap: '2rem',
  };

  const navLinkStyle = {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--foreground)',
    opacity: 0.8,
    transition: 'opacity 0.2s ease',
  };

  const mobileNavContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const mobileMenuBtnStyle = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--foreground)',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mobileMenuStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--background)',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    maxHeight: mobileMenuOpen ? '300px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, padding 0.3s ease',
    borderTop: mobileMenuOpen ? '1px solid var(--border)' : 'none',
  };

  const mobileMenuInnerStyle = {
    padding: mobileMenuOpen ? '1rem' : '0 1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  };

  const mobileLinkStyle = {
    padding: '0.75rem 0',
    fontSize: '1rem',
    fontWeight: 500,
    color: 'var(--foreground)',
    opacity: 0.8,
    borderBottom: '1px solid var(--border)',
  };
  
  const lastChildStyle = {
    borderBottom: 'none',
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={containerStyle}>
        <Link href="#home" style={logoStyle}>
          <span style={logoSpanStyle}>P</span>ortfolio
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--foreground)',
                opacity: 0.8,
                transition: 'opacity 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* 모바일 컨트롤 */}
        <div style={mobileNavContainerStyle} className="mobile-nav-container">
          {/* 모바일에서만 표시되는 테마 토글 */}
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
          
          <button
            style={mobileMenuBtnStyle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div style={mobileMenuStyle}>
        <div style={mobileMenuInnerStyle}>
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                ...mobileLinkStyle,
                ...(index === NAV_ITEMS.length - 1 ? lastChildStyle : {})
              }}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .desktop-nav {
          display: none;
        }
        
        @media (minWidth: 768px) {
          .desktop-nav {
            display: flex;
          }
          
          .mobile-nav-container {
            display: none;
          }
        }
        
        @media (maxWidth: 767px) {
          .mobile-theme-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}