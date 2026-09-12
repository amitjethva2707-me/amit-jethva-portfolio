import React, { useState } from 'react';

function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Interactive Stack Filter & Workbench Meta Bar */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg">
        {/* Top Monospace Tracking Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-sm border-b border-border text-mono-meta font-mono-meta text-text-muted">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">04. SKILLS</span>
            <span>//</span>
            <span className="tracking-wider">TECHNICAL STACK · CONTINUOUSLY REFINED</span>
          </div>
          <div className="flex items-center gap-4 text-mono-label font-mono-label">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              2 DOMAINS
            </span>
            <span className="text-border">|</span>
            <span>7 VERIFIED MODULES</span>
            <span className="text-border">|</span>
            <span className="text-text-secondary">v2026.04_LATEST</span>
          </div>
        </div>

        {/* Editorial Header Block */}
        <div className="py-space-xl flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-border font-mono-meta text-mono-meta text-text-secondary mb-3 shadow-[1px_1px_0px_rgba(23,23,23,0.05)]">
              <span className="material-symbols-outlined text-[14px] text-accent">terminal</span>
              <span>SYSTEM_CAPABILITIES_MANIFEST</span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-text-primary tracking-tight leading-none">
              Technologies &amp; Tools
            </h1>
            <p className="font-body-lg text-body-lg text-text-secondary mt-3">
              A verified inventory of programming libraries, data analytics tools, and core focus areas.
            </p>
          </div>

          {/* Quick Filter Chips for Ergonomic Navigation */}
          <div className="flex flex-wrap items-center gap-2 font-mono-label text-mono-label">
            <button
              onClick={() => setActiveFilter('all')}
              className={`stack-filter-btn px-3 py-1.5 rounded transition-all ${
                activeFilter === 'all'
                  ? 'bg-accent text-on-primary font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:bg-surface-muted'
              }`}
            >
              [ALL (7)]
            </button>
            <button
              onClick={() => setActiveFilter('verified')}
              className={`stack-filter-btn px-3 py-1.5 rounded transition-all ${
                activeFilter === 'verified'
                  ? 'bg-accent text-on-primary font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:bg-surface-muted'
              }`}
            >
              01. VERIFIED SKILLS
            </button>
            <button
              onClick={() => setActiveFilter('focus')}
              className={`stack-filter-btn px-3 py-1.5 rounded transition-all ${
                activeFilter === 'focus'
                  ? 'bg-accent text-on-primary font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:bg-surface-muted'
              }`}
            >
              02. FOCUS AREAS
            </button>
          </div>
        </div>
      </section>

      {/* Content Grid: Technical Workbench Layout */}
      <div className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-xl space-y-space-xl">
        {/* 01. VERIFIED SKILLS */}
        <section
          className={`domain-section flex flex-col gap-4 ${
            activeFilter === 'all' || activeFilter === 'verified' ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="font-mono-label text-mono-label px-2 py-0.5 rounded bg-surface-muted border border-border text-text-secondary font-semibold">
                01
              </span>
              <h2 className="font-headline-md text-headline-md text-text-primary">Verified Skills</h2>
            </div>
            <span className="font-mono-meta text-mono-meta text-text-muted">
              STATISTICAL MODELING, FEATURE EXTRACTION &amp; EDA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {/* NumPy */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>MODULE // 01.1</span>
                  <span className="text-text-primary">N-DIM ARRAYS</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">view_module</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">NumPy</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  High-throughput multidimensional arrays, tensor slicing, linear algebraic transformations, and vectorization.
                </p>
              </div>
            </div>

            {/* Matplotlib */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>MODULE // 01.2</span>
                  <span className="text-text-primary">PLOTTING</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">show_chart</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Matplotlib</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Fine-grained canvas construction, multi-panel diagnostic visualizations, error-band tracking, and loss curves.
                </p>
              </div>
            </div>

            {/* Seaborn */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>MODULE // 01.3</span>
                  <span className="text-text-primary">STATS_VIZ</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">bubble_chart</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Seaborn</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Exploratory data analysis, correlation heatmaps, bivariate distribution modeling, and aesthetic distribution estimation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. FOCUS AREAS */}
        <section
          className={`domain-section flex flex-col gap-4 ${
            activeFilter === 'all' || activeFilter === 'focus' ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="font-mono-label text-mono-label px-2 py-0.5 rounded bg-surface-muted border border-border text-text-secondary font-semibold">
                02
              </span>
              <h2 className="font-headline-md text-headline-md text-text-primary">Main Focus Areas</h2>
            </div>
            <span className="font-mono-meta text-mono-meta text-text-muted">
              CORE DOMAINS &amp; EXPERTISE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Machine Learning */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>FOCUS // 02.1</span>
                  <span className="text-accent font-semibold">CORE</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">psychology</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Machine Learning</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Developing predictive models, applying algorithms to data sets, and continuously refining performance.
                </p>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>FOCUS // 02.2</span>
                  <span className="text-text-primary">ANALYTICS</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">insights</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Data Analytics</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Extracting meaningful patterns from raw data, feature engineering, and translating data into actionable insights.
                </p>
              </div>
            </div>

            {/* Software Development */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>FOCUS // 02.3</span>
                  <span className="text-text-primary">ENGINEERING</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">deployed_code</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Software Development</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Building robust and scalable applications with clean architecture and modern development practices.
                </p>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors flex flex-col justify-between shadow-[2px_2px_0px_rgba(23,23,23,0.04)]">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 font-mono-meta text-mono-meta text-text-muted">
                  <span>FOCUS // 02.4</span>
                  <span className="text-text-primary">LOGIC</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[20px]">extension</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">Problem Solving</h3>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Approaching complex challenges methodically, algorithm optimization, and lateral thinking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
