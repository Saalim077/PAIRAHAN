import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

// Assets
import avatar1 from '../assets/avatar_1.png'

const team = [
  { role: 'Lead Architect', desc: 'Specialised in Industrial & Warehousing design concepts.', avatar: avatar1 },
  { role: 'Structural Engineer', desc: 'Expert in RCC & Steel structural analysis for large-scale facilities.', avatar: null },
  { role: 'Project Manager', desc: 'PMP-certified with expertise in Primavera & BIM-based project delivery.', avatar: null },
  { role: 'MEP Engineer', desc: 'Comprehensive MEPF design for industrial and institutional buildings.', avatar: null },
  { role: 'Interior Designer', desc: 'Creating ergonomic and aesthetically pleasing workspaces.', avatar: null },
  { role: 'Planning Specialist', desc: 'Urban and facility planning with government regulatory expertise.', avatar: null },
]

const values = [
  { icon: '🎯', title: 'Result Oriented', desc: 'We measure success by outcomes — on time, on budget, and beyond expectations.' },
  { icon: '🔄', title: 'Process Driven', desc: 'Every project follows a rigorous, proven process that ensures quality at every stage.' },
  { icon: '🤝', title: 'Client First', desc: '70%+ repeat clients is a testament to our commitment to lasting relationships.' },
  { icon: '💡', title: 'Innovation', desc: 'Leveraging the latest tools like BIM, Revit and Primavera to stay ahead.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'Pairahan Design Consultants | About Us'
  }, [])
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero animate-fade-in">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'var(--color-lime-bright)' }}>About the Company</span>
          <h1 className="animate-fade-up delay-100" style={{ color: '#fff', marginTop: '0.5rem' }}>Who We Are</h1>
          <p className="animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '650px', marginTop: '1rem', fontSize: '1.2rem' }}>
            A result-oriented, process-driven consortium of architects, engineers and specialists dedicated to shaping productive spaces for global standard industries.
          </p>
        </div>
      </section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <section className="section" id="company-overview">
        <div className="container">
          <div className="about-overview">
            <div className="about-overview__text animate-slide-right">
              <span className="section-label">Our Story</span>
              <h2>Pairahan Design <span style={{ color: 'var(--color-primary)' }}>Consultants</span></h2>
              <div className="divider" />
              <p>
                Pairahan Design Consultants is a result-oriented &amp; a process-driven Architectural &amp; Allied Services providing company. Today, we are a consortium of Architects, Engineers, Planners, Project Managers, Interior Designers and Technical Specialists offering a complete bouquet of professional services.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                We are multi-disciplinary Engineering Consultants with focus on <strong>Industrial, Warehousing and Institutional</strong> projects. Our strength lies in our ability to strategically plan and creatively implement the vision of ambitious organizations.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                We analyze construction data and present useful information which helps in saving over time &amp; cost while ensuring delivery of quality product. Our team has expertise in standard tools of construction like BIM, Primavera and other related software.
              </p>
            </div>
            <div className="about-overview__stats">
              {[
                { value: '15+', label: 'Qualified Professionals', icon: '👥' },
                { value: '100+', label: 'Projects Delivered', icon: '🏗️' },
                { value: '80%', label: 'Multinational Clientele', icon: '🌐' },
                { value: '70%', label: 'Repeat Clients', icon: '🔄' },
                { value: 'Pan India', label: 'Presence', icon: '📍' },
                { value: 'TURNKEY', label: 'Project Solutions', icon: '🔑' },
              ].map(({ value, label, icon }, index) => (
                <div
                  className="org-stat animate-fade-up"
                  key={label}
                  id={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="org-stat__icon">{icon}</span>
                  <span className="org-stat__value">{value}</span>
                  <span className="org-stat__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="section about-mission" id="mission-vision">
        <div className="container">
          <div className="mission-cards">
            <div className="mission-card animate-fade-up" id="mission-card">
              <div className="mission-card__icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To be in the business of Visioning — Planning — Shaping bespoke Spaces &amp; Facilities for people and processes, delivering enhanced productivity, with full emphasis on saving cost &amp; time.
              </p>
            </div>
            <div className="mission-card mission-card--dark animate-fade-up delay-100" id="vision-card">
              <div className="mission-card__icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To become the single-source EPCMV partner for technically complex facilities, serving organizations from startups to established multinational corporations and corporate groups.
              </p>
            </div>
            <div className="mission-card mission-card--green animate-fade-up delay-200" id="values-card">
              <div className="mission-card__icon">⭐</div>
              <h3>Our Promise</h3>
              <p>
                Design and Build Solutions with a TURNKEY approach — delivering results that meet both functional demands and aspirational goals, within agreed timelines and budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section" id="core-values">
        <div className="container">
          <div className="section-header animate-fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</span>
            <h2>Our Core <span style={{ color: 'var(--color-primary)' }}>Values</span></h2>
            <div className="divider" style={{ margin: '1.5rem auto 0' }} />
          </div>
          <div className="values-grid">
            {values.map(({ icon, title, desc }, index) => (
              <div className="value-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }} key={title} id={`value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="value-card__icon">{icon}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section about-team" id="our-team">
        <div className="container">
          <div className="section-header animate-fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>The Team</span>
            <h2>Our Expert <span style={{ color: 'var(--color-lime-bright)' }}>Consortium</span></h2>
            <p style={{ marginTop: '1.5rem' }}>15+ highly qualified and experienced professionals committed to excellence in every project we undertake nationwide.</p>
          </div>
          <div className="team-grid">
            {team.map(({ role, desc, avatar }, index) => (
              <div className="team-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }} key={role} id={`team-${role.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="team-card__avatar">
                  {avatar ? (
                    <img src={avatar} alt={role} />
                  ) : (
                    role.split(' ').map((w) => w[0]).join('').slice(0, 2)
                  )}
                </div>
                <h4>{role}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner animate-fade-in" style={{ background: 'var(--gradient-dark)', borderTop: '3px solid var(--color-primary)', padding: '8rem 0' }}>
        <div className="container cta-banner__inner" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="animate-fade-up">
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Let's Work <span style={{ color: 'var(--color-lime)' }}>Together</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '1.5rem auto 3rem' }}>Ready to start your next project? Our experts are here to help you design and build the future.</p>
            <div className="cta-banner__buttons" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary" id="about-contact-cta">Start Consultation</Link>
              <Link to="/services" className="btn btn-outline" id="about-services-cta">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
