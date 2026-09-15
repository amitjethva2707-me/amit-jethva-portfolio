import React, { Component, useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ActivityCalendar } from 'react-activity-calendar';

const LeetCodeActivity = ({ username }) => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        
        if (!isMounted) return;

        if (!data || Object.keys(data).length === 0 || data.errors) throw new Error("No data");

        const submissionMap = data.submissionCalendar || {};
        const timestamps = Object.keys(submissionMap).map(Number).sort((a, b) => a - b);
        
        const dateToCount = {};
        let maxStreak = 0;
        let currentStreak = 0;
        let prevTs = null;

        for (const ts of timestamps) {
           if (prevTs !== null) {
             const currDate = new Date(ts * 1000);
             const prevDate = new Date(prevTs * 1000);
             currDate.setHours(0,0,0,0);
             prevDate.setHours(0,0,0,0);
             const diffDays = Math.round((currDate - prevDate) / 86400000);
             
             if (diffDays === 1) {
               currentStreak++;
             } else if (diffDays > 1) {
               currentStreak = 1;
             }
           } else {
             currentStreak = 1;
           }
           if (currentStreak > maxStreak) maxStreak = currentStreak;
           prevTs = ts;

           const date = new Date(ts * 1000);
           const yyyy = date.getFullYear();
           const mm = String(date.getMonth() + 1).padStart(2, '0');
           const dd = String(date.getDate()).padStart(2, '0');
           dateToCount[`${yyyy}-${mm}-${dd}`] = submissionMap[ts];
        }

        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        
        const days = [];
        for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
           const yyyy = d.getFullYear();
           const mm = String(d.getMonth() + 1).padStart(2, '0');
           const dd = String(d.getDate()).padStart(2, '0');
           const dateStr = `${yyyy}-${mm}-${dd}`;
           const count = dateToCount[dateStr] || 0;
           
           days.push({
             date: dateStr,
             count: count,
             level: count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : count <= 5 ? 3 : 4
           });
        }
        
        setData(days);
        setStats({
          total: data.totalSolved || 0,
          easy: data.easySolved || 0,
          medium: data.mediumSolved || 0,
          hard: data.hardSolved || 0,
          streak: maxStreak,
          activeDays: timestamps.length
        });
      } catch (err) {
        console.error("LeetCode API Error:", err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    
    fetchData();
    return () => { isMounted = false; };
  }, [username]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 w-full text-text-muted bg-surface-muted/20 rounded-lg border border-border/40 border-dashed animate-pulse">
        <span className="material-symbols-outlined text-[24px] mb-2 opacity-60">hourglass_empty</span>
        <span className="font-mono-meta text-mono-meta uppercase tracking-wider">Syncing LeetCode Activity...</span>
      </div>
    );
  }

  if (error || !data.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 w-full text-text-muted bg-surface-muted/20 rounded-lg border border-border/40 border-dashed">
        <span className="material-symbols-outlined text-[24px] mb-2 opacity-60">cloud_off</span>
        <span className="font-mono-meta text-mono-meta uppercase tracking-wider">LeetCode activity unavailable</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      {/* Real Stats Bar */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-meta text-mono-meta">
          <div className="p-3 rounded-lg bg-surface-muted/40 flex flex-col items-center">
            <span className="text-text-muted mb-1 uppercase tracking-wider text-[10px]">Total Solved</span>
            <span className="text-text-primary text-[18px] font-semibold">{stats.total}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-muted/40 flex flex-col items-center">
            <span className="text-text-muted mb-1 uppercase tracking-wider text-[10px]">Max Streak</span>
            <span className="text-accent text-[18px] font-semibold">{stats.streak}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-muted/40 flex flex-col items-center">
            <span className="text-text-muted mb-1 uppercase tracking-wider text-[10px]">Active Days</span>
            <span className="text-primary text-[18px] font-semibold">{stats.activeDays}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-muted/40 flex flex-col items-center justify-center gap-0.5">
            <span className="text-emerald-600 dark:text-emerald-500 font-semibold text-[11px]">Easy: {stats.easy}</span>
            <span className="text-amber-500 font-semibold text-[11px]">Med: {stats.medium}</span>
            <span className="text-rose-500 font-semibold text-[11px]">Hard: {stats.hard}</span>
          </div>
        </div>
      )}

      {/* Activity Heatmap */}
      <div className="p-4 rounded-lg bg-surface-muted/40 overflow-x-auto text-text-secondary font-mono-meta [&_rect]:rounded-sm">
        <div className="min-w-max pb-2 flex justify-center">
          <ActivityCalendar
            data={data}
            theme={{
              light: ['#ebedf0', '#f6ce83', '#f0b03e', '#e7900c', '#c67300']
            }}
            colorScheme="light"
            labels={{
              legend: {
                less: 'Less',
                more: 'More',
              },
              months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              totalCount: `${stats ? stats.activeDays : 0} days active in the last year`
            }}
            blockSize={11}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
};

class GitHubActivityBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("GitHub Activity API/Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center py-10 w-full text-text-muted bg-surface-muted/20 rounded-lg border border-border/40 border-dashed">
          <span className="material-symbols-outlined text-[24px] mb-2 opacity-60">cloud_off</span>
          <span className="font-mono-meta text-mono-meta uppercase tracking-wider">GitHub activity unavailable</span>
        </div>
      );
    }
    return this.props.children;
  }
}

const Proof = () => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION HEADER & TECHNICAL METADATA */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-surface-muted text-accent font-mono-meta text-mono-meta font-semibold">05. PROOF OF WORK</span>
              <span className="font-mono-meta text-mono-meta text-text-muted">// VERIFIED ENGINEERING ACTIVITY & OPEN SOURCE FOOTPRINT</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg md:text-[48px] md:leading-[54px] text-text-primary tracking-tight font-semibold max-w-2xl">
              Proof of Work: Coding isn't just a skill, it's a habit.
            </h2>
          </div>
          {/* Live telemetry badge */}
          <div className="flex flex-col items-start md:items-end gap-1.5 font-mono-meta text-mono-meta text-text-secondary bg-surface-muted/70 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              <span className="text-text-primary font-medium">ACTIVITY_TRACKER: ONLINE</span>
            </div>
            <span className="text-text-muted">SYNC_TARGETS: GITHUB_API // LEETCODE_GRAPHQL</span>
            <span className="text-text-muted">LOCATION: AHMEDABAD, GUJARAT [23.0338° N, 72.5463° E]</span>
          </div>
        </div>
      </section>

      {/* EDITORIAL CALLOUT & CORE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface p-6 md:p-8 rounded-xl shadow-sm">
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-2 font-mono-label text-mono-label text-accent font-semibold uppercase">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Deliberate Practice Architecture</span>
            </div>
            <p className="font-body-lg text-body-lg text-text-primary leading-relaxed">
              Consistent daily iterations compound faster than occasional bursts of effort. Every commit and solved algorithm is a documented step toward engineering mastery.
            </p>
            <div className="flex flex-wrap items-center gap-2 font-mono-meta text-mono-meta text-text-muted">
              <span className="px-2.5 py-1 rounded bg-surface-muted text-text-secondary">SYSTEMATIC_BUILDING</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted text-text-secondary">ALGORITHMIC_RIGOR</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted text-text-secondary">OPEN_COLLABORATION</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted text-text-secondary">C++ / PYTHON_STACK</span>
            </div>
          </div>
          {/* Handwritten / Editorial Quote Block Inspired by Portfolio Sketch */}
          <div className="lg:col-span-5 bg-surface-muted/80 p-6 md:p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="font-mono-meta text-mono-meta text-text-muted flex items-center justify-between">
              <span>[MANIFESTO_NOTE // 001]</span>
              <span className="material-symbols-outlined text-text-muted text-[16px]">edit_note</span>
            </div>
            <div className="my-4 relative z-10">
              <blockquote className="font-headline-md text-headline-md italic text-text-primary leading-snug tracking-tight">
                “Discipline today.<br/>Better opportunities tomorrow.”
              </blockquote>
              <p className="font-mono-label text-mono-label text-accent font-medium mt-3 tracking-wider uppercase">
                — Amit Jethva
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 font-mono-meta text-mono-meta text-text-muted">
              <span>PERSISTENT_PROGRESSION</span>
              <span className="font-mono-code text-mono-code text-accent font-semibold">while(alive) {'{'} learn(); {'}'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY BENCHMARKS: GITHUB & LEETCODE PANELS */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GITHUB PROMINENT PROFILE CARD */}
          <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative">
            <div>
              {/* Header Bar */}
              <div className="flex items-start justify-between pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-inverse-surface text-on-primary flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-semibold tracking-tight">GitHub Activity</h3>
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                    </div>
                    <p className="font-mono-meta text-mono-meta text-text-muted mt-0.5">SOURCE CONTROL & ARCHITECTURE REPOSITORIES</p>
                  </div>
                </div>
                <a className="p-2 rounded-lg bg-surface-muted hover:bg-inverse-surface hover:text-on-primary transition-all text-text-secondary" href="https://github.com/amitjethva2707-me" rel="noopener noreferrer" target="_blank" title="Direct GitHub Link">
                  <span className="material-symbols-outlined text-[20px]">north_east</span>
                </a>
              </div>
              {/* Profile Sub-Pane */}
              <div className="bg-surface-muted/50 p-4 rounded-lg my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono-code text-mono-code font-semibold text-text-primary">@amitjethva2707-me</span>
                  <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">Computer Engineering Student · L.D. College of Engineering</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono-meta text-mono-meta px-2.5 py-1 rounded bg-surface text-text-secondary">
                  <span className="material-symbols-outlined text-[14px] text-accent">schedule</span>
                  ACTIVE_COMMITS
                </span>
              </div>
              
              {/* Realistic Systematic Commit Matrix Representation */}
              <div className="space-y-2 mt-5">
                <div className="flex items-center justify-between font-mono-meta text-mono-meta text-text-muted">
                  <span>SYSTEMATIC_CONTRIBUTION_CADENCE</span>
                </div>
                {/* Live GitHub Calendar via API with Fail-Safe Boundary */}
                <div className="p-4 rounded-lg bg-surface-muted/40 overflow-x-auto text-text-secondary font-mono-meta [&_rect]:rounded-sm">
                  <div className="min-w-max pb-2">
                    <GitHubActivityBoundary>
                      <GitHubCalendar 
                        username="amitjethva2707-me" 
                        colorScheme="light"
                        blockSize={11}
                        blockMargin={4}
                        fontSize={12}
                      />
                    </GitHubActivityBoundary>
                  </div>
                </div>
              </div>

              {/* Verified Pinned Repositories Area */}
              <div className="mt-6 space-y-3">
                <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider block">Featured Codebases & Modules</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors">
                    <div className="flex items-center gap-1.5 font-mono-label text-mono-label text-text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-accent">folder_code</span>
                      <span>Faculty ERP System</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1 line-clamp-2">Academic administrative engine for schedule optimization, role access, and student metric tracking.</p>
                    <div className="flex items-center gap-2 mt-2 font-mono-meta text-mono-meta text-text-muted">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span>Node.js / React</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors">
                    <div className="flex items-center gap-1.5 font-mono-label text-mono-label text-text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-accent">terminal</span>
                      <span>Jarvis AI Assistant</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1 line-clamp-2">Personal workflow assistant with local voice parsing, task execution, and system command orchestration.</p>
                    <div className="flex items-center gap-2 mt-2 font-mono-meta text-mono-meta text-text-muted">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span>Python / Speech API</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors">
                    <div className="flex items-center gap-1.5 font-mono-label text-mono-label text-text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-accent">memory</span>
                      <span>DSA Repository</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1 line-clamp-2">Clean algorithmic implementations covering advanced trees, heaps, graph traversal, and DP structures.</p>
                    <div className="flex items-center gap-2 mt-2 font-mono-meta text-mono-meta text-text-muted">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      <span>C++ / STL</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors">
                    <div className="flex items-center gap-1.5 font-mono-label text-mono-label text-text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-accent">query_stats</span>
                      <span>ML & Vision Notebooks</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-1 line-clamp-2">Exploratory data pipelines, CNN models for digit classification, and cybercrime pattern analysis.</p>
                    <div className="flex items-center gap-2 mt-2 font-mono-meta text-mono-meta text-text-muted">
                      <span className="w-2 h-2 rounded-full bg-accent-dark"></span>
                      <span>PyTorch / Scikit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* GitHub Action Footer */}
            <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono-meta text-mono-meta text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-accent">alt_route</span>
                <span>PUSH_PROTOCOL: SSH_SIGNED_COMMITS</span>
              </div>
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface-muted border-none text-text-primary font-mono-label text-mono-label font-semibold hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent active:bg-accent/20 transition-all shadow-sm" href="https://github.com/amitjethva2707-me" rel="noopener noreferrer" target="_blank">
                Inspect GitHub Repositories ↗
              </a>
            </div>
          </div>
          
          {/* LEETCODE PROMINENT PROFILE CARD */}
          <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative">
            <div>
              {/* Header Bar */}
              <div className="flex items-start justify-between pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-inverse-surface text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px] text-accent">code_blocks</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-semibold tracking-tight">LeetCode Activity</h3>
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                    </div>
                    <p className="font-mono-meta text-mono-meta text-text-muted mt-0.5">COMPUTATIONAL PROBLEM SOLVING & COMPLEXITY</p>
                  </div>
                </div>
                <a className="p-2 rounded-lg bg-surface-muted hover:bg-inverse-surface hover:text-on-primary transition-all text-text-secondary" href="https://leetcode.com/u/amitjethva_008/" rel="noopener noreferrer" target="_blank" title="Direct LeetCode Link">
                  <span className="material-symbols-outlined text-[20px]">north_east</span>
                </a>
              </div>
              
              {/* Profile Sub-Pane */}
              <div className="bg-surface-muted/50 p-4 rounded-lg my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-mono-code text-mono-code font-semibold text-text-primary">@amitjethva_008</span>
                  <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">Focus: Data Structures, Algorithms & Problem Solving in C++ & Python</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono-meta text-mono-meta px-2.5 py-1 rounded bg-surface text-text-secondary">
                  <span className="material-symbols-outlined text-[14px] text-accent">psychology</span>
                  SOLVING_DAILY
                </span>
              </div>

              <LeetCodeActivity username="amitjethva_008" />

              {/* Problem Solving Core Focus */}
              <div className="mt-8 space-y-3">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider block">Problem Solving // Core Focus</span>
                  <span className="font-body-sm text-body-sm text-text-secondary">Focused on algorithms, data structures & efficient problem solving.</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors border border-border/40">
                    <span className="material-symbols-outlined text-[14px] text-accent">dynamic_form</span>
                    <span className="font-mono-code text-mono-code text-text-primary text-[12px] font-medium">Dynamic Programming</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors border border-border/40">
                    <span className="material-symbols-outlined text-[14px] text-accent">account_tree</span>
                    <span className="font-mono-code text-mono-code text-text-primary text-[12px] font-medium">Graphs & Traversal</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors border border-border/40">
                    <span className="material-symbols-outlined text-[14px] text-accent">park</span>
                    <span className="font-mono-code text-mono-code text-text-primary text-[12px] font-medium">Trees & BST</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors border border-border/40">
                    <span className="material-symbols-outlined text-[14px] text-accent">manage_search</span>
                    <span className="font-mono-code text-mono-code text-text-primary text-[12px] font-medium">Binary Search & Two Pointers</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-muted/40 hover:bg-surface-muted/80 transition-colors border border-border/40">
                    <span className="material-symbols-outlined text-[14px] text-accent">terminal</span>
                    <span className="font-mono-code text-mono-code text-text-primary text-[12px] font-medium">C++ / Python</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* LeetCode Action Footer */}
            <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono-meta text-mono-meta text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-accent">speed</span>
                <span>OPTIMIZATION: TIME_O(N)_SPACE_O(1)</span>
              </div>
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface-muted border-none text-text-primary font-mono-label text-mono-label font-semibold hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent active:bg-accent/20 transition-all shadow-sm" href="https://leetcode.com/u/amitjethva_008/" rel="noopener noreferrer" target="_blank">
                Inspect LeetCode Solutions ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING LOGS & PROOF VERIFICATION PANES */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-6">
        <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 gap-4">
            <div>
              <span className="font-mono-meta text-mono-meta text-accent font-semibold">// COMMITMENT_LOG</span>
              <h3 className="font-headline-md text-headline-md text-text-primary font-semibold tracking-tight mt-1">Daily Habit & Code Principles</h3>
            </div>
            <div className="font-mono-meta text-mono-meta text-text-muted flex items-center gap-3">
              <span>STANDARD: ISO/IEC 25010</span>
              <span>•</span>
              <span>RELIABILITY FIRST</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-surface-muted/40 p-5 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <span className="material-symbols-outlined text-[20px]">dataset</span>
                  <span className="font-mono-label text-mono-label font-semibold uppercase">01. Test-Driven Habits</span>
                </div>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  Writing edge-case validations before writing algorithmic logic ensures solutions do not break silently when inputs scale.
                </p>
              </div>
              <div className="mt-4 pt-3 font-mono-meta text-mono-meta text-text-muted">
                TARGET: ZERO_REGRESSION
              </div>
            </div>
            <div className="bg-surface-muted/40 p-5 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <span className="material-symbols-outlined text-[20px]">architecture</span>
                  <span className="font-mono-label text-mono-label font-semibold uppercase">02. Modular Structure</span>
                </div>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  Separating business controllers from core logic pipelines creates scalable codebases that remain maintainable over semesters.
                </p>
              </div>
              <div className="mt-4 pt-3 font-mono-meta text-mono-meta text-text-muted">
                TARGET: HIGH_COHESION
              </div>
            </div>
            <div className="bg-surface-muted/40 p-5 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  <span className="font-mono-label text-mono-label font-semibold uppercase">03. Asymptotic Rigor</span>
                </div>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  Evaluating Time and Space complexities deliberately at each revision cycle, discarding brute-force methods early.
                </p>
              </div>
              <div className="mt-4 pt-3 font-mono-meta text-mono-meta text-text-muted">
                TARGET: MINIMAL_LATENCY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS DIRECT ACTIONS & REPOSITORY JUMP */}
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-8 mb-4">
        <div className="bg-surface-muted rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-mono-meta text-mono-meta text-text-muted">// VERIFY_PROFILES_DIRECTLY</span>
            <h3 className="font-headline-md text-headline-md text-text-primary font-semibold">Inspect source code repositories and profile timelines</h3>
            <p className="font-body-md text-body-md text-text-secondary">Open to code audits, algorithmic technical reviews, and engineering evaluations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a className="px-5 py-2.5 rounded-lg bg-surface text-text-primary font-mono-label text-mono-label font-semibold hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent active:bg-accent/20 transition-all flex items-center gap-2 shadow-sm" href="https://github.com/amitjethva2707-me" rel="noopener noreferrer" target="_blank">
              <span>View GitHub Profile</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a className="px-5 py-2.5 rounded-lg bg-surface text-text-primary font-mono-label text-mono-label font-semibold hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent active:bg-accent/20 transition-all flex items-center gap-2 shadow-sm" href="https://leetcode.com/u/amitjethva_008/" rel="noopener noreferrer" target="_blank">
              <span>View LeetCode Profile</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;
