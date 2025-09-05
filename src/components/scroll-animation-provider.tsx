"use client";

import React, { useEffect, ReactNode } from "react";

interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  useEffect(() => {
    // 애니메이션 적용 함수
    const animateSections = () => {
      const sections = document.querySelectorAll(".section-animation");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              // 한번 애니메이션이 실행된 후에는 옵저버 해제
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      sections.forEach((section) => {
        // 이미 화면에 보이는 요소는 바로 애니메이션 적용
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.classList.add("animated");
        } else {
          observer.observe(section);
        }
      });
    };

    // 스크롤 이벤트 부드럽게 처리
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute("href");
        if (targetId && targetId !== "#") {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }
        }
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener("click", handleSmoothScroll);
    
    // 초기 애니메이션 실행
    setTimeout(animateSections, 100);

    // 클린업 함수
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return <>{children}</>;
}