import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courseData = {
  algo: {
    code: "GTU_COMP_ALGO_314",
    tagline: "// RECURSION, SORTING, DYNAMIC PROGRAMMING",
    title: "Data Structures, Advanced Sorting & Graph Algorithms",
    desc: "Deep exploration of foundational computational paradigms: self-balancing AVL trees, minimum spanning trees (Prim's, Kruskal's), shortest-path algorithms (Dijkstra, Bellman-Ford), and asymptotic Big-O trade-offs across runtime and auxiliary space.",
    tools: ["C++20", "STL Containers", "GDB Debugger", "Valgrind", "Time Complexity Profilers"]
  },
  db: {
    code: "GTU_COMP_DBMS_315",
    tagline: "// RELATIONAL ALGEBRA, INDEXING, B-TREES",
    title: "Database Management & Storage Engine Concepts",
    desc: "Architectural foundations of relational query execution plans, B-Tree index traversal, multi-version concurrency control (MVCC), normalization schemas up to BCNF, and resilient transaction log recovery algorithms.",
    tools: ["PostgreSQL", "MySQL", "SQL Explains", "ER Modeling", "Relational Algebra"]
  },
  sys: {
    code: "GTU_COMP_OS_316",
    tagline: "// KERNEL CONCURRENCY, SOCKET PROGRAMMING, VIRTUAL MEMORY",
    title: "Operating Systems, POSIX & Distributed Computer Networks",
    desc: "Study of hardware-software interaction layers including virtual memory paging, CPU round-robin scheduling, semaphores and mutex locks, alongside raw TCP/IP packet exchange, congestion windows, and subnetting.",
    tools: ["Linux POSIX API", "Bash Scripting", "Wireshark", "Socket APIs", "QEMU/GDB"]
  },
  ai: {
    code: "GTU_COMP_ML_317",
    tagline: "// GRADIENT DESCENT, LINEAR ALGEBRA, TENSORS",
    title: "Machine Learning Foundations & Statistical Computing",
    desc: "Mathematical formulations behind regression, decision trees, kernel tricks in support vector machines, backpropagation gradients, and matrix decomposition applied to real-world classification pipelines.",
    tools: ["Python", "NumPy", "Scikit-Learn", "Matplotlib", "Jupyter Notebooks"]
  }
};

