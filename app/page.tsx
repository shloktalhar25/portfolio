"use client";

import { useState } from 'react';

type FilterType = 'all' | 'ai' | 'cloud' | 'data';

export default function Home() {
    const [cryptoReadMore, setCryptoReadMore] = useState(false);
    const [mlopsReadMore, setMlopsReadMore] = useState(false);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    return (
        <div className="max-w-[1100px] mx-auto p-8 lg:p-12 space-y-8">
            {/* Header Section */}
            <header id="header" className="section-border bg-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">Shlok Talhar</h1>
                    <p className="text-primary font-mono text-sm font-medium tracking-wider uppercase">Data & Ai</p>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xl">Skilled in Python, Go and end-to-end GenAI and agentic workflows. Expertise in NLP, Backend and Agentic Systems & Azure.</p>
                </div>
                <div className="flex flex-col gap-1 text-right items-end font-mono text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        <a href="mailto:work.shloktalhar25@gmail.com" className="hover:text-primary transition-colors">work.shloktalhar25@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">link</span>
                        <a href="https://github.com/shloktalhar25" target="_blank" className="hover:text-primary transition-colors">github.com/shloktalhar25</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">person</span>
                        <a href="https://linkedin.com/in/shlok-talhar-63ab80282" target="_blank" className="hover:text-primary transition-colors">linkedin.com/in/shlok-talhar</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">smart_toy</span>
                        <a href="https://huggingface.co/Shlok307" target="_blank" className="hover:text-primary transition-colors">huggingface.co/Shlok307</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">edit_note</span>
                        <a href="https://medium.com/@work.shloktalhar25" target="_blank" className="hover:text-primary transition-colors">medium.com/@work.shloktalhar25</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>Nagpur, India</span>
                    </div>
                </div>
            </header>

            {/* Navigation Box */}
            <nav id="navigation" className="section-border bg-white p-4">
                <ul className="flex flex-wrap gap-8 justify-center md:justify-start">
                    <li><a className="nav-link nav-link-active text-sm font-bold uppercase tracking-widest text-primary pb-1" href="#projects">Projects</a></li>
                    <li><a className="nav-link text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors pb-1" href="#stats">Experience</a></li>
                    <li><a className="nav-link text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors pb-1" href="#header">About</a></li>
                    <li><a className="nav-link text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors pb-1" href="#footer">Contact</a></li>
                    <li className="md:ml-auto">
                        <a target="_blank" rel="noopener noreferrer" href="/shlok_resume.pdf" className="text-xs font-mono font-bold uppercase text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-white transition-all inline-block">View_Resume.pdf</a>
                    </li>
                </ul>
            </nav>

            {/* Main Content Area */}
            <main className="space-y-8">

                <div id="projects" className="pt-2">

                    {/* Filters Section */}
                    <section id="filters" className="mb-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Filter_By:</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setActiveFilter('all')}
                                    className={`filter-btn px-4 py-1 text-xs font-bold uppercase tracking-tighter ${activeFilter === 'all' ? 'filter-btn-active' : 'bg-white text-slate-600'}`}>
                                    All Projects
                                </button>
                                <button
                                    onClick={() => setActiveFilter('ai')}
                                    className={`filter-btn px-4 py-1 text-xs font-bold uppercase tracking-tighter ${activeFilter === 'ai' ? 'filter-btn-active' : 'bg-white text-slate-600'}`}>
                                    AI & Data Science
                                </button>
                                <button
                                    onClick={() => setActiveFilter('cloud')}
                                    className={`filter-btn px-4 py-1 text-xs font-bold uppercase tracking-tighter ${activeFilter === 'cloud' ? 'filter-btn-active' : 'bg-white text-slate-600'}`}>
                                    Cloud & Backend
                                </button>
                                <button
                                    onClick={() => setActiveFilter('data')}
                                    className={`filter-btn px-4 py-1 text-xs font-bold uppercase tracking-tighter ${activeFilter === 'data' ? 'filter-btn-active' : 'bg-white text-slate-600'}`}>
                                    Data Engineering
                                </button>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col gap-5">

                        {/* AI Projects */}
                        {(activeFilter === 'all' || activeFilter === 'ai') && (
                            <>
                                {/* Project 01: Samuel Code */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">terminal</span>
                                            <div>
                                                <span className="project-number">01</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">Samuel Code: Claude Code Alternative</h3>
                                                
                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://github.com/shloktalhar25/samuel-code" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                        CODE
                                                    </a>
                                                    <a href="https://github.com/shloktalhar25/Ai_IDE" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                        AI IDE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Engineered a Claude Code style autonomous coding agent powered by GPT-4o mini that takes a single natural language prompt and delivers a complete, ready to run software project.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Eliminated the gap between AI text and real code using MCP tool calling , agents write actual files to disk via a two agent system where one owns architecture and the other owns code.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Built an interactive CLI in Golang for prompt input and project streaming, with Langfuse tracing every GPT-4o mini call and tool execution across the pipeline.</span></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Python</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Go</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">AutoGen</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">OpenAI</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">MCP</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Langfuse</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}

                        {/* Data Engineering Projects */}
                        {(activeFilter === 'all' || activeFilter === 'data') && (
                            <>
                                {/* Project 02: Serverless Crypto Data ELT Pipeline */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">analytics</span>
                                            <div>
                                                <span className="project-number">02</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">Serverless Crypto Data ELT Pipeline</h3>
                                                <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Cloud &amp; Data Engineering</p>
                                                
                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://www.linkedin.com/posts/shlok-talhar-63ab80282_terraform-snowflakes-dbt-ugcPost-7438571715435180032-uzhi" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                        PROJECT POST
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Designed a serverless ELT pipeline ingesting real time crypto data from CoinGecko API to Azure Data Lake Storage Gen2 using Azure Functions.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Configured Snowflake External Stages to directly query raw JSON data files from the data lake, achieving zero copy storage overhead for analytics.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Provisioned the cloud native infrastructure (Azure Storage, Function Apps, Snowflake) using Terraform for repeatable automated deployments.</span></li>
                                            </ul>

                                            <button onClick={() => setCryptoReadMore(!cryptoReadMore)} className="text-xs font-mono font-bold text-primary uppercase mt-4 w-max flex items-center gap-1 hover:underline transition-all">
                                                <span>{cryptoReadMore ? 'Show Less' : 'Read More'}</span>
                                                <span className="material-symbols-outlined text-[14px]">
                                                    {cryptoReadMore ? 'expand_less' : 'expand_more'}
                                                </span>
                                            </button>

                                            {cryptoReadMore && (
                                                <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 transition-all pb-2 opacity-100">
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase text-slate-800 mb-1 tracking-wider">Architecture Flow</h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed font-mono bg-slate-50 p-3 rounded text-xs border border-slate-100">CoinGecko API → Azure Function (Timer) → ADLS Gen2 (Raw Data) → Snowflake External Stage → dbt (Planned)</p>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <h4 className="text-xs font-bold uppercase text-slate-800 mb-1 tracking-wider">Key Learnings</h4>
                                                            <ul className="text-sm text-slate-600 list-disc pl-4 space-y-1">
                                                                <li>Modern serverless data ELT ingestion.</li>
                                                                <li>Integrating data lakes with data warehouses.</li>
                                                                <li>Managing cloud authentication and IAM.</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs font-bold uppercase text-slate-800 mb-1 tracking-wider">Future Scope</h4>
                                                            <ul className="text-sm text-slate-600 list-disc pl-4 space-y-1">
                                                                <li>Implementing Snowpipe for auto ingestion.</li>
                                                                <li>Building dbt transformation models.</li>
                                                                <li>Visualization dashboards for crypto trends.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Python</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure Functions</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">ADLS Gen2</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Snowflake</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Terraform</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}

                        {/* AI Projects continued */}
                        {(activeFilter === 'all' || activeFilter === 'ai') && (
                            <>
                                {/* Project 03: NCERT RAG Learning Assistant */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">school</span>
                                            <div>
                                                <span className="project-number">03</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">NCERT RAG Learning Assistant</h3>
                                                <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Intel Unnati Industrial Training</p>

                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://github.com/shloktalhar25/intel_unnati" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                        CODE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Built a RAG based learning assistant for NCERT Class 5–10 students that retrieves grade appropriate answers from syllabus aligned textbooks instead of a generic knowledge base.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Architected separate ChromaDB vector stores per class and subject, solving the concept leakage problem common in single database RAG systems.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Powered by Meta LLaMA 3.1 (8B) via Groq API, with a FastAPI backend and full stack web interface for seamless student interaction.</span></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Python</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">FastAPI</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">ChromaDB</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">LLaMA 3.1</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}

                        {/* Cloud & Backend Projects */}
                        {(activeFilter === 'all' || activeFilter === 'cloud') && (
                            <>
                                {/* Project 04: Scalable Multi-Agentic System on Kubernetes */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">cloud_done</span>
                                            <div>
                                                <span className="project-number">04</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">Scalable Multi Agentic System on Kubernetes</h3>
                                                
                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://www.linkedin.com/posts/shlok-talhar-63ab80282_llmops-autogen-azure-ugcPost-7432435484385218560-xN5z" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                        PROJECT POST
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Deployed a production grade multi agent AI platform using Autogen (AG2) and FastAPI to coordinate intelligent agent workflows through scalable REST services.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Containerized with Docker and deployed on AKS via ACR, implementing load balancing, horizontal scaling, and fault tolerant architecture for high availability under concurrent traffic.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Delivered an end to end cloud native AI service demonstrating strong LLMOps practices, with real time observability via Grafana dashboards monitoring performance and service health.</span></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Autogen</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">FastAPI</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Docker</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">AKS</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">ACR</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Grafana</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}

                        {/* MLOps Project */}
                        {(activeFilter === 'all' || activeFilter === 'ai' || activeFilter === 'cloud' || activeFilter === 'data') && (
                            <article className="project-card bg-white p-6 flex flex-col gap-5">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl mt-0.5">engineering</span>
                                        <div>
                                            <span className="project-number">05</span>
                                            <h3 className="text-lg font-bold leading-tight uppercase">Real Time CI/CD MLOps Pipeline on Azure</h3>
                                            <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">End to End MLOps Engineering</p>
                                            
                                            <div className="flex flex-col gap-2 mt-4">
                                                <a href="https://github.com/shloktalhar25/MLOps_azure_terraform_githubActions" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                    <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                    CODE
                                                </a>
                                                <a href="https://www.linkedin.com/posts/shlok-talhar-63ab80282_fintech-cicd-mlops-ugcPost-7448959894814150656-xmjY" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                    <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                    PROJECT POST
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-3">
                                        <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                            <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Architected a real time MLOps pipeline using Azure Event Hubs and Stream Analytics for high velocity transaction data ingestion and transformation.</span></li>
                                            <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Automated continuous model retraining and selection via GitHub Actions and Azure Batch, implementing a robust CI/CD workflow that handles concept drift.</span></li>
                                            <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Provisioned entire cloud environment (ADLS Gen2, Event Hubs, Azure Batch) using Terraform (IaC), ensuring a scalable, reproducible, and secure infrastructure.</span></li>
                                        </ul>

                                        <button onClick={() => setMlopsReadMore(!mlopsReadMore)} className="text-xs font-mono font-bold text-primary uppercase mt-4 w-max flex items-center gap-1 hover:underline transition-all">
                                            <span>{mlopsReadMore ? 'Show Less' : 'Read More'}</span>
                                            <span className="material-symbols-outlined text-[14px]">
                                                {mlopsReadMore ? 'expand_less' : 'expand_more'}
                                            </span>
                                        </button>

                                        {mlopsReadMore && (
                                            <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 transition-all pb-2 opacity-100">
                                                <div>
                                                    <h4 className="text-xs font-bold uppercase text-slate-800 mb-1 tracking-wider">System Architecture</h4>
                                                    <p className="text-sm text-slate-600 leading-relaxed font-mono bg-slate-50 p-3 rounded text-[11px] border border-slate-100">
                                                        Data Gen → Event Hub → Stream Analytics → ADLS Gen2 → Data Optimizer → Azure Batch → GitHub Actions CI/CD
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase text-slate-800 mb-2 tracking-wider underline underline-offset-4 decoration-primary/30">Key Phases</h4>
                                                        <ul className="text-[13px] text-slate-600 space-y-2">
                                                            <li>Streaming Layer: High throughput ingestion decoupling producers and consumers.</li>
                                                            <li>Real Time Processing: Structured transformation of raw, fragmented streaming data.</li>
                                                            <li>Cloud Training: Scalable model training on Azure Batch, overcoming local compute limits.</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase text-slate-800 mb-2 tracking-wider underline underline-offset-4 decoration-primary/30">Core Features</h4>
                                                        <ul className="text-[13px] text-slate-600 space-y-2">
                                                            <li>Model Selection: Automated comparison of new models vs. historical benchmarks.</li>
                                                            <li>Versioning: Comprehensive tracking of models and metrics over time.</li>
                                                            <li>Automation: Scheduled and manual triggers for zero touch retraining cycles.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                        <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure</span>
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Terraform</span>
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">GitHub Actions</span>
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Python</span>
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Event Hubs</span>
                                            <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure Batch</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )}

                        {/* Cloud & DevOps Projects */}
                        {(activeFilter === 'all' || activeFilter === 'cloud') && (
                            <>
                                {/* Project 06: Azure Infrastructure Provisioning with Observability */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">monitoring</span>
                                            <div>
                                                <span className="project-number">06</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">Azure Infrastructure Provisioning with Observability</h3>
                                                <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">IaC + Monitoring</p>
                                                
                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://www.linkedin.com/posts/shlok-talhar-63ab80282_terraform-azure-observability-ugcPost-7445460923063881730-PPBP" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                        PROJECT POST
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Provisioned secure and scalable cloud infrastructure on Microsoft Azure using Terraform (IaC), enabling reproducible and version controlled deployments.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Integrated end to end observability using Azure Monitor and Log Analytics, with centralized logging and real time monitoring of system metrics (CPU, memory, etc.).</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Configured automated alerting mechanisms for proactive anomaly and failure detection, eliminating manual cloud setup and enabling faster debugging.</span></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Terraform</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure Monitor</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Log Analytics</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure Alerts</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Project 07: CI/CD Pipeline with Auto Rollback */}
                                <article className="project-card bg-white p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">deployed_code</span>
                                            <div>
                                                <span className="project-number">07</span>
                                                <h3 className="text-lg font-bold leading-tight uppercase">CI/CD Pipeline with Auto Rollback on Azure</h3>
                                                <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">DevOps &amp; Reliability Engineering</p>
                                                
                                                <div className="flex flex-col gap-2 mt-4">
                                                    <a href="https://www.linkedin.com/posts/shlok-talhar-63ab80282_built-a-cicd-pipeline-using-github-actions-share-7441147559840202753-m9PA" target="_blank" className="text-[10px] font-mono font-bold text-primary uppercase flex items-center gap-2 hover:underline group">
                                                        <svg className="w-3.5 h-3.5 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                        PROJECT POST
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-3">
                                            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Built a CI/CD pipeline using GitHub Actions that automatically deploys a Dockerized application to an Azure VM and performs health checks on a /health endpoint.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Implemented automatic rollback to the last stable version when deployment health checks fail, ensuring minimal downtime and consistent performance.</span></li>
                                                <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Provisioned Azure VM infrastructure using Terraform, configuring Virtual Networks, Subnets, NSGs, and SSH access for a secure, production ready deployment target.</span></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-[220px] shrink-0 md:border-l md:border-slate-100 md:pl-6 space-y-2">
                                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">GitHub Actions</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Terraform</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure VM</span>
                                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Docker</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}
                </div>

                </div>


                <section id="stats" className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
                    <div className="stat-card bg-white p-4 text-center">
                        <p className="text-primary font-mono text-2xl font-bold">8.7</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">CGPA</p>
                    </div>
                    <div className="stat-card bg-white p-4 text-center">
                        <p className="text-primary font-mono text-2xl font-bold">Top 20</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">IIT KGP KDSH</p>
                    </div>
                    <div className="stat-card bg-white p-4 text-center">
                        <p className="text-primary font-mono text-2xl font-bold">500+</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">HF Downloads</p>
                    </div>
                    <div className="stat-card bg-white p-4 text-center">
                        <p className="text-primary font-mono text-2xl font-bold">7</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">Key Projects</p>
                    </div>
                </section>

                <section id="skills" className="section-border bg-white p-6 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Languages</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Python</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Golang</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">SQL</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">AI / ML</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">LangChain</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">AutoGen</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">CrewAI</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">HF Transformers</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">RAG</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Fine-tuning</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Backend & Cloud</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">FastAPI</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Node.js</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Docker</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Azure</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">Kubernetes</span>
                                <span className="tech-tag text-[11px] font-mono bg-slate-100 px-2 py-0.5 text-slate-700 cursor-default">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="education" className="section-border bg-white p-6 space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Education</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                        <div>
                            <h3 className="text-base font-bold uppercase">St. Vincent Pallotti College of Engineering & Technology</h3>
                            <p className="text-slate-600 text-sm">Bachelor of Technology in Computer Science and Business Systems | CGPA: 8.7</p>
                        </div>
                        <div className="font-mono text-xs text-slate-400 shrink-0">
                            <p>Nagpur, India</p>
                            <p>Sep 2023 – May 2027 (expected)</p>
                        </div>
                    </div>
                </section>

                <section id="achievements" className="section-border bg-white p-6 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Achievements</h2>
                    <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                        <li className="flex gap-2"><span className="text-primary shrink-0 font-bold">›</span><span>Top 20 at IIT Kharagpur KDSH out of 9,913 teams — top 0.02% nationwide.</span></li>
                        <li className="flex gap-2"><span className="text-primary shrink-0 font-bold">›</span><span>Published models and datasets on Hugging Face gaining 500+ downloads.</span></li>
                        <li className="flex gap-2"><span className="text-primary shrink-0 font-bold">›</span><span>Selected as Head Data Manager at NASA Space Apps Challenge, Nagpur.</span></li>
                        <li className="flex gap-2"><span className="text-primary shrink-0 font-bold">›</span><span>Completed Intel Unnati Industrial Training Program delivering an end-to-end RAG-based AI project.</span></li>
                        <li className="flex gap-2"><span className="text-primary shrink-0 font-bold">›</span><span>Wrote technical articles on Medium covering AI, agentic systems, and cloud architecture.</span></li>
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer id="footer" className="section-border border-t border-slate-200 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                <p>© 2025 SHLOK TALHAR / PORTFOLIO</p>
                <p>B.TECH CSE-BS / SVPCET NAGPUR</p>
            </footer>
        </div>
    );
}
