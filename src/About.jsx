import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col w-full">

{/*  Top Technical Header Banner  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-8 pb-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-accent bg-accent/10 font-mono-meta text-mono-meta font-semibold tracking-wider">
            02. ABOUT
          </span>
<span className="font-mono-meta text-mono-meta text-text-muted">
            // PHILOSOPHY, MINDSET &amp; BACKGROUND · L.D.C.E.
          </span>
</div>
<h1 className="font-display-hero text-display-hero tracking-tight text-text-primary">
          More than just <span className="text-accent underline decoration-accent/30 underline-offset-8">code.</span>
</h1>
</div>
<div className="flex items-center gap-4 bg-surface-muted/70 p-3 rounded-xl shadow-sm">
<div className="flex flex-col">
<span className="font-mono-meta text-mono-meta text-text-muted">SYS_KERNEL</span>
<span className="font-mono-label text-mono-label text-text-primary font-semibold">PYTHON 3.11 // LINUX</span>
</div>
<div className="w-px h-8 bg-border"></div>
<div className="flex flex-col">
<span className="font-mono-meta text-mono-meta text-text-muted">UPTIME_METRIC</span>
<span className="font-mono-label text-mono-label text-accent font-semibold">99.8% DISCIPLINE</span>
</div>
</div>
</div>
</section>
{/*  Editorial Split Narrative  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Column: Story & Specs  */}
<div className="lg:col-span-6 flex flex-col gap-6">
<div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full pointer-events-none"></div>
<div className="font-mono-meta text-mono-meta text-text-muted mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            [NARRATIVE_LOG // STATEMENT_01]
          </div>
<p className="font-body-lg text-body-lg text-text-primary leading-relaxed font-medium mb-4">
            I'm a Computer Engineering student at L.D. College of Engineering, passionate about machine learning, data, web technologies, software development, and practical problem solving.
          </p>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
            I enjoy turning complex technical concepts into real-world applications and continuously learning new paradigms. Rather than chasing superficial hype, my focus is on robust software engineering, scalable architectures, and applied intelligent systems.
          </p>
{/*  Technical Specs Table  */}
<div className="bg-surface-muted/60 rounded-lg p-5">
<div className="flex items-center justify-between pb-3 mb-3">
<span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">Parameter Matrix</span>
<span className="font-mono-meta text-mono-meta text-accent">SPECS_STABLE</span>
</div>
<dl className="space-y-2.5 font-mono-meta text-mono-meta">
<div className="flex justify-between items-baseline gap-2">
<dt className="text-text-muted">INSTITUTION</dt>
<dd className="text-text-primary font-medium text-right">L.D. College of Engineering</dd>
</div>
<div className="flex justify-between items-baseline gap-2">
<dt className="text-text-muted">DEPARTMENT</dt>
<dd className="text-text-primary font-medium text-right">Computer Engineering (UG)</dd>
</div>
<div className="flex justify-between items-baseline gap-2">
<dt className="text-text-muted">LOCATION</dt>
<dd className="text-text-primary font-medium text-right">Ahmedabad, Gujarat, India</dd>
</div>
<div className="flex justify-between items-baseline gap-2">
<dt className="text-text-muted">GEO_COORDINATES</dt>
<dd className="text-accent font-medium text-right">23.0225° N, 72.5714° E</dd>
</div>
<div className="flex justify-between items-baseline gap-2 pt-2">
<dt className="text-text-muted">CORE_DOMAINS</dt>
<dd className="text-text-primary font-medium text-right">ML · Analytics · Full-Stack</dd>
</div>
</dl>
</div>
</div>
{/*  Handwritten Sticky Note Metric Banner  */}
<div className="bg-surface-container-high/60 rounded-xl p-5 shadow-sm flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-accent text-2xl">draw</span>
<div>
<span className="font-headline-sm text-headline-sm text-text-primary block">"Curiosity drives progress."</span>
<span className="font-mono-meta text-mono-meta text-text-muted">// Written note taped to secondary monitor</span>
</div>
</div>
<span className="font-mono-meta text-mono-meta bg-surface px-2.5 py-1 rounded text-text-secondary uppercase">Ref: Daily Mantra</span>
</div>
</div>
{/*  Right Column: Visual Workbench & Code Block  */}
<div className="lg:col-span-6 flex flex-col gap-6">
{/*  Interactive Workbench Card  */}
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col">
{/*  Card Header Bar  */}
<div className="bg-surface-muted px-4 py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-accent/70 inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-text-muted/40 inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-text-muted/20 inline-block"></span>
<span className="font-mono-meta text-mono-meta text-text-muted ml-2">workbench://amit_desktop/workspace</span>
</div>
<span className="font-mono-meta text-mono-meta text-accent">ACTIVE_SESSION</span>
</div>
{/*  Image Preview Container with Overlays  */}
<div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-muted">
<img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-alt="Minimalist modern engineering workbench setup with an open laptop showing terminal scripts and Python code, a steaming ceramic coffee mug, notebook with annotations 'Ideas to Impact', soft neutral studio lighting, warm off-white and charcoal tones with subtle terracotta accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe18b6Z-yzjy0SFpg0ZzIBAuFu80Bl_pZ4HDlo-1wIpZ5ROw8OSQcBevLbu35Ya8vMSrh4vUZCaKNJ0lE6X7cEicihwzYj3ozKwNdHcCEez8S4m-pGHWj9XKczVxR_ChWCFjZ9KxqYqDE8lAj1xmEccZ97EUBZCb2HswTAqG_Isgqanyo9WSiFggeAsXA4w3PickdwhyEhZkMAG6mAs04AquKQ_5T6blrdhgPkD-JeoqPzrSYtWHXm"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-5 text-on-primary">
<div className="flex items-center justify-between">
<div>
<span className="font-mono-meta text-mono-meta text-accent-dark bg-surface/90 px-2 py-0.5 rounded font-semibold">DESK_STATION</span>
<p className="font-headline-sm text-headline-sm text-surface font-semibold mt-1">L.D.C.E. Research Bench</p>
</div>
<div className="text-right font-mono-meta text-mono-meta text-surface-container-high">
<span>LATENCY: 12ms</span><br/>
<span>MODEL_READY: TRUE</span>
</div>
</div>
</div>
</div>
{/*  Monospace Code Terminal  */}
<div className="bg-inverse-surface text-surface-bright p-5 rounded-b-xl flex flex-col gap-3 font-mono-code text-mono-code">
<div className="flex items-center justify-between pb-2 text-text-muted font-mono-meta text-mono-meta">
<span>engineer_model.py</span>
<span>Python 3.11</span>
</div>
<pre className="overflow-x-auto text-surface-container-high leading-relaxed text-[12px] sm:text-[13px]"><span className="text-accent">class</span> <span className="text-tertiary-fixed font-semibold">Engineer</span>:
    <span className="text-accent">def</span> <span className="text-tertiary-fixed">__init__</span>(self):
        self.name = <span className="text-tertiary-fixed-dim">"Amit Jethva"</span>
        self.college = <span className="text-tertiary-fixed-dim">"L.D. College of Engineering"</span>
        self.focus = [<span className="text-tertiary-fixed-dim">"ML"</span>, <span className="text-tertiary-fixed-dim">"Data Analytics"</span>, <span className="text-tertiary-fixed-dim">"Software Dev"</span>]

    <span className="text-accent">def</span> <span className="text-tertiary-fixed">execute</span>(self):
        <span className="text-accent">return</span> <span className="text-tertiary-fixed-dim">"Learn -&gt; Build -&gt; Solve -&gt; Refine"</span>