const Education = () => {
  const [selectedCourse, setSelectedCourse] = useState('algo');

  const currentCourse = courseData[selectedCourse];

  return (
    <div className="flex flex-col w-full">
      {/* Top Section Title & Header Pane */}
      <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono-meta text-mono-meta text-accent px-2 py-0.5 rounded bg-surface-muted border border-border">06. EDUCATION</span>
              <span className="font-mono-meta text-mono-meta text-text-muted">// FORMAL ACADEMIC JOURNEY & FOUNDATIONAL TRAINING</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-text-primary tracking-tight">
              Learning. Growing. <span className="text-accent">Applying.</span>
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-mono-label text-mono-label text-text-secondary">SYSTEM: GTU_ACADEMIC_REGISTRY</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-text-muted font-mono-meta text-mono-meta">
              <span className="material-symbols-outlined text-[16px] text-accent">verified</span>
              <span>CURRICULUM_VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content: Bento / Technical Workbench Split */}
      <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* LEFT COLUMN: Timeline & Pillar Cards (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Timeline Anchor Entry: L.D.C.E. */}
            <div className="relative bg-surface rounded-xl p-space-lg border border-border shadow-[2px_2px_0px_rgba(23,23,23,0.06)] hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-space-sm border-b border-border">
                <span className="font-mono-meta text-mono-meta text-text-muted tracking-wider">01. PRIMARY_DEGREE // B.E. PROGRAM</span>
                <span className="font-mono-meta text-mono-meta text-accent bg-surface-muted px-2 py-0.5 rounded border border-border">CURRENT STATUS: ACTIVE STUDENT</span>
              </div>
              <div className="mt-space-md flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h2 className="font-headline-md text-headline-md text-text-primary">Bachelor of Engineering (BE)</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-headline-sm text-headline-sm text-accent font-medium">Computer Engineering</span>
                    <span className="text-text-muted font-mono-meta">/</span>
                    <span className="font-mono-label text-mono-label text-text-secondary">B.E. COMP</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end">
                  <span className="font-mono-label text-mono-label text-text-primary px-2.5 py-1 bg-surface-muted rounded border border-border">Ahmedabad, Gujarat, India</span>
                  <span className="font-mono-meta text-mono-meta text-text-muted mt-1">Full-Time Undergraduate</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-md border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-muted border border-border flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-accent">school</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono-label text-mono-label text-text-primary">L.D. College of Engineering (L.D.C.E.)</span>
                  <span className="font-mono-meta text-mono-meta text-text-muted">Established 1948 · Premier State Institution</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-text-secondary mt-space-md">
                Engaged in comprehensive, foundational engineering training emphasizing rigorous computational mechanics, hardware-software abstraction, scalable distributed system designs, and algorithmic computational efficiency.
              </p>
            </div>

            {/* Core Foundational Engineering Pillars */}
            <div className="bg-surface rounded-xl p-space-lg border border-border shadow-[2px_2px_0px_rgba(23,23,23,0.06)]">
              <div className="flex items-center justify-between pb-space-sm border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-accent">terminal</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Core Pillars of Study</h3>
                </div>
                <span className="font-mono-meta text-mono-meta text-text-muted">INDEX: COMP_SCI_05</span>
              </div>
              <div className="mt-space-md space-y-space-sm">
                {/* Pillar 1 */}
                <div className="p-3 bg-surface-muted rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="font-mono-meta text-mono-meta text-accent font-semibold pt-0.5">01.</span>
                    <div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-text-primary">Data Structures & Algorithms</h4>
                      <p className="font-body-sm text-body-sm text-text-secondary">Complexity analysis, recursive optimization, trees, graphs, and algorithmic design paradigms.</p>
                    </div>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-text-muted self-start sm:self-center px-2 py-0.5 bg-surface rounded border border-border shrink-0">CORE_ALGO</span>
                </div>
                {/* Pillar 2 */}
                <div className="p-3 bg-surface-muted rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="font-mono-meta text-mono-meta text-accent font-semibold pt-0.5">02.</span>
                    <div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-text-primary">Database Management Systems</h4>
                      <p className="font-body-sm text-body-sm text-text-secondary">Relational schema design, normalization principles, query optimization, ACID transactions, and indexing.</p>
                    </div>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-text-muted self-start sm:self-center px-2 py-0.5 bg-surface rounded border border-border shrink-0">DATA_ARCH</span>
                </div>
                {/* Pillar 3 */}
                <div className="p-3 bg-surface-muted rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="font-mono-meta text-mono-meta text-accent font-semibold pt-0.5">03.</span>
                    <div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-text-primary">Computer Networks & Distributed Systems</h4>
                      <p className="font-body-sm text-body-sm text-text-secondary">OSI model, TCP/IP socket abstractions, routing protocols, flow control, and distributed latency mitigation.</p>
                    </div>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-text-muted self-start sm:self-center px-2 py-0.5 bg-surface rounded border border-border shrink-0">NET_SYS</span>
                </div>
                {/* Pillar 4 */}
                <div className="p-3 bg-surface-muted rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="font-mono-meta text-mono-meta text-accent font-semibold pt-0.5">04.</span>
                    <div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-text-primary">Operating Systems & System Architecture</h4>
                      <p className="font-body-sm text-body-sm text-text-secondary">Process scheduling, memory hierarchies, virtual paging, concurrency synchronization, and system calls.</p>
                    </div>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-text-muted self-start sm:self-center px-2 py-0.5 bg-surface rounded border border-border shrink-0">SYS_KERNEL</span>
                </div>
                {/* Pillar 5 */}
                <div className="p-3 bg-surface-muted rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-surface transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="font-mono-meta text-mono-meta text-accent font-semibold pt-0.5">05.</span>
                    <div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-text-primary">Machine Learning & Statistical Computing</h4>
                      <p className="font-body-sm text-body-sm text-text-secondary">Supervised & unsupervised heuristics, vector mathematics, probabilistic estimators, and matrix operations.</p>
                    </div>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-text-muted self-start sm:self-center px-2 py-0.5 bg-surface rounded border border-border shrink-0">ML_STATS</span>
                </div>
              </div>
            </div>

            {/* Academic Lab & Workbench Methodology */}
            <div className="bg-surface-muted rounded-xl p-space-md border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-accent">code_blocks</span>
                </div>
                <div>
                  <div className="font-mono-label text-mono-label text-text-primary">Laboratory Practical Rigor</div>
                  <div className="font-mono-meta text-mono-meta text-text-muted">Weekly systems programming, OS kernels, and algorithmic lab sessions.</div>
                </div>
              </div>
              <Link className="px-3 py-1.5 rounded-lg bg-surface border border-border text-text-primary font-mono-label text-mono-label hover:border-accent hover:text-accent transition-all shrink-0" to="/proof-of-work">
                View Proof of Work →
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Institution Card, Monospace Registry & Philosophy (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Institution Profile Card */}
            <div className="bg-surface rounded-xl p-space-lg border border-border shadow-[2px_2px_0px_rgba(23,23,23,0.06)]">
              <div className="flex items-center justify-between pb-space-sm border-b border-border mb-space-md">
                <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">Institution Profile</span>
                <span className="font-mono-meta text-mono-meta text-text-secondary">EST. 1948</span>
              </div>
              <div className="relative w-full h-44 rounded-lg overflow-hidden border border-border mb-space-md group">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Architectural photograph of L.D. College of Engineering campus in Ahmedabad featuring classic red-brick engineering academic blocks surrounded by greenery under clean daylight in architectural technical style with terracotta undertones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnn5gzaOIrmmtvOdYcXraCg6dkpQyKo4IAsG-jW0phya1pbYqdi689y0TfxniJUuNarfWC4hwrp_EZjso45h5NdS5QFePTTHyRhNAadYAzd6rUFFcWoZ4ojsUkEd9V0tRRvEh2PhCVURI5l9g-Xg5k1UTa-Gp4PempfNvmDdhwHsPpH7SUdl8nmUHAfEa0U6bEWMmha5vXv2KAYGxezL7f4pfIoV4o8ytwqS9HXrDfcv74Z8lk6rJh"/>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono-label text-mono-label text-on-primary font-medium">L.D.C.E. Campus Hub</span>
                    <span className="font-mono-meta text-mono-meta text-on-primary/80">LAT: 23.0338° N</span>
                  </div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Lalbhai Dalpatbhai College of Engineering (L.D.C.E.) is one of Gujarat's oldest and most renowned degree engineering colleges. Founded with a mission to develop technical leadership and engineering excellence, it serves as the foundational academic ground for rigorous computing standards and regional innovation.
              </p>

              {/* Monospace Technical Registry Panel */}
              <div className="mt-space-md rounded-lg bg-surface-muted p-space-md border border-border font-mono-code text-mono-code text-text-primary">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border text-mono-meta text-text-muted">
                  <span>// SYS_REGISTRY_RECORD</span>
                  <span className="text-accent">RO_ACC_MODE</span>
                </div>
                <div className="space-y-1 text-mono-meta">
                  <div className="flex justify-between">
                    <span className="text-text-muted">INSTITUTION</span>
                    <span className="font-semibold text-text-primary">L.D. COLLEGE OF ENGINEERING</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">DEGREE</span>
                    <span className="font-semibold text-text-primary">BACHELOR OF ENGINEERING (BE)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">BRANCH</span>
                    <span className="font-semibold text-accent">COMPUTER ENGINEERING</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">LOCATION</span>
                    <span className="text-text-primary">AHMEDABAD, GUJARAT, INDIA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">AFFILIATION</span>
                    <span className="text-text-primary">GTU (GUJARAT TECH UNIV)</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-border/60">
                    <span className="text-text-muted">STATUS_FLAG</span>
                    <span className="text-accent font-semibold">REGISTERED_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Learning Philosophy Card */}
            <div className="bg-surface rounded-xl p-space-lg border border-border shadow-[2px_2px_0px_rgba(23,23,23,0.06)] relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-accent/5 rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-2 pb-space-sm border-b border-border mb-space-md">
                <span className="material-symbols-outlined text-[18px] text-accent">psychology</span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Learning Philosophy</h3>
              </div>
              <blockquote className="font-headline-md text-headline-sm text-text-primary italic leading-snug">
                "Bridging rigorous academic fundamentals with practical, modern software development and data science applications."
              </blockquote>
              <p className="font-body-sm text-body-sm text-text-secondary mt-space-md leading-relaxed">
                Theory without implementation remains abstract, while code without principled architecture degrades rapidly. The academic journey at L.D.C.E. serves as the anchor point: understanding not just <span className="text-text-primary font-medium">how</span> a library works, but the underlying OS routines, memory pointers, network packets, and mathematical bounds that govern its existence.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-space-md pt-space-md border-t border-border">
                <div className="p-2.5 bg-surface-muted rounded border border-border flex flex-col">
                  <span className="font-mono-meta text-mono-meta text-accent">DISCIPLINE</span>
                  <span className="font-mono-label text-mono-label text-text-primary mt-0.5">Foundational Depth</span>
                </div>
                <div className="p-2.5 bg-surface-muted rounded border border-border flex flex-col">
                  <span className="font-mono-meta text-mono-meta text-accent">METHODOLOGY</span>
                  <span className="font-mono-label text-mono-label text-text-primary mt-0.5">Applied Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Course Matrix Accordion / Detail Pane */}
      <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-xl">
        <div className="bg-surface rounded-xl border border-border p-space-lg shadow-[2px_2px_0px_rgba(23,23,23,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-md border-b border-border">
            <div>
              <span className="font-mono-meta text-mono-meta text-accent">TECHNICAL_COMPENDIUM</span>
              <h3 className="font-headline-md text-headline-md text-text-primary">Engineering Coursework Matrix</h3>
            </div>
            <div className="font-mono-meta text-mono-meta text-text-muted">
              SELECT SUBJECT FOR DESCRIPTOR & TOOLCHAIN LINK
            </div>
          </div>

          {/* Interactive Tab Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-space-md">
            <button 
              className={`text-left px-3 py-2.5 rounded-lg border transition-all font-mono-label text-mono-label flex items-center justify-between ${selectedCourse === 'algo' ? 'bg-surface-muted border-accent text-accent' : 'bg-surface border-border text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
              onClick={() => setSelectedCourse('algo')}
            >
              <span>01. DS & Algorithms</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
            <button 
              className={`text-left px-3 py-2.5 rounded-lg border transition-all font-mono-label text-mono-label flex items-center justify-between ${selectedCourse === 'db' ? 'bg-surface-muted border-accent text-accent' : 'bg-surface border-border text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
              onClick={() => setSelectedCourse('db')}
            >
              <span>02. DBMS & Storage</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
            <button 
              className={`text-left px-3 py-2.5 rounded-lg border transition-all font-mono-label text-mono-label flex items-center justify-between ${selectedCourse === 'sys' ? 'bg-surface-muted border-accent text-accent' : 'bg-surface border-border text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
              onClick={() => setSelectedCourse('sys')}
            >
              <span>03. OS & Networks</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
            <button 
              className={`text-left px-3 py-2.5 rounded-lg border transition-all font-mono-label text-mono-label flex items-center justify-between ${selectedCourse === 'ai' ? 'bg-surface-muted border-accent text-accent' : 'bg-surface border-border text-text-secondary hover:border-text-primary hover:text-text-primary'}`}
              onClick={() => setSelectedCourse('ai')}
            >
              <span>04. ML & Applied Math</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          {/* Course Dynamic Information Card */}
          <div className="mt-space-md p-space-lg rounded-xl bg-surface-muted border border-border">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono-meta text-mono-meta text-accent">{currentCourse.code}</span>
                  <span className="font-mono-meta text-mono-meta text-text-muted">{currentCourse.tagline}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-text-primary">{currentCourse.title}</h4>
                <p className="font-body-md text-body-md text-text-secondary mt-2">
                  {currentCourse.desc}
                </p>
              </div>
              <div className="md:w-64 shrink-0 p-3 bg-surface rounded-lg border border-border">
                <span className="font-mono-meta text-mono-meta text-text-muted uppercase">Applied Practical Tooling</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {currentCourse.tools.map((tool, index) => (
                    <span key={index} className="px-2 py-0.5 rounded bg-surface-muted border border-border font-mono-meta text-mono-meta text-text-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Forward Nav Prompt */}
      <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-space-md rounded-xl bg-surface border border-border shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-surface-muted border border-border flex items-center justify-center font-mono-label text-accent">07</span>
            <div>
              <div className="font-headline-sm text-headline-sm text-text-primary">Next: Get In Touch</div>
              <div className="font-mono-meta text-mono-meta text-text-muted">Let's connect and collaborate.</div>
            </div>
          </div>
          <Link className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-on-primary font-mono-label text-mono-label hover:bg-accent-dark transition-colors shadow-sm" to="/contact">
            <span>Proceed to 07. Contact</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Education;
