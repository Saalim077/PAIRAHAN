import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

// Import assets
import logisticsImg from '../assets/logistics_park.png'
import manufacturingImg from '../assets/manufacturing_plant.png'
import commercialImg from '../assets/commercial_hub.png'
import pharmaImg from '../assets/pharma_plant.png'
import industrialHero from '../assets/industrial_hero.png'

const categories = ['All', 'Industrial', 'Warehousing', 'Institutional', 'Commercial']

const projects = [
  {
    id: 1,
    title: 'Bluebird Logistics Park',
    category: 'Warehousing',
    type: 'Design & Build',
    location: 'Delhi NCR',
    desc: 'Large-scale logistics and warehousing facility with modern loading dock systems, green landscaping and administrative block.',
    tags: ['Architecture', 'Structural', 'MEP'],
    image: logisticsImg,
    color: '#1B5E20',
  },
  {
    id: 2,
    title: 'Leora Logistics Pvt Ltd',
    category: 'Warehousing',
    type: 'Architectural Design',
    location: 'Pan India',
    desc: 'Distribution and logistics hub with premium façade design, efficient truck docking bays and integrated landscape.',
    tags: ['Architecture', 'Interior', 'Landscape'],
    image: logisticsImg,
    color: '#2E7D32',
  },
  {
    id: 3,
    title: 'Anantraj Food Hub',
    category: 'Commercial',
    type: 'EPCMV',
    location: 'New Delhi',
    desc: 'Commercial food court and retail hub featuring contemporary architectural language, open corridors and branded facades.',
    tags: ['Architecture', 'Interior', 'Project Mgmt'],
    image: commercialImg,
    color: '#388E3C',
  },
  {
    id: 4,
    title: 'Industrial Manufacturing Facility',
    category: 'Industrial',
    type: 'Turnkey Design & Build',
    location: 'Haryana',
    desc: 'State-of-the-art industrial manufacturing plant with PEB structures, complete MEPF systems and process integration.',
    tags: ['Structural', 'MEPF', 'Piping'],
    image: manufacturingImg,
    color: '#4CAF50',
  },
  {
    id: 5,
    title: 'Corporate Office Campus',
    category: 'Institutional',
    type: 'Interior & Architecture',
    location: 'New Delhi',
    desc: 'Modern corporate office campus with ergonomic workspaces, collaborative zones and premium interior finishing.',
    tags: ['Architecture', 'Interior', 'MEP'],
    image: commercialImg,
    color: '#1B5E20',
  },
  {
    id: 6,
    title: 'Pre-Engineered Warehouse',
    category: 'Warehousing',
    type: 'Structural Engineering',
    location: 'Rajasthan',
    desc: 'Multi-bay pre-engineered building warehouse with clear-span roofing, fire safety systems and utility integration.',
    tags: ['PEB', 'Structural', 'Fire Safety'],
    image: logisticsImg,
    color: '#2E7D32',
  },
  {
    id: 7,
    title: 'Pharmaceutical Plant',
    category: 'Industrial',
    type: 'EPCMV Design',
    location: 'Gujarat',
    desc: 'GMP-compliant pharmaceutical manufacturing facility with process piping, HVAC cleanrooms and electrical systems.',
    tags: ['Process', 'MEPF', 'Piping'],
    image: pharmaImg,
    color: '#388E3C',
  },
  {
    id: 8,
    title: 'Institutional Campus Master Plan',
    category: 'Institutional',
    type: 'Master Planning',
    location: 'Noida',
    desc: 'Comprehensive master plan for an institutional campus including academic blocks, hostels, sports facilities and utilities.',
    tags: ['Planning', 'Architecture', 'Landscape'],
    image: industrialHero,
    color: '#4CAF50',
  },
  {
    id: 9,
    title: 'Cold Chain Logistics Hub',
    category: 'Industrial',
    type: 'Design & Build',
    location: 'Mumbai',
    desc: 'Temperature-controlled cold storage and distribution facility with advanced refrigeration and MEP integration.',
    tags: ['HVAC', 'Structural', 'MEPF'],
    image: logisticsImg,
    color: '#1B5E20',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'Pairahan Design Consultants | Our Projects'
  }, [])

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="projects-page">
      {/* Page Hero */}
      <section className="page-hero animate-fade-in">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'var(--color-lime-bright)' }}>Our Portfolio</span>
          <h1 className="animate-fade-up delay-100" style={{ color: '#fff', marginTop: '0.5rem' }}>Our Projects</h1>
          <p className="animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', marginTop: '1rem', fontSize: '1.2rem' }}>
            From warehousing giants to industrial powerhouses — a showcase of our most impactful and innovative projects across India.
          </p>
        </div>
      </section>

      {/* ===== FILTER + GRID ===== */}
      <section className="section" id="projects-grid-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="projects-filter animate-fade-up delay-300" id="projects-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid" id="projects-grid">
            {filtered.map(({ id, title, category, type, location, desc, tags, image, color }, index) => (
              <div 
                className="project-card animate-fade-up" 
                key={id} 
                id={`project-${id}`}
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className="project-card__visual">
                  <img src={image} alt={title} loading="lazy" />
                  <span className="project-card__category-badge">{category}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__type">{type}</span>
                    <span className="project-card__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {location}
                    </span>
                  </div>
                  <h3 className="project-card__title">{title}</h3>
                  <p className="project-card__desc">{desc}</p>
                  <div className="project-card__tags">
                    {tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="projects-stats animate-fade-in" id="projects-stats">
        <div className="container">
          <div className="projects-stats__inner">
            {[
              { value: '100+', label: 'Projects Completed', icon: '🏗️' },
              { value: '15+', label: 'Years of Experience', icon: '📅' },
              { value: '80%', label: 'Multinational Clients', icon: '🌐' },
              { value: '70%', label: 'Repeat Business', icon: '🔄' },
            ].map(({ value, label, icon }, index) => (
              <div className="projects-stat animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }} key={label}>
                <span className="projects-stat__icon">{icon}</span>
                <span className="projects-stat__value">{value}</span>
                <span className="projects-stat__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ background: 'var(--color-bg)', padding: '8rem 0' }}>
        <div className="container animate-fade-up" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Start Your Project</span>
          <h2 style={{ marginTop: '0.5rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Ready to Build Your Next <br /><span style={{ color: 'var(--color-primary)' }}>Success Story?</span></h2>
          <p style={{ maxWidth: '600px', margin: '2rem auto 3rem', fontSize: '1.1rem' }}>
            Whether you are a startup or a multinational corporation, we have the expertise to deliver your vision on time and within budget.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" id="projects-contact-cta">Discuss Your Project</Link>
            <Link to="/services" className="btn btn-dark" id="projects-services-cta">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