<span className="text-text-muted"># Initialize and compile instance</span>
amit = Engineer()
print(amit.execute())</pre>
</div>
</div>
{/*  Metric Sparkline / Quick Activity Badge  */}
<div className="bg-surface rounded-xl p-5 shadow-sm flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
<span className="material-symbols-outlined text-xl">insights</span>
</div>
<div>
<span className="font-mono-label text-mono-label text-text-primary block font-semibold">Iterative Execution Flow</span>
<span className="font-mono-meta text-mono-meta text-text-muted">Continuous validation through code and data</span>
</div>
</div>
<div className="hidden sm:block text-right font-mono-meta text-mono-meta text-accent font-semibold">
            STATUS: ACTIVE // Q2
          </div>
</div>
</div>
</div>
</section>
{/*  Section 2: Core Engineering Principles  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
{/*  Header  */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8">
<div>
<div className="flex items-center gap-2 font-mono-meta text-mono-meta text-accent font-semibold mb-1">
<span className="w-2 h-2 rounded-full bg-accent"></span>
<span>ETHOS &amp; PROTOCOL</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">
          Engineering Principles // How I Think &amp; Work
        </h2>
</div>
<span className="font-mono-meta text-mono-meta text-text-muted mt-2 sm:mt-0">
        [3 RULES OF ENGAGEMENT]
      </span>
</div>
{/*  3 Editorial Principles Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Principle 01  */}
<div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-mono-meta text-mono-meta px-2.5 py-1 rounded bg-surface-muted text-text-secondary font-semibold group-hover:bg-accent group-hover:text-on-primary transition-colors">
              RULE // 01
            </span>
<div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
<span className="material-symbols-outlined text-xl">psychology</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Curious
          </h3>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            Always eager to learn, deconstruct complex systems, and explore emerging technologies beyond the syllabus. I treat every technical unknown as an invitation to investigate.
          </p>
</div>
<div className="mt-8 pt-4">
<span className="font-mono-meta text-mono-meta text-accent flex items-center gap-1 font-medium">
            → FIRST-PRINCIPLES DECONSTRUCTION
          </span>
</div>
</div>
{/*  Principle 02  */}
<div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-mono-meta text-mono-meta px-2.5 py-1 rounded bg-surface-muted text-text-secondary font-semibold group-hover:bg-accent group-hover:text-on-primary transition-colors">
              RULE // 02
            </span>
<div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
<span className="material-symbols-outlined text-xl">published_with_changes</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Consistent
          </h3>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            Believes in steady, daily progress, disciplined problem-solving, and continuous incremental improvement. Great systems are not made overnight; they are refined through routine commits.
          </p>
</div>
<div className="mt-8 pt-4">
<span className="font-mono-meta text-mono-meta text-accent flex items-center gap-1 font-medium">
            → 1% DAILY REPETITION &amp; GROWTH
          </span>
</div>
</div>
{/*  Principle 03  */}
<div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-mono-meta text-mono-meta px-2.5 py-1 rounded bg-surface-muted text-text-secondary font-semibold group-hover:bg-accent group-hover:text-on-primary transition-colors">
              RULE // 03
            </span>
<div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
<span className="material-symbols-outlined text-xl">target</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Impact Driven
          </h3>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            Focused on building solutions that create tangible, measurable utility for real people and real-world workflows. Software must solve genuine pain points, not just satisfy vanity metrics.
          </p>
</div>
<div className="mt-8 pt-4">
<span className="font-mono-meta text-mono-meta text-accent flex items-center gap-1 font-medium">
            → PRAGMATIC UTILITY OVER NOISE
          </span>
</div>
</div>
</div>
</section>
{/*  Technical Workbench Callout / Hardware & Stack Matrix  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-8">
<div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div>
<span className="font-mono-meta text-mono-meta text-text-muted uppercase">01 // CORE ENVIRONMENT</span>
<p className="font-body-md text-body-md text-text-primary font-semibold mt-1">Arch &amp; Ubuntu LTS</p>
<p className="font-mono-meta text-mono-meta text-text-secondary mt-1">Terminal-centric, Neovim, Git pipelines</p>
</div>
<div>
<span className="font-mono-meta text-mono-meta text-text-muted uppercase">02 // DATA ENGINE</span>
<p className="font-body-md text-body-md text-text-primary font-semibold mt-1">NumPy, Pandas, Scikit</p>
<p className="font-mono-meta text-mono-meta text-text-secondary mt-1">Exploratory data analysis &amp; model tuning</p>
</div>
<div>
<span className="font-mono-meta text-mono-meta text-text-muted uppercase">03 // APPLICATION LAYER</span>
<p className="font-body-md text-body-md text-text-primary font-semibold mt-1">Modern React &amp; Node</p>
<p className="font-mono-meta text-mono-meta text-text-secondary mt-1">Tailwind CSS, clean RESTful APIs</p>
</div>
<div>
<span className="font-mono-meta text-mono-meta text-text-muted uppercase">04 // LAB VALUES</span>
<p className="font-body-md text-body-md text-accent font-semibold mt-1">Clean Schema, Zero Hype</p>
<p className="font-mono-meta text-mono-meta text-text-secondary mt-1">Reproducible experiments and readable code</p>
</div>
</div>
</div>
</section>
{/*  Direct CTA to Projects  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-12 mb-8">
<div className="bg-surface rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute -right-16 -bottom-16 w-64 h-64 bg-accent/5 rounded-full pointer-events-none"></div>
<div className="flex flex-col max-w-xl">
<span className="font-mono-meta text-mono-meta text-accent font-semibold tracking-wider mb-2">
          NEXT DESTINATION // 03. PROJECTS
        </span>
<h3 className="font-headline-lg text-headline-lg text-text-primary">
          Ready to see the theories put into production?
        </h3>
<p className="font-body-md text-body-md text-text-secondary mt-2">
          Review deployed cybercrime prediction engines, handwritten digit classifiers, responsive applications, and full-stack utilities.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto z-10">
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-on-primary font-mono-label text-mono-label font-semibold uppercase hover:bg-accent-dark transition-all shadow-sm" data-path="projects" to="/projects">
<span>Explore Selected Projects</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</Link>
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-muted text-text-primary font-mono-label text-mono-label font-semibold uppercase hover:bg-border transition-all" data-path="contact" to="/contact">
<span>Start a Discussion</span>
</Link>
</div>
</div>
</section>

    </div>
  );
}

export default About;
