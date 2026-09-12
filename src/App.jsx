import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Proof from './Proof';
import Education from './Education';
import Contact from './Contact';
import './index.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const getDesktopClass = (path) => 
    location.pathname === path 
      ? "px-3 py-1.5 transition-all bg-accent text-on-primary font-semibold rounded-lg shadow-sm"
      : "px-3 py-1.5 rounded-lg text-text-secondary font-mono-label text-mono-label hover:text-text-primary hover:bg-surface transition-all";

  const getMobileClass = (path) =>
    location.pathname === path
      ? "px-3 py-2 rounded-lg text-on-primary bg-accent font-mono-label text-mono-label transition-colors font-semibold"
      : "px-3 py-2 rounded-lg text-text-secondary font-mono-label text-mono-label hover:bg-surface-muted transition-colors";

  return (
    <div className="bg-background font-body-md text-text-primary min-h-screen relative flex flex-col">
      <div className="fixed inset-0 bg-tech-grid pointer-events-none opacity-60 z-0"></div>
      
      <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-[0_1px_8px_rgba(23,23,23,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-3 group" to="/">
              <span className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono-label text-mono-label text-accent font-semibold group-hover:border-accent transition-colors shadow-[1px_1px_0px_rgba(23,23,23,0.06)]">AJ</span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-text-primary leading-none">Amit Jethva</span>
                <span className="font-mono-meta text-mono-meta text-text-muted mt-1 hidden sm:block">// STUDENT.DEVELOPER() · AHMEDABAD, IN</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden xl:flex items-center gap-1 p-1 bg-surface-muted/60 border border-border rounded-xl">
            <Link aria-current={location.pathname === '/' ? 'page' : undefined} className={getDesktopClass('/')} to="/">01. Home</Link>
            <Link aria-current={location.pathname === '/about' ? 'page' : undefined} className={getDesktopClass('/about')} to="/about">02. About</Link>
            <Link aria-current={location.pathname === '/projects' ? 'page' : undefined} className={getDesktopClass('/projects')} to="/projects">03. Projects</Link>
            <Link aria-current={location.pathname === '/skills' ? 'page' : undefined} className={getDesktopClass('/skills')} to="/skills">04. Skills</Link>
            <Link aria-current={location.pathname === '/proof' ? 'page' : undefined} className={getDesktopClass('/proof')} to="/proof">05. Proof</Link>
            <Link aria-current={location.pathname === '/education' ? 'page' : undefined} className={getDesktopClass('/education')} to="/education">06. Education</Link>
            <Link aria-current={location.pathname === '/contact' ? 'page' : undefined} className={getDesktopClass('/contact')} to="/contact">07. Contact</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-surface border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-mono-meta text-mono-meta text-text-secondary">STATUS: OPEN TO WORK</span>
            </div>
            <a className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-text-primary font-mono-label text-mono-label hover:bg-surface-muted hover:border-text-primary transition-all shadow-[1px_1px_0px_rgba(23,23,23,0.06)]" href="/me.pdf" download="me.pdf" target="_blank" rel="noopener noreferrer">Resume ↓</a>
            <button 
              aria-label="Toggle Mobile Menu" 
              className="xl:hidden w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-text-primary hover:bg-surface-muted transition-colors"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <img alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-border shadow-sm" src="/images/profile.png" />
          </div>
        </div>
        
        {isDrawerOpen && (
          <div className="xl:hidden border-t border-border bg-surface px-margin-tablet py-space-md shadow-md">
            <div className="flex flex-col gap-2">
              <Link aria-current={location.pathname === '/' ? 'page' : undefined} className={getMobileClass('/')} to="/">01. Home</Link>
              <Link aria-current={location.pathname === '/about' ? 'page' : undefined} className={getMobileClass('/about')} to="/about">02. About</Link>
              <Link aria-current={location.pathname === '/projects' ? 'page' : undefined} className={getMobileClass('/projects')} to="/projects">03. Projects</Link>
              <Link aria-current={location.pathname === '/skills' ? 'page' : undefined} className={getMobileClass('/skills')} to="/skills">04. Skills</Link>
              <Link aria-current={location.pathname === '/proof' ? 'page' : undefined} className={getMobileClass('/proof')} to="/proof">05. Proof of Work</Link>
              <Link aria-current={location.pathname === '/education' ? 'page' : undefined} className={getMobileClass('/education')} to="/education">06. Education</Link>
              <Link aria-current={location.pathname === '/contact' ? 'page' : undefined} className={getMobileClass('/contact')} to="/contact">07. Contact</Link>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface-muted border border-border">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="font-mono-meta text-mono-meta text-text-secondary">STATUS: OPEN TO WORK</span>
              </div>
              <a className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-muted border border-border text-text-primary font-mono-label text-mono-label" href="/me.pdf" download="me.pdf" target="_blank" rel="noopener noreferrer">Download Resume ↓</a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 w-full pt-16 flex-1 bg-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="relative z-10 w-full bg-surface border-t border-border mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg pb-space-lg border-b border-border">
            <div className="md:col-span-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded bg-surface-muted border border-border flex items-center justify-center font-mono-label text-mono-label text-accent font-semibold">AJ</span>
                <span className="font-headline-sm text-headline-sm text-text-primary">Amit Jethva</span>
              </div>
              <p className="font-mono-meta text-mono-meta text-text-muted mt-1">Computer Engineering · L.D.C.E. Ahmedabad</p>
              <p className="font-body-sm text-body-sm text-text-secondary mt-2">Technical workbench, experimental prototypes, and systems engineering log.</p>
            </div>
            <div className="md:col-span-4 flex flex-col justify-center items-start md:items-center text-left md:text-center">
              <span className="font-mono-meta text-mono-meta text-text-muted mb-1">[SYS_STATUS // ONLINE]</span>
              <p className="font-body-md text-body-md text-text-secondary italic">"Built with passion. Always a work in progress."</p>
            </div>
            <div className="md:col-span-4 flex flex-col md:items-end gap-3">
              <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">Navigation Index</span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-left md:text-right">
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/">01. Home</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/about">02. About</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/projects">03. Projects</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/skills">04. Skills</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/proof">05. Proof</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/education">06. Education</Link>
                <Link className="font-mono-label text-mono-label text-text-secondary hover:text-accent transition-colors" to="/contact">07. Contact</Link>
              </div>
              <a className="inline-flex items-center gap-1 font-mono-label text-mono-label text-accent hover:underline mt-2" href="#">↑ Back to top</a>
            </div>
          </div>
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-meta text-mono-meta text-text-muted">
            <div>© 2026 Amit Jethva. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span>SYS_RENDER: STABLE</span>
              <span>DATA_SYNC: OK</span>
              <span>REF: LAYOUT_GRID</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
