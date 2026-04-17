'use client'

import { useState } from 'react'

const navLinks = ['PROJECTS', 'ABOUT', 'CONTACT']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      {/* 상단 바 */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-12">
        <a href="#hero" className="text-xs uppercase tracking-widest font-bold hover:opacity-50 transition-opacity duration-200">
          HGD
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:block text-xs uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
          >
            GET IN TOUCH
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col justify-center gap-[5px] w-6 h-6"
            aria-label="메뉴 열기"
          >
            <span className={`block h-px bg-foreground transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px bg-foreground transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-foreground transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* 하단 바 — 데스크톱 전용 */}
      <div className="hidden md:block border-t border-foreground/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-10">
          <div className="flex items-center gap-4 text-xs text-muted uppercase tracking-widest">
            <span>홍길동</span>
            <span className="opacity-20">|</span>
            <span>Frontend Developer</span>
          </div>
          <nav className="flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden border-t border-foreground/10">
          <nav className="max-w-screen-2xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
