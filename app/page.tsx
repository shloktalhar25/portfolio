"use client";

import { useState } from 'react';

type FilterType = 'all' | 'ai' | 'cloud' | 'data';

export default function Home() {
  const [cryptoReadMore, setCryptoReadMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  return (
    <div className="max-w-[1100px] mx-auto p-8 lg:p-12 space-y-8">
      {/* Header Section */}
      <header id="header" className="section-border bg-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">Shlok Talhar</h1>
              <p className="text-primary font-mono text-sm font-medium tracking-wider uppercase">Computer Science
                  Student / GenAI & Agentic Systems Specialist</p>
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
                  <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/17Gz_xkr2Ln9OdK4CcjAVxn2nDRhHsNAW/view?usp=sharing" className="text-xs font-mono font-bold uppercase text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-white transition-all inline-block">Review_CV.pdf</a>
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
                  {/* Project: Samuel Code */}
                  <article className="project-card bg-white p-6 flex flex-col gap-5">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">terminal</span>
                              <div>
                                  <span className="project-number">01</span>
                                  <h3 className="text-lg font-bold leading-tight uppercase">Samuel Code: Claude Code Alternative</h3>
                              </div>
                          </div>
                          <div className="flex-grow space-y-3">
                              <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Engineered a Claude Code-style autonomous coding agent powered by GPT-4o mini that takes a single natural language prompt and delivers a complete, ready-to-run software project.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Eliminated the gap between AI text and real code using MCP tool calling — agents write actual files to disk via a two-agent system where one owns architecture and the other owns code.</span></li>
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

                  {/* Project: NCERT RAG Learning Assistant */}
                  <article className="project-card bg-white p-6 flex flex-col gap-5">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">school</span>
                              <div>
                                  <span className="project-number">02</span>
                                  <h3 className="text-lg font-bold leading-tight uppercase">NCERT RAG Learning Assistant</h3>
                                  <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Intel Unnati Industrial Training</p>
                              </div>
                          </div>
                          <div className="flex-grow space-y-3">
                              <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Built a RAG-based learning assistant for NCERT Class 5–10 students that retrieves grade-appropriate answers from syllabus-aligned textbooks instead of a generic knowledge base.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Architected separate ChromaDB vector stores per class and subject, solving the concept leakage problem common in single-database RAG systems.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Powered by Meta LLaMA 3.1 (8B) via Groq API, with a FastAPI backend and full-stack web interface for seamless student interaction.</span></li>
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
                  {/* Project: Scalable Multi-Agentic System on Kubernetes */}
                  <article className="project-card bg-white p-6 flex flex-col gap-5">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">cloud_done</span>
                              <div>
                                  <span className="project-number">03</span>
                                  <h3 className="text-lg font-bold leading-tight uppercase">Scalable Multi-Agentic System on Kubernetes</h3>
                              </div>
                          </div>
                          <div className="flex-grow space-y-3">
                              <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Deployed a production-grade multi-agent AI platform using Autogen (AG2) and FastAPI to coordinate intelligent agent workflows through scalable REST services.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Containerized with Docker and deployed on AKS via ACR, implementing load balancing, horizontal scaling, and fault-tolerant architecture for high availability under concurrent traffic.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Delivered an end-to-end cloud-native AI service demonstrating strong LLMOps practices, with real-time observability via Grafana dashboards monitoring performance and service health.</span></li>
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

              {/* Data Engineering Projects */}
              {(activeFilter === 'all' || activeFilter === 'data') && (
                <>
                  {/* Project: Serverless Crypto Data ELT Pipeline */}
                  <article className="project-card bg-white p-6 flex flex-col gap-5">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">analytics</span>
                              <div>
                                  <span className="project-number">04</span>
                                  <h3 className="text-lg font-bold leading-tight uppercase">Serverless Crypto Data ELT Pipeline</h3>
                                  <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Cloud & Data Engineering</p>
                              </div>
                          </div>
                          <div className="flex-grow space-y-3">
                              <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Designed a serverless ELT pipeline ingesting real-time crypto data from CoinGecko API to Azure Data Lake Storage Gen2 using Azure Functions.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Configured Snowflake External Stages to directly query raw JSON data files from the data lake, achieving zero-copy storage overhead for analytics.</span></li>
                                  <li className="flex gap-2"><span className="text-slate-400 shrink-0">›</span><span>Provisioned the cloud-native infrastructure (Azure Storage, Function Apps, Snowflake) using Terraform for repeatable automated deployments.</span></li>
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
                                                  <li>Implementing Snowpipe for auto-ingestion.</li>
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
                  <p className="text-primary font-mono text-2xl font-bold">4</p>
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
