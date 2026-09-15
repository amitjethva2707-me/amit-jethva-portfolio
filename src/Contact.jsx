import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [copyState, setCopyState] = useState('Copy');
  const [messageLen, setMessageLen] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const subjectInputRef = useRef(null);

  const emailVal = 'amitjethva2707@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailVal)
      .then(() => {
        setCopyState('Copied!');
        setTimeout(() => setCopyState('Copy'), 2000);
      })
      .catch(() => {
        // Fallback
        const temp = document.createElement('input');
        temp.value = emailVal;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        setCopyState('Copied!');
        setTimeout(() => setCopyState('Copy'), 2000);
      });
  };

  const handleIntentClick = (intent) => {
    setSelectedIntent(intent);
    setSubject(intent);
    if (subjectInputRef.current) {
      subjectInputRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormStatus('submitting');
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing.');
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      setSelectedIntent('');
      setMessageLen(0);
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-space-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-surface-muted text-accent font-mono-label text-mono-label font-semibold tracking-wider">
                08. CONTACT
              </span>
              <span className="font-mono-meta text-mono-meta text-text-muted">// INBOX DISPATCH · AHMEDABAD, GUJARAT, INDIA</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg md:text-[48px] md:leading-[56px] text-text-primary tracking-tight">
              Contact: Let's build something <span className="text-accent underline decoration-border decoration-2 underline-offset-8">great</span>.
            </h2>
          </div>
          <div className="flex flex-col md:items-end text-left md:text-right font-mono-meta text-mono-meta text-text-muted">
            <span className="inline-flex items-center gap-1.5 text-text-primary font-mono-label text-mono-label">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              ACCEPTING NEW INQUIRIES
            </span>
            <span className="mt-1">LOCAL TIME: IST (UTC+05:30)</span>
          </div>
        </div>

        {/* Main 12-Column Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
          {/* Left Column (5 Cols) — Direct Channels & Context */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Intro Card */}
            <div className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2">
                <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">[CHANNEL_REGISTRY // 01]</span>
                <span className="font-mono-label text-mono-label text-accent font-semibold">GET IN TOUCH</span>
              </div>
              <p className="font-body-lg text-body-lg text-text-primary leading-relaxed font-medium">
                Open to opportunities, collaborations, and interesting conversations.
              </p>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                Whether you are scouting for a software engineer with machine learning depth, seeking a collaborative developer for high-impact systems, or simply want to debate clean code paradigms, my inbox is open.
              </p>
              <div className="mt-2 pt-3 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                </div>
                <span className="font-mono-meta text-mono-meta text-text-secondary">
                  CURRENT STATUS: Open to Software Engineering Internships &amp; Junior Developer Roles
                </span>
              </div>
            </div>

            {/* Direct Coordinates List */}
            <div className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">[DIRECT_CONTACT_POINTS]</span>
              
              {/* Email Action Row */}
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-space-md rounded-lg bg-surface-container-low hover:bg-surface-muted transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-accent text-[22px] shrink-0">mail</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono-meta text-mono-meta text-text-muted uppercase">Primary Mailbox</span>
                    <span className="font-mono-code text-mono-code text-text-primary font-medium truncate">amitjethva2707@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    aria-label="Copy email address" 
                    className={`px-2.5 py-1 rounded font-mono-label text-mono-label transition-colors inline-flex items-center gap-1 shadow-sm ${copyState === 'Copied!' ? 'bg-accent text-on-primary' : 'bg-surface hover:bg-surface-container text-text-primary'}`}
                    onClick={handleCopy}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">{copyState === 'Copied!' ? 'check' : 'content_copy'}</span>
                    <span>{copyState === 'Copied!' ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <a className="px-2.5 py-1 rounded bg-accent text-on-primary font-mono-label text-mono-label hover:bg-accent-dark transition-colors inline-flex items-center gap-1 shadow-sm" href="mailto:amitjethva2707@gmail.com">
                    <span>Send</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Social / Engineering Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-2">
                {/* LinkedIn */}
                <a className="group flex flex-col p-3 rounded-lg bg-surface-container-low hover:bg-surface-muted transition-all" href="https://www.linkedin.com/in/amit-jethva-284b0236b" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center justify-between text-text-muted group-hover:text-accent transition-colors">
                    <span className="font-mono-meta text-mono-meta">01. NETWORK</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary mt-1 font-semibold group-hover:text-accent transition-colors">LinkedIn</span>
                  <span className="font-mono-meta text-mono-meta text-text-secondary mt-0.5 truncate">/in/amit-jethva</span>
                </a>
                
                {/* GitHub */}
                <a className="group flex flex-col p-3 rounded-lg bg-surface-container-low hover:bg-surface-muted transition-all" href="https://github.com/amitjethva2707-me" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center justify-between text-text-muted group-hover:text-accent transition-colors">
                    <span className="font-mono-meta text-mono-meta">02. REPOS</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary mt-1 font-semibold group-hover:text-accent transition-colors">GitHub</span>
                  <span className="font-mono-meta text-mono-meta text-text-secondary mt-0.5 truncate">@amitjethva2707</span>
                </a>
                
                {/* LeetCode */}
                <a className="group flex flex-col p-3 rounded-lg bg-surface-container-low hover:bg-surface-muted transition-all" href="https://leetcode.com/u/amitjethva_008/" rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center justify-between text-text-muted group-hover:text-accent transition-colors">
                    <span className="font-mono-meta text-mono-meta">03. ALGORITHMS</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary mt-1 font-semibold group-hover:text-accent transition-colors">LeetCode</span>
                  <span className="font-mono-meta text-mono-meta text-text-secondary mt-0.5 truncate">400+ Solved</span>
                </a>
              </div>

              {/* Physical Coordinate Tile */}
              <div className="pt-2 flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono-meta text-mono-meta text-text-muted">
                  <span>PHYSICAL_ORIGIN</span>
                  <span>L.D. COLLEGE OF ENGINEERING</span>
                </div>
                <div 
                  className="w-full h-32 rounded-lg bg-cover bg-center overflow-hidden relative shadow-sm" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeauf6KtUnVnkG8vCLYJltK66O-U8ZKfIUx5o0DapG0XWxz0l9mGr0HgnWL30Zu3Eh6depIYrY9gQiRztCapKdHJLtWarX5Vtgbfd2bjPjSW4G86EA7A7KrikgadLJbH0huYatXWqPUDqe2oZODXEnHXamy-ZwUIuo3AS_Wt9klkVQXwYZrxr7HNOpHUkXnej2YVcYZ1sLsGUT-YXYIKKsQDdv7469fTZm6K61QjY4lospJKY1P_XD')" }}
                >
                  <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-[1px] p-3 flex flex-col justify-between text-on-primary">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface/90 text-text-primary font-mono-meta text-mono-meta font-medium backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[13px] text-accent">location_on</span>
                        Ahmedabad, Gujarat, India
                      </span>
                      <span className="font-mono-meta text-mono-meta text-surface-container-low">23.0338° N, 72.5463° E</span>
                    </div>
                    <div className="font-mono-meta text-mono-meta text-surface-bright flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      <span>Campus Research Lab &amp; Study Workbench</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Notebook Motif Card */}
            <div className="relative bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-5/12 h-48 sm:h-auto relative">
                <img 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwbHGvHIbEZkzfXhYZIRvEigdnINn6oGBgz6oEUG_VTU_CuHBItUqTDsiKaFhEX_b1Q5H5guqrql0Vaz1a2t5l-qM-XHIr8Yt9Z_DtsV19etEn5WE5FXHEXngfDD8If2fDf6vJjP-6A97AahLKjxkYALuJ5i-9otNLgooIqvwddZGB4walKNi2tN37ACjRBAvJGLr6ZTMwH4Bl9n_I7QqZv9CQ4kNH1ysLDnFCX962ZxHh9gE7U9YV"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-inverse-surface/60 via-transparent to-transparent"></div>
              </div>
              <div className="sm:w-7/12 p-space-md flex flex-col justify-between gap-3 bg-surface-container-low">
                <div className="flex flex-col gap-1">
                  <span className="font-mono-meta text-mono-meta text-text-muted uppercase tracking-wider">[THOUGHT_MANIFESTO]</span>
                  <p className="font-display-hero-mobile text-[17px] leading-snug text-text-primary italic">
                    “Ideas → Conversations → Opportunities → Let's talk.”
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta">#ComputerVision</span>
                  <span className="px-2 py-0.5 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta">#MLSystems</span>
                  <span className="px-2 py-0.5 rounded bg-surface text-text-secondary font-mono-meta text-mono-meta">#FullStack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) — Technical Form Terminal */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Terminal Header Pane */}
            <div className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent"></span>
                  <span className="w-3 h-3 rounded-full bg-border"></span>
                  <span className="w-3 h-3 rounded-full bg-border"></span>
                  <span className="font-mono-meta text-mono-meta text-text-muted ml-2">DISPATCH_CONSOLE // STREAM_INIT</span>
                </div>
                <div className="flex items-center gap-2 font-mono-meta text-mono-meta text-text-muted">
                  <span className="material-symbols-outlined text-[15px] text-accent">lock</span>
                  <span>TLS_ENCRYPTED</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  Transmit a Message
                </h3>
                <p className="font-body-sm text-body-sm text-text-secondary">
                  Fill in the parameters below. Messages are routed directly to Amit Jethva's workspace dashboard with high priority indexing.
                </p>
              </div>

              {/* Interactive Form */}
              <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
                {/* Grid Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-label text-mono-label text-text-primary flex items-center justify-between" htmlFor="sender-name">
                      <span>NAME <span className="text-accent">*</span></span>
                      <span className="font-mono-meta text-mono-meta text-text-muted">[STR_VAR]</span>
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface text-text-primary font-body-md text-body-md rounded-lg px-3.5 py-2.5 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:bg-surface-bright placeholder:text-text-muted" 
                        id="sender-name" 
                        placeholder="e.g. Alex Morgan" 
                        required 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-label text-mono-label text-text-primary flex items-center justify-between" htmlFor="sender-email">
                      <span>EMAIL <span className="text-accent">*</span></span>
                      <span className="font-mono-meta text-mono-meta text-text-muted">[RFC_5322]</span>
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface text-text-primary font-body-md text-body-md rounded-lg px-3.5 py-2.5 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:bg-surface-bright placeholder:text-text-muted" 
                        id="sender-email" 
                        placeholder="e.g. alex@company.com" 
                        required 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-label text-mono-label text-text-primary flex items-center justify-between" htmlFor="sender-subject">
                    <span>SUBJECT <span className="text-accent">*</span></span>
                    <span className="font-mono-meta text-mono-meta text-text-muted">[INTENT_FLAG]</span>
                  </label>
                  <div className="relative">
                    <input 
                      ref={subjectInputRef}
                      className="w-full bg-surface text-text-primary font-body-md text-body-md rounded-lg px-3.5 py-2.5 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:bg-surface-bright placeholder:text-text-muted" 
                      id="sender-subject" 
                      placeholder="Project inquiry, collaboration, or hiring" 
                      required 
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        setSelectedIntent('');
                      }}
                    />
                  </div>
                </div>

                {/* Topic Quick Selectors */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="font-mono-meta text-mono-meta text-text-muted uppercase">Quick Intent Tag</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: '+ Hiring Opportunity', value: 'Software Role / Hiring' },
                      { label: '+ Research / ML Collab', value: 'ML / Data Collaboration' },
                      { label: '+ Prototype Build', value: 'Freelance / Prototype' },
                      { label: '+ Coffee / Tech Sync', value: 'Casual Tech Chat' }
                    ].map(intent => (
                      <button 
                        key={intent.value}
                        className={`px-2.5 py-1 rounded-lg font-mono-label text-mono-label transition-all shadow-sm ${selectedIntent === intent.value ? 'bg-accent text-on-primary' : 'bg-surface-container-low text-text-secondary hover:bg-surface-muted hover:text-text-primary'}`} 
                        type="button"
                        onClick={() => handleIntentClick(intent.value)}
                      >
                        {intent.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="font-mono-label text-mono-label text-text-primary" htmlFor="sender-message">
                      MESSAGE BODY <span className="text-accent">*</span>
                    </label>
                    <span className={`font-mono-meta text-mono-meta ${messageLen > 1100 ? 'text-accent' : 'text-text-muted'}`}>
                      {messageLen} / 1200 CHARS
                    </span>
                  </div>
                  <div className="relative">
                    <textarea 
                      className="w-full bg-surface text-text-primary font-body-md text-body-md rounded-lg px-3.5 py-3 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:bg-surface-bright placeholder:text-text-muted resize-y" 
                      id="sender-message" 
                      maxLength={1200} 
                      placeholder="Tell me about your project, role, timeline, or idea..." 
                      required 
                      rows="6"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setMessageLen(e.target.value.length);
                      }}
                    ></textarea>
                  </div>
                </div>

                {/* Submission Area */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="material-symbols-outlined text-[18px] text-accent">schedule</span>
                    <span className="font-mono-meta text-mono-meta">Typically responding within 24–48 hours.</span>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono-label text-mono-label font-semibold tracking-wider transition-all shadow-sm group ${
                      formStatus === 'success' 
                        ? 'bg-surface-muted text-text-primary' 
                        : 'bg-accent text-on-primary hover:bg-accent-dark active:scale-[0.99]'
                    }`} 
                    type="submit"
                  >
                    <span>
                      {formStatus === 'submitting' ? 'Transmitting...' : formStatus === 'success' ? 'Sent' : 'Send Message'}
                    </span>
                    <span className={`material-symbols-outlined text-[18px] ${formStatus === 'submitting' ? 'animate-spin' : (formStatus === 'idle' || formStatus === 'error') ? 'group-hover:translate-x-1 transition-transform' : ''}`}>
                      {formStatus === 'submitting' ? 'sync' : formStatus === 'success' ? 'done' : 'arrow_forward'}
                    </span>
                  </button>
                </div>

                {/* Success Alert */}
                {formStatus === 'success' && (
                  <div className="p-3.5 rounded-lg bg-surface-container-low text-text-primary flex items-start gap-3 mt-2 shadow-sm">
                    <span className="material-symbols-outlined text-accent text-[20px] shrink-0">check_circle</span>
                    <div className="flex flex-col text-left">
                      <span className="font-mono-label text-mono-label font-semibold">PACKET_DELIVERED_SUCCESSFULLY</span>
                      <span className="font-body-sm text-body-sm text-text-secondary mt-0.5">Thank you! Your transmission has been compiled and logged. Amit will follow up promptly via email.</span>
                    </div>
                  </div>
                )}

                {/* Error Alert */}
                {formStatus === 'error' && (
                  <div className="p-3.5 rounded-lg bg-red-500/10 text-red-500 flex items-start gap-3 mt-2 shadow-sm border border-red-500/20">
                    <span className="material-symbols-outlined text-[20px] shrink-0">error</span>
                    <div className="flex flex-col text-left">
                      <span className="font-mono-label text-mono-label font-semibold">TRANSMISSION_FAILED</span>
                      <span className="font-body-sm text-body-sm mt-0.5">There was an error sending your message. Please check your connection or try using the direct email link.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Telemetry & Diagnostic Footer Module */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              <div className="bg-surface rounded-lg p-3 shadow-sm flex flex-col">
                <span className="font-mono-meta text-mono-meta text-text-muted">SYSTEM_LATENCY</span>
                <span className="font-mono-code text-mono-code text-text-primary font-medium mt-1">28ms avg response</span>
              </div>
              <div className="bg-surface rounded-lg p-3 shadow-sm flex flex-col">
                <span className="font-mono-meta text-mono-meta text-text-muted">ENCRYPTION</span>
                <span className="font-mono-code text-mono-code text-text-primary font-medium mt-1">SHA-256 HMAC</span>
              </div>
              <div className="bg-surface rounded-lg p-3 shadow-sm flex flex-col">
                <span className="font-mono-meta text-mono-meta text-text-muted">LOCATION_NODE</span>
                <span className="font-mono-code text-mono-code text-accent font-medium mt-1">IN-WEST-AHM-01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Q&A / FAQ Editorial Stripe */}
        <div className="mt-space-xl pt-space-lg">
          <div className="flex items-center gap-3 mb-space-md">
            <span className="font-mono-meta text-mono-meta text-accent">[FAQ // PROTOCOLS]</span>
            <span className="font-headline-sm text-headline-sm text-text-primary font-semibold">Frequently Clarified Inquiries</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col gap-2">
              <span className="font-mono-label text-mono-label text-accent font-medium">01. INTERNSHIP AVAILABILITY</span>
              <h3 className="font-headline-sm text-headline-sm text-text-primary">What roles are you prioritizing?</h3>
              <p className="font-body-sm text-body-sm text-text-secondary">
                Undergraduate Computer Engineering candidates actively targeting Summer/Winter 2025/2026 internships or junior software engineer roles focusing on Full-Stack, Python backend, or Applied Machine Learning pipelines.
              </p>
            </div>
            
            <div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col gap-2">
              <span className="font-mono-label text-mono-label text-accent font-medium">02. TIMEZONE CO-ORDINATION</span>
              <h3 className="font-headline-sm text-headline-sm text-text-primary">Can you work with remote teams?</h3>
              <p className="font-body-sm text-body-sm text-text-secondary">
                Yes. Based in Ahmedabad, India (IST / UTC+5:30), with flexible schedule alignment for overlapping sprint rituals and engineering reviews across US, EMEA, and APAC time zones.
              </p>
            </div>
            
            <div className="bg-surface rounded-xl p-space-md shadow-sm flex flex-col gap-2">
              <span className="font-mono-label text-mono-label text-accent font-medium">03. CODE REPOSITORIES</span>
              <h3 className="font-headline-sm text-headline-sm text-text-primary">Can I review technical writeups?</h3>
              <p className="font-body-sm text-body-sm text-text-secondary">
                All featured production systems and machine learning models are open-sourced with reproducible README documentation and benchmark metrics on my GitHub workbench.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
