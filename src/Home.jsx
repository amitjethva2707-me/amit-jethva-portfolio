import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col w-full">
          <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-space-md mb-space-lg">
              <div className="flex items-center gap-2">
                <span className="font-mono-label text-mono-label text-accent uppercase tracking-widest font-semibold">01. HELLO THERE</span>
                <span className="text-text-muted font-mono-meta text-mono-meta">//</span>
                <span className="font-mono-meta text-mono-meta text-text-secondary">SYSTEM_INIT &amp; PORTFOLIO_OVERVIEW</span>
              </div>
              <div className="flex items-center gap-3 font-mono-meta text-mono-meta text-text-muted">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-muted rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  SYS.STATUS: DEPLOYED
                </span>
                <span className="hidden sm:inline">// STUDENT.DEVELOPER() · AHMEDABAD, IN</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex items-center gap-3">
                  <span className="font-mono-code text-mono-code text-text-muted uppercase tracking-wider">Hi, I'm</span>
                  <span className="px-2.5 py-1 rounded bg-surface-muted text-text-secondary font-mono-meta text-mono-meta uppercase tracking-wider shadow-sm">
                    Computer Engineering Student
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight leading-none text-text-primary">
                    Amit <span className="text-accent">Jethva</span>
                  </h1>
                  <h2 className="font-headline-md text-headline-md text-text-secondary mt-space-sm font-normal">
                    Building Intelligent Solutions.
                  </h2>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 py-space-xs">
                  <span className="px-2.5 py-1 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta shadow-sm">Machine Learning</span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="px-2.5 py-1 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta shadow-sm">Data Analytics</span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="px-2.5 py-1 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta shadow-sm">Software Development</span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="px-2.5 py-1 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta shadow-sm">Problem Solving</span>
                </div>
                
                <div className="relative pl-5 py-2 my-2 bg-surface-muted/40 rounded-r-lg">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
                  <p className="font-body-lg text-body-lg text-text-primary italic leading-relaxed">
                    “I build practical solutions at the intersection of technology, data, and real-world problems.”
                  </p>
                  <span className="font-mono-meta text-mono-meta text-text-muted block mt-1.5">// L.D. COLLEGE OF ENGINEERING · 2022–2026</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 pt-space-xs">
                  <Link className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-semibold hover:bg-accent-dark transition-colors shadow-sm" to="/projects">
                    <span>View My Work</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface text-text-primary font-mono-label text-mono-label uppercase tracking-wider font-medium hover:bg-surface-muted transition-colors shadow-sm" href="/me.pdf" download="me.pdf" target="_blank" rel="noopener noreferrer">
                    <span>Download Resume</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </a>
                </div>
                
                <div className="pt-space-md">
                  <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-widest block mb-2">// VERIFIED TECHNICAL PROFILES</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a className="group flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-muted transition-colors shadow-sm" href="https://github.com/amitjethva2707-me" rel="noopener noreferrer" target="_blank">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-text-secondary group-hover:text-accent transition-colors">code</span>
                        <span className="font-mono-label text-mono-label text-text-primary">GitHub</span>
                      </div>
                      <span className="font-mono-meta text-mono-meta text-text-muted group-hover:text-accent">↗</span>
                    </a>
                    
                    <a className="group flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-muted transition-colors shadow-sm" href="https://www.linkedin.com/in/amit-jethva-284b0236b" rel="noopener noreferrer" target="_blank">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-text-secondary group-hover:text-accent transition-colors">hub</span>
                        <span className="font-mono-label text-mono-label text-text-primary">LinkedIn</span>
                      </div>
                      <span className="font-mono-meta text-mono-meta text-text-muted group-hover:text-accent">↗</span>
                    </a>
                    
                    <a className="group flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-muted transition-colors shadow-sm" href="https://leetcode.com/u/amitjethva_008/" rel="noopener noreferrer" target="_blank">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-text-secondary group-hover:text-accent transition-colors">terminal</span>
                        <span className="font-mono-label text-mono-label text-text-primary">LeetCode</span>
                      </div>
                      <span className="font-mono-meta text-mono-meta text-text-muted group-hover:text-accent">↗</span>
                    </a>
                  </div>
                </div>
                
                <div className="pt-space-sm font-mono-meta text-mono-meta text-text-muted flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-text-secondary font-medium">LOCATION:</span> AHMEDABAD, GUJARAT, INDIA
                  <span>•</span>
                  <span className="text-text-secondary font-medium">STATUS:</span> OPEN TO OPPORTUNITIES
                </div>
                
                {/* Engineering Note Section */}
                <div className="mt-8 sm:mt-12 p-6 sm:p-8 lg:p-10 bg-surface border border-border shadow-sm rounded-xl relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 sm:gap-10">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
                  
                  {/* Left: Text Content */}
                  <div className="relative z-10 flex flex-col justify-center flex-1">
                    <h4 className="font-mono-meta text-[11px] text-accent tracking-widest uppercase mb-4 sm:mb-5 font-semibold">
                      // ENGINEERING NOTE
                    </h4>
                    <p className="font-display-hero text-xl sm:text-2xl lg:text-[28px] text-text-primary leading-tight font-normal max-w-md">
                      "Building practical solutions with data, software & problem solving."
                    </p>
                    
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 font-mono-meta text-[10px] sm:text-[11px] text-text-secondary tracking-widest uppercase">
                      <span>technology</span>
                      <span className="text-accent">•</span>
                      <span>data</span>
                      <span className="text-accent">•</span>
                      <span>software</span>
                      <span className="text-accent">•</span>
                      <span>problem solving</span>
                    </div>
                  </div>
                  
                  {/* Middle Vertical Line/Marker (Desktop only) */}
                  <div className="hidden sm:block w-px bg-border my-2 relative z-10 opacity-70">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full"></div>
                  </div>
                  
                  {/* Right: Portrait */}
                  <div className="group relative z-10 shrink-0 w-36 sm:w-44 lg:w-48 aspect-[3/4] rounded-lg border border-border/60 overflow-hidden bg-surface-muted shadow-sm ring-1 ring-black/5 transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-md hover:border-text-secondary/30 hover:ring-black/10 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <img 
                      alt="Amit Jethva" 
                      className="w-full h-full object-cover object-center transition-transform duration-[350ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:transform-none" 
                      src="/images/profile.png?v=4" 
                    />
                    {/* Subtle shine sweep effect */}
                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[600ms] ease-out group-hover:translate-x-[150%] motion-reduce:hidden pointer-events-none"></div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-xl bg-surface border border-border shadow-sm overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="px-4 py-3 bg-surface-muted flex items-center justify-between border-b border-border">
                    <div className="flex items-center gap-1.5 w-24">
                      <span className="w-3 h-3 rounded-full bg-border"></span>
                      <span className="w-3 h-3 rounded-full bg-border"></span>
                      <span className="w-3 h-3 rounded-full bg-border"></span>
                    </div>
                    <span className="font-mono-meta text-sm text-text-secondary tracking-widest font-medium uppercase">
                      ENGINEERING SNAPSHOT
                    </span>
                    <div className="flex items-center justify-end gap-2 w-24">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-accent"></span>
                      <span className="font-mono-meta text-xs text-accent uppercase font-bold tracking-widest">ONLINE</span>
                    </div>
                  </div>
                  
                  {/* Snapshot Content */}
                  <div className="relative p-6 sm:p-8 bg-surface-muted/30 border-b border-border flex flex-col overflow-hidden">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      
                      {/* CURRENTLY */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono-meta text-[10px] text-accent tracking-widest">01</span>
                          <h4 className="font-mono-meta text-[11px] text-text-muted tracking-widest uppercase">// CURRENTLY</h4>
                        </div>
                        <p className="font-display-hero text-lg text-text-primary leading-tight font-medium">Computer Engineering Student</p>
                        <p className="font-mono-meta text-[11px] text-text-secondary mt-1">L.D. College of Engineering</p>
                      </div>

                      {/* BASED IN */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono-meta text-[10px] text-accent tracking-widest">02</span>
                          <h4 className="font-mono-meta text-[11px] text-text-muted tracking-widest uppercase">// BASED IN</h4>
                        </div>
                        <p className="font-display-hero text-lg text-text-primary leading-tight font-medium">Ahmedabad, Gujarat</p>
                        <p className="font-mono-meta text-[11px] text-text-secondary mt-1">India</p>
                      </div>

                      <div className="col-span-1 sm:col-span-2 h-px bg-border/50"></div>

                      {/* FOCUS */}
                      <div className="flex flex-col sm:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono-meta text-[10px] text-accent tracking-widest">03</span>
                          <h4 className="font-mono-meta text-[11px] text-text-muted tracking-widest uppercase">// FOCUS</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1.5 border border-border bg-surface text-[10px] font-mono-meta text-text-primary tracking-widest uppercase shadow-sm">MACHINE LEARNING</span>
                          <span className="px-2 py-1.5 border border-border bg-surface text-[10px] font-mono-meta text-text-primary tracking-widest uppercase shadow-sm">DATA ANALYTICS</span>
                          <span className="px-2 py-1.5 border border-border bg-surface text-[10px] font-mono-meta text-text-primary tracking-widest uppercase shadow-sm">SOFTWARE DEVELOPMENT</span>
                          <span className="px-2 py-1.5 border border-border bg-surface text-[10px] font-mono-meta text-text-primary tracking-widest uppercase shadow-sm">PROBLEM SOLVING</span>
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-2 h-px bg-border/50"></div>

                      {/* BUILDING */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono-meta text-[10px] text-accent tracking-widest">04</span>
                          <h4 className="font-mono-meta text-[11px] text-text-muted tracking-widest uppercase">// BUILDING</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                            <span className="font-display-base text-[13px] text-text-primary font-medium tracking-wide">Faculty ERP</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                            <span className="font-display-base text-[13px] text-text-primary font-medium tracking-wide">Jarvis AI Assistant</span>
                          </div>
                        </div>
                      </div>

                      {/* PRACTICING */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono-meta text-[10px] text-accent tracking-widest">05</span>
                          <h4 className="font-mono-meta text-[11px] text-text-muted tracking-widest uppercase">// PRACTICING</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <span className="font-display-base text-[13px] text-text-secondary tracking-wide">DSA</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <span className="font-display-base text-[13px] text-text-secondary tracking-wide">Problem Solving</span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 bg-surface flex flex-col gap-5">
                    
                    {/* Focus Area */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between font-mono-meta text-mono-meta">
                        <span className="text-text-muted uppercase tracking-widest">// FOCUS</span>
                        <span className="text-text-secondary">PROFILE // ACTIVE</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 rounded bg-surface-muted border border-border text-text-primary font-mono-label text-mono-label uppercase tracking-wide shadow-sm">MACHINE LEARNING</span>
                        <span className="px-2 py-1 rounded bg-surface-muted border border-border text-text-primary font-mono-label text-mono-label uppercase tracking-wide shadow-sm">DATA ANALYTICS</span>
                        <span className="px-2 py-1 rounded bg-surface-muted border border-border text-text-primary font-mono-label text-mono-label uppercase tracking-wide shadow-sm">SOFTWARE DEVELOPMENT</span>
                        <span className="px-2 py-1 rounded bg-surface-muted border border-border text-text-primary font-mono-label text-mono-label uppercase tracking-wide shadow-sm">PROBLEM SOLVING</span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border"></div>

                    {/* Projects Area */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between font-mono-meta text-mono-meta">
                        <span className="text-text-muted uppercase tracking-widest">// PROJECTS</span>
                        <span className="text-text-secondary">SYSTEM // READY</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="group flex items-center justify-between p-2.5 rounded-lg bg-surface-muted border border-border/50 hover:border-border hover:bg-surface transition-all shadow-sm">
                          <div className="flex items-center gap-3">
                            <span className="font-mono-meta text-mono-meta text-text-muted">01</span>
                            <span className="font-mono-label text-mono-label text-text-primary group-hover:text-accent transition-colors">FACULTY ERP</span>
                          </div>
                        </div>
                        <div className="group flex items-center justify-between p-2.5 rounded-lg bg-surface-muted border border-border/50 hover:border-border hover:bg-surface transition-all shadow-sm">
                          <div className="flex items-center gap-3">
                            <span className="font-mono-meta text-mono-meta text-text-muted">02</span>
                            <span className="font-mono-label text-mono-label text-text-primary group-hover:text-accent transition-colors">JARVIS AI ASSISTANT</span>
                          </div>
                        </div>
                        <div className="group flex items-center justify-between p-2.5 rounded-lg bg-surface-muted border border-border/50 hover:border-border hover:bg-surface transition-all shadow-sm">
                          <div className="flex items-center gap-3">
                            <span className="font-mono-meta text-mono-meta text-text-muted">03</span>
                            <span className="font-mono-label text-mono-label text-text-primary group-hover:text-accent transition-colors">DSA REPOSITORY</span>
                          </div>
                        </div>
                        <div className="group flex items-center justify-between p-2.5 rounded-lg bg-surface-muted border border-border/50 hover:border-border hover:bg-surface transition-all shadow-sm">
                          <div className="flex items-center gap-3">
                            <span className="font-mono-meta text-mono-meta text-text-muted">04</span>
                            <div className="flex flex-col">
                              <span className="font-mono-label text-mono-label text-text-primary group-hover:text-accent transition-colors">SMARSHOP</span>
                              <span className="font-mono-meta text-[10px] text-text-secondary leading-none mt-1 uppercase">DATA ANALYTICS DASHBOARD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-space-xl pt-space-lg">
              <div className="flex items-center justify-between mb-3 font-mono-meta text-mono-meta text-text-muted">
                <span className="uppercase tracking-widest text-text-secondary font-semibold">SYSTEM BLUEPRINT // NARRATIVE DIRECTORY</span>
                <span>INDEX 02 → 05</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <Link className="group flex flex-col justify-between p-4 rounded-xl bg-surface hover:bg-surface-muted transition-all shadow-sm" to="/about">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-mono-label text-accent font-semibold">02 / ABOUT</span>
                    <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">arrow_forward</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-accent transition-colors">Philosophy &amp; Background</h3>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1">Engineering mindset, curiosity-driven research, and core approach to problem solving.</p>
                  </div>
                </Link>
                
                <Link className="group flex flex-col justify-between p-4 rounded-xl bg-surface hover:bg-surface-muted transition-all shadow-sm" to="/projects">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-mono-label text-accent font-semibold">03 / PROJECTS</span>
                    <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">arrow_forward</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-accent transition-colors">Featured Engineering</h3>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1">Faculty ERP, Jarvis AI Assistant, DSA Repository, and DATA ANALYTICS DASHBOARD.</p>
                  </div>
                </Link>
                
                <Link className="group flex flex-col justify-between p-4 rounded-xl bg-surface hover:bg-surface-muted transition-all shadow-sm" to="/skills">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-mono-label text-accent font-semibold">04 / SKILLS</span>
                    <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">arrow_forward</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-accent transition-colors">Tech Workbench</h3>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1">Python, C++, Machine Learning libraries, React, Node.js, and analytics tooling.</p>
                  </div>
                </Link>
                
                <Link className="group flex flex-col justify-between p-4 rounded-xl bg-surface hover:bg-surface-muted transition-all shadow-sm" to="/proof">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-label text-mono-label text-accent font-semibold">05 / PROOF</span>
                    <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">arrow_forward</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-accent transition-colors">Verified Telemetry</h3>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1">GitHub commit consistency heatmaps, LeetCode algorithmic benchmarks, and proofs.</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
    </div>
  );
}

export default Home;
