import{u as d,j as e,m as t,y as c,L as x}from"./index-BHRbG2cm.js";import{S as m}from"./SideRays-C8U9gdWR.js";import"./Triangle-DfWMHKQ0.js";const i={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}};function u({data:a}){const n=a||c;d({title:"Corporate Capabilities Brochure — Primity Research & Development Labs",description:"Executive overview and corporate dossier of Primity R&D Labs. Applied engineering, enterprise systems architecture, and foundational AI.",canonical:"https://primity.in/brochure"});const s=()=>{window.print()};return e.jsxs("div",{className:"brochure-root min-h-screen bg-[#050505] text-[#f5f5f3] pb-16",children:[e.jsx("style",{children:`
        @media print {
          /* 1. HIDE ALL UI ELEMENTS */
          nav, header, footer, .print-hide, .side-rays, .noise-overlay, .route-fade { 
            display: none !important; 
          }

          /* 2. PAPER SETUP - REDUCED MARGINS TO FIT EXACTLY ON 2 PAGES */
          @page { 
            size: A4 portrait; 
            margin: 8mm 12mm; /* Shrinked margins to buy more vertical space */
          }

          /* 3. UNIVERSAL RESET & PREMIUM TYPOGRAPHY */
          html, body, .brochure-root {
            background: #ffffff !important; 
            color: #1e293b !important; 
            font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
            height: auto !important; 
            min-height: auto !important; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important;
          }

          /* 4. FORCE DARK INK EVERYWHERE */
          .brochure-root h1, .brochure-root h2, .brochure-root h3, .brochure-root h4 {
            color: #0f172a !important; 
            text-shadow: none !important; 
            letter-spacing: -0.02em !important;
            margin-bottom: 4px !important; /* Tighter heading spacing */
          }
          
          .brochure-root p, .brochure-root span, .brochure-root li {
            color: #334155 !important;
            text-shadow: none !important;
          }

          /* 5. PREMIUM GOLD/BRONZE ACCENTS FOR PAPER */
          .brochure-root .text-[#e9c87a], 
          .brochure-root .text-[#d9a93a], 
          .brochure-root .text-[#7fd08c], 
          .brochure-root .text-[#f0c674] {
            color: #b45309 !important; /* Deep luxury bronze */
            font-weight: 800 !important;
          }

          /* 6. MAGAZINE-STYLE CARD LAYOUTS - TIGHTER GAPS & PADDING */
          .print-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important; /* Reduced from 16px */
            align-items: stretch !important;
            margin-top: 10px !important;
          }
          
          .print-card {
            background-color: #f8fafc !important; 
            border: 1px solid #cbd5e1 !important; 
            border-radius: 8px !important;
            padding: 12px !important; /* Reduced from 16px to save space */
            box-shadow: none !important;
            break-inside: avoid !important; 
            page-break-inside: avoid !important;
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
          }

          /* 7. REMOVE WASTED SPACES & PADDING BETWEEN SECTIONS */
          .print-section {
            padding: 0 !important;
            margin: 0 0 16px 0 !important; /* Reduced from 24px */
            border-top: none !important;
            break-after: auto !important;
            page-break-after: auto !important;
          }
          
          /* Force specific sections onto new pages for perfect presentation */
          .page-break-before {
            break-before: page !important;
            page-break-before: always !important;
          }

          /* 8. ELEGANT EDITORIAL HEADER */
          .print-header { 
            display: flex !important; 
            justify-content: space-between !important; 
            align-items: flex-end !important; 
            border-bottom: 2px solid #0f172a !important; 
            padding-bottom: 4px !important; 
            margin-bottom: 12px !important; /* Reduced from 20px */
          }

          .print-tag {
            background-color: #f1f5f9 !important; 
            border: 1px solid #94a3b8 !important; 
            color: #0f172a !important;
            display: inline-block !important;
            padding: 2px 6px !important;
            font-size: 9px !important;
            margin: 2px !important;
          }
        }
      `}),e.jsx("div",{className:"side-rays fixed inset-0 -z-10 pointer-events-none print:hidden",children:e.jsx(m,{origin:"top-right",rayColor1:"#d9a93a",rayColor2:"#e9c87a",intensity:.9,spread:1.4,speed:2,opacity:.35})}),e.jsxs("div",{className:"max-w-5xl mx-auto px-6 md:px-16 pt-28 md:pt-32 print:p-0 print:m-0 print:max-w-none print:pt-0",children:[e.jsxs("div",{className:"print-hide flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10",children:[e.jsxs("div",{className:"flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-[#d9a93a]",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#d9a93a] animate-pulse"}),"Official Corporate Dossier · 2026"]}),e.jsxs("button",{onClick:s,className:"px-6 py-2.5 rounded-full border border-[#d9a93a]/40 bg-[#d9a93a]/10 hover:bg-[#d9a93a]/20 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0c674] transition-all flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 17h2a2 2 0 0 0 2-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})}),"Save as PDF"]})]}),e.jsxs(t.section,{initial:"hidden",animate:"visible",variants:i,className:"print-section",children:[e.jsxs("div",{className:"print-header hidden",children:[e.jsx("span",{className:"font-extrabold tracking-[0.25em] text-[10px] uppercase text-black",children:"PRIMITY RESEARCH AND DEVELOPMENT LABS"}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-[#b45309]",children:"Executive Summary"})]}),e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-3 print:text-gray-500 print:mb-1",children:"01. Executive Summary"}),e.jsxs("h1",{className:"font-[900] tracking-tighter leading-[0.95] text-white mb-5 print:mb-3",style:{fontSize:"clamp(2.5rem, 6vw, 5rem)"},children:["Applied engineering ",e.jsx("br",{className:"print:hidden"})," meets ",e.jsx("span",{className:"text-[#e9c87a] font-[300] italic print:not-italic",children:"advanced research."})]}),e.jsx("p",{className:"text-lg md:text-xl text-[#bcbcbc] font-light max-w-3xl leading-relaxed mb-8 print:text-[13px] print:leading-snug print:mb-4",children:"Primity R&D Labs bridges deep foundational research with high-performance commercial enterprise infrastructure. We architect the reliable, market-ready operating systems, custom ERPs, and AI software backbones that modern industries run on."})]}),e.jsxs(t.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},variants:i,className:"print-section pt-8 border-t border-white/10 print:border-none print:pt-0",children:[e.jsxs("div",{className:"mb-6 print:mb-3",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a93a] mb-2 print:mb-1",children:"02. Enterprise Engineering"}),e.jsx("h2",{className:"text-3xl md:text-5xl font-[900] tracking-tight text-white print:text-xl",children:"Systems engineered for real businesses."}),e.jsx("p",{className:"text-base text-[#a8a8a8] font-light leading-relaxed mt-4 max-w-3xl print:text-[12px] print:mt-1.5 print:leading-snug",children:"We don't believe in one-size-fits-all. By applying our R&D-level engineering standards to commercial markets, we deliver unparalleled bespoke solutions."})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4 print-grid",children:n.services.slice(0,4).map((r,l)=>e.jsxs("div",{className:"print-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 print:text-sm print:mb-1",children:r.title}),e.jsx("p",{className:"text-sm text-white/70 font-light leading-relaxed mb-4 print:text-[10px] print:leading-tight print:mb-2",children:r.desc})]}),e.jsx("div",{className:"flex flex-wrap mt-auto",children:r.tags.map((o,p)=>e.jsx("span",{className:"print-tag text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70",children:o},p))})]},l))})]}),e.jsxs(t.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},variants:i,className:"print-section page-break-before pt-8 border-t border-white/10 print:border-none",children:[e.jsxs("div",{className:"print-header hidden",children:[e.jsx("span",{className:"font-extrabold tracking-[0.25em] text-[10px] uppercase text-black",children:"PRIMITY RESEARCH AND DEVELOPMENT LABS"}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-[#b45309]",children:"03 · Flagship R&D Initiatives"})]}),e.jsxs("div",{className:"mb-6 print:mb-3",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a93a] mb-2 print:mb-1",children:"03. Advanced Research"}),e.jsx("h2",{className:"text-3xl md:text-5xl font-[900] tracking-tight text-white print:text-xl",children:"Every project, born from research."}),e.jsx("p",{className:"text-base text-[#a8a8a8] font-light leading-relaxed mt-4 max-w-3xl print:text-[12px] print:mt-1.5 print:leading-snug",children:"Every commercial system we deliver is a by-product of our core R&D wing—built on bleeding-edge work we have actively deployed in our own ecosystem."})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 print-grid",children:[e.jsxs("div",{className:"print-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsx("h3",{className:"text-xl font-bold text-white print:text-sm",children:"Project Destiny (AAI)"}),e.jsx("span",{className:"print-tag !bg-[#b45309]/10 !text-[#b45309] !border-[#b45309] text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full",children:"Flagship"})]}),e.jsx("p",{className:"text-sm text-white/70 font-light leading-relaxed mb-2 print:text-[10px] print:leading-tight",children:"Our flagship Augmented Artificial Intelligence. An autonomous, local-first natural-language operating system running natively on Linux. It manages our entire ODRD Labs ecosystem securely."})]}),e.jsxs("div",{className:"print-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsx("h3",{className:"text-xl font-bold text-white print:text-sm",children:"Vision Surveillance Stack"}),e.jsx("span",{className:"print-tag text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full",children:"Deployed"})]}),e.jsx("p",{className:"text-sm text-white/70 font-light leading-relaxed mb-2 print:text-[10px] print:leading-tight",children:"An on-device computer-vision platform for real-time security and monitoring. Features advanced object detection and alerting that runs entirely at the edge to keep footage private."})]}),e.jsxs("div",{className:"print-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsx("h3",{className:"text-xl font-bold text-white print:text-sm",children:"Realtime Voice Synthesis"}),e.jsx("span",{className:"print-tag text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full",children:"Deployed"})]}),e.jsx("p",{className:"text-sm text-white/70 font-light leading-relaxed mb-2 print:text-[10px] print:leading-tight",children:"A low-latency speech pipeline pairing real-time recognition with natural synthesis. Engineered for fast, spoken interfaces that feel conversational rather than transactional."})]}),e.jsxs("div",{className:"print-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsx("h3",{className:"text-xl font-bold text-white print:text-sm",children:"Cyber Defense Toolkit"}),e.jsx("span",{className:"print-tag text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full",children:"Deployed"})]}),e.jsx("p",{className:"text-sm text-white/70 font-light leading-relaxed mb-2 print:text-[10px] print:leading-tight",children:"A sophisticated toolkit for threat detection, log monitoring, and architecture hardening. Built to keep deployed enterprise products highly resilient against modern threats."})]})]})]}),e.jsxs(t.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},variants:i,className:"print-section pt-8 border-t border-white/10 print:border-none print:pt-4",children:[e.jsxs("div",{className:"mb-6 print:mb-3",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a93a] mb-2 print:mb-1",children:"04. The Advantage"}),e.jsx("h2",{className:"text-3xl md:text-5xl font-[900] tracking-tight text-white print:text-xl",children:"The legacy is our moat."})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-6 print:flex-row print:gap-4",children:[e.jsxs("div",{className:"md:w-1/2 space-y-4 print:space-y-1.5",children:[e.jsx("p",{className:"text-lg font-medium text-white/90 print:text-[12px]",children:"Most software agencies just write code. We architect ecosystems."}),e.jsx("p",{className:"text-sm text-[#a8a8a8] font-light leading-relaxed print:text-[10px] print:leading-tight",children:"Primity was not born in a boardroom; it was forged in an R&D lab. When you partner with us, you aren't just hiring developers—you are gaining access to the raw engineering genius of a laboratory that builds AI and operating systems from scratch."})]}),e.jsxs("div",{className:"md:w-1/2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 print-card print:p-3",children:[e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-[#d9a93a] mb-4 print:text-[9px] print:mb-2",children:"Key Business Benefits"}),e.jsxs("ul",{className:"space-y-3 print:space-y-1.5",children:[e.jsxs("li",{className:"flex items-start gap-3 print:gap-1.5",children:[e.jsx("span",{className:"text-[#d9a93a] mt-0.5 print:text-[9px]",children:"✦"}),e.jsxs("span",{className:"text-sm text-white/80 print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black",children:"Security by Design:"})," Built with military-grade threat modeling."]})]}),e.jsxs("li",{className:"flex items-start gap-3 print:gap-1.5",children:[e.jsx("span",{className:"text-[#d9a93a] mt-0.5 print:text-[9px]",children:"✦"}),e.jsxs("span",{className:"text-sm text-white/80 print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black",children:"Zero Third-Party Reliance:"})," Local-first AI and self-hosted infrastructure."]})]}),e.jsxs("li",{className:"flex items-start gap-3 print:gap-1.5",children:[e.jsx("span",{className:"text-[#d9a93a] mt-0.5 print:text-[9px]",children:"✦"}),e.jsxs("span",{className:"text-sm text-white/80 print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black",children:"End-to-End Ownership:"})," From UX/UI design to database engineering."]})]})]})]})]})]}),e.jsx(t.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},variants:i,className:"print-avoid-break print-section pt-8 border-t border-white/10 print:border-none print:pt-2",children:e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between gap-8 print:flex-row print:gap-4",children:[e.jsxs("div",{className:"lg:w-3/5",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a93a] mb-2 print:mb-1",children:"05. B2B Engagement"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-[900] tracking-tight text-white mb-5 print:text-xl print:mb-2",children:"How Enterprises Engage Us."}),e.jsxs("ul",{className:"space-y-4 print:space-y-1.5",children:[e.jsxs("li",{className:"flex gap-4 print:gap-2",children:[e.jsx("span",{className:"text-xl font-black text-[#d9a93a] print:text-sm",children:"1"}),e.jsxs("p",{className:"text-sm text-[#bcbcbc] leading-relaxed print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black block mb-0.5",children:"B2B Strategic Retainer"})," Long-term technical stewardship. We serve as your dedicated specialized R&D wing, scaling alongside your operational needs."]})]}),e.jsxs("li",{className:"flex gap-4 print:gap-2",children:[e.jsx("span",{className:"text-xl font-black text-[#d9a93a] print:text-sm",children:"2"}),e.jsxs("p",{className:"text-sm text-[#bcbcbc] leading-relaxed print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black block mb-0.5",children:"Custom System Builds"})," Turnkey development of bespoke ERP platforms, web applications, and automated workflow hubs."]})]}),e.jsxs("li",{className:"flex gap-4 print:gap-2",children:[e.jsx("span",{className:"text-xl font-black text-[#d9a93a] print:text-sm",children:"3"}),e.jsxs("p",{className:"text-sm text-[#bcbcbc] leading-relaxed print:text-[10px] print:leading-tight",children:[e.jsx("strong",{className:"text-white print:text-black block mb-0.5",children:"AI Deployment & Security Audits"})," Specialized, milestone-based integration of on-device LLMs and architectural security hardening."]})]})]})]}),e.jsxs("div",{className:"lg:w-2/5 p-8 rounded-2xl bg-white/[0.02] border border-white/10 print-card print:p-4 flex flex-col justify-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-2 print:text-base print:mb-1",children:"Initiate Partnership"}),e.jsx("p",{className:"text-sm text-white/50 font-light mb-6 print:text-[9px] print:mb-2",children:"Connect directly with our leadership board to review technical scopes and architecture planning."}),e.jsxs("div",{className:"space-y-3 text-sm font-medium text-white/80 mb-6 print:text-[9px] print:space-y-0.5 print:mb-0",children:[e.jsxs("p",{children:["Email: ",e.jsx("span",{className:"text-white print:text-black",children:"reachout@primity.in"})]}),e.jsxs("p",{children:["Headquarters: ",e.jsx("span",{className:"text-white print:text-black",children:"Palakkad, Kerala, India"})]}),e.jsxs("p",{children:["Gulf Operations: ",e.jsx("span",{className:"text-white print:text-black",children:"Al Ahmadi, Kuwait"})]})]}),e.jsx(x,{to:"/contact",className:"print-hide w-full text-center px-6 py-4 rounded-full bg-[#29903B]/40 hover:bg-[#29903B]/60 text-white border border-[#3fae52]/50 text-xs font-bold uppercase tracking-widest transition-all mt-4",children:"Schedule a Meeting →"})]})]})})]})]})}export{u as default};
