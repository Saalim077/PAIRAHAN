import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css'

const stats = [
  { value: '15+', label: 'Expert Professionals' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '80%', label: 'MNC Clientele' },
  { value: '70%', label: 'Repeat Clients' },
]

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Architectural Design',
    desc: 'Aesthetically compelling, ergonomic and process-efficient spaces tailored to your budget and timeline.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: 'Structural Engineering',
    desc: 'Robust structural solutions for industrial, warehousing and institutional facilities with full compliance.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'MEPF Engineering',
    desc: 'Comprehensive Mechanical, Electrical, Plumbing & Fire-fighting design and consulting services.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Project Management',
    desc: 'End-to-end project oversight using BIM, Primavera and industry-leading tools for on-time delivery.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Interior Design',
    desc: 'Bespoke interior environments that balance productivity and aesthetics for workplaces and facilities.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'EPCMV Solutions',
    desc: 'Single-source EPCMV for technically complex facilities, from startups to established multinationals.',
  },
]

const clients = [
  'Bluebird Logistics', 'Leora Logistics', 'Pan India Presence',
  'Multinational Clients', 'Industrial Facilities', 'Warehousing',
]

export default function Home() {
  useEffect(() => {
    document.title = 'Pairahan Design Consultants | Home'
  }, [])
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__badge animate-fade-up">
            <span className="badge">Architectural &amp; Engineering Consultants</span>
          </div>
          <h1 className="hero__title animate-fade-up delay-100">
            <span>Designing</span> <br />
            <span className="hero__title-highlight">"Productive Spaces"</span>
          </h1>
          <p className="hero__desc animate-fade-up delay-200">
            We are in the business of Visioning — Planning — Shaping bespoke Spaces &amp; Facilities for people and processes, delivering enhanced productivity, with full emphasis on saving cost &amp; time.
          </p>
          <div className="hero__cta animate-fade-up delay-300">
            <Link to="/projects" className="btn btn-primary" id="hero-cta-projects">Explore Projects</Link>
            <Link to="/contact" className="btn btn-outline" id="hero-cta-contact">Get a Free Quote</Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats animate-fade-in delay-400">
          <div className="container hero__stats-inner">
            {stats.map(({ value, label }, index) => (
              <div className="hero__stat" key={label}>
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="section about-teaser" id="about-teaser">
        <div className="container">
          <div className="about-teaser__inner">
            <div className="about-teaser__text animate-slide-right">
              <span className="section-label">Who We Are</span>
              <h2>Pairahan Design <span className="text-green">Consultants</span></h2>
              <div className="divider" />
              <p>
                Pairahan Design Consultants is a result-oriented &amp; process-driven Architectural &amp; Allied Services providing company. We are a consortium of Architects, Engineers, Planners, Project Managers, Interior Designers and Technical Specialists offering a complete bouquet of professional services.
              </p>
              <p style={{ marginTop: '1rem' }}>
                As multi-disciplinary Engineering Consultants, we focus on <strong>Industrial, Warehousing and Institutional</strong> projects with Pan India presence.
              </p>
              <div className="about-teaser__highlights">
                {[
                  'Privately held company',
                  '15+ qualified engineers & managers',
                  'Pan India presence',
                  'TURNKEY project solutions',
                  '80%+ multinational clientele',
                  '70%+ repeat clients',
                ].map((item, index) => (
                  <div className="highlight-item animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }} key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary animate-fade-up delay-300" style={{ marginTop: '2.5rem' }} id="about-learn-more-btn">Learn More About Us</Link>
            </div>
            <div className="about-teaser__visual animate-fade-in delay-200">
              <div className="about-teaser__img-stack">
                <div className="about-img about-img--main animate-scale-in" />
                <div className="about-img about-img--secondary animate-scale-in delay-200" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', padding: '2rem', textAlign: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📐</div>
                    <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#A2D149' }}>12+ Years</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 600 }}>of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-section" id="services-section">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="section-label">What We Offer</span>
            <h2>Our Core <span className="text-green">Services</span></h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gradient-green)', margin: '1.5rem auto 0', borderRadius: '2px' }} />
          </div>
          <div className="services-grid">
            {services.map(({ icon, title, desc }, index) => (
              <div className={`service-card animate-fade-up`} style={{ animationDelay: `${index * 0.1}s` }} key={title} id={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="service-card__icon">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="animate-fade-up delay-300">
            <Link to="/services" className="btn btn-primary" id="all-services-btn">View All Service Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section" id="why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-text animate-slide-right">
              <span className="section-label">Why Choose PDC</span>
              <h2>Single Source for <br /><span className="text-lime">Complex Projects</span></h2>
              <div className="divider" />
              <p>We strategically plan and creatively implement the vision of ambitious organizations by designing spaces or facilities that are aesthetically compelling, ergonomic &amp; process efficient — complying to their budgets &amp; timelines.</p>

              <div className="why-features">
                {[
                  { title: 'BIM & Technology', desc: 'We use BIM, Primavera, AutoCAD, Revit, ETABS and cutting-edge tools for precision delivery.' },
                  { title: 'End-to-End Delivery', desc: 'From concept to commissioning — a complete EPCMV turnkey solution provider.' },
                  { title: 'Pan India Reach', desc: 'Strong presence across India with a dedicated team of 15+ qualified professionals.' },
                ].map(({ title, desc }, index) => (
                  <div className="why-feature animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }} key={title}>
                    <div className="why-feature__dot" />
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-visual animate-fade-in delay-200">
              <div className="why-card">
                <div className="why-card__header">
                  <span>Our Technology Stack</span>
                </div>
                <div className="why-card__body">
                  {[
                    'AutoCAD 2019', 'Revit', 'ETABS', 'BIM', 'SAFE', 'Primavera',
                    'Autodesk 3Ds Max', 'SketchUp', 'Staad Pro', 'MS Project',
                    'Adobe Suite', 'Dialux', 'Simaris', 'Coral Draw', 'MS Office',
                  ].map((sw, index) => (
                    <span className="sw-tag animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }} key={sw}>{sw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner animate-fade-in" id="cta-banner" style={{ background: 'var(--gradient-dark)', padding: '8rem 0', borderTop: '2px solid var(--color-primary)' }}>
        <div className="container cta-banner__inner" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="animate-fade-up">
            <span className="section-label" style={{ justifyContent: 'center', color: 'var(--color-lime-bright)' }}>Let's Build Together</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}>Ready to Build Something <br /><span style={{ color: 'var(--color-lime)' }}>Extraordinary?</span></h2>
            <p style={{ maxWidth: '700px', margin: '1.5rem auto 2.5rem', fontSize: '1.2rem' }}>Let's discuss your project and create productive spaces that inspire and perform. Our experts are ready to transform your vision into reality.</p>
            <div className="cta-banner__buttons" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary" id="cta-contact-btn">Start a Consultation</Link>
              <Link to="/projects" className="btn btn-outline" id="cta-portfolio-btn">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
