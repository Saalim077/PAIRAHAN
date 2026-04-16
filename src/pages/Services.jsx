import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const serviceCategories = [
  {
    id: 'architectural',
    title: 'Architectural & Planning',
    icon: '🏛️',
    color: '#2E7D32',
    services: [
      'Preliminary Design',
      'Scheme Design (SD)',
      'Design Development',
      'Detailed Engineering (DE)',
      'Architectural Working Drawings',
      'Detailed Design & Drawings',
      'Elevation & 3D Rendering',
      'Perspective Views for Approval',
      'Site Visit & Supervision',
      'Architectural Specifications',
      'Site Plan / Master Plan',
      'Landscape Design',
    ],
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    icon: '🏗️',
    color: '#1B5E20',
    services: [
      'Structural Feasibility Study',
      'Structural Analysis & Design',
      'Foundation Design',
      'RCC & Steel Structure Design',
      'Pre-Engineered Building (PEB)',
      'Structural Working Drawings',
      'Bill of Quantities (BOQ)',
      'Tender Enquiry & Evaluation',
      'Structural Specifications',
      'Site Supervision',
      'Quality Assurance',
      'Structural Audit',
    ],
  },
  {
    id: 'mepf',
    title: 'MEPF Engineering',
    icon: '⚡',
    color: '#4CAF50',
    services: [
      'HVAC Design & Engineering',
      'Electrical & Lighting Design',
      'Plumbing & Drainage Design',
      'Fire Fighting System Design',
      'ELV & Security Systems',
      'Load Calculations & SLD',
      'Equipment Selection & Specs',
      'Tender Documents & BOQ',
      'Site Visits & Supervision',
      'MEP Coordination (BIM)',
      'Equipment Inspection at Vendor',
      'Payment Certificates',
    ],
  },
  {
    id: 'piping',
    title: 'Mechanical Utilities & Piping',
    icon: '🔧',
    color: '#388E3C',
    services: [
      'Equipment List (Compressors, Cooling Towers)',
      'Process Flow Diagrams',
      'Mechanical Equipment Specifications',
      'SLD for Process Networks',
      'Bill of Quantities',
      'Tender Enquiry & Evaluation',
      'Recommendation of Bidders',
      'Validation of Equipment Drawings',
      'Inspection at Vendor Facility',
      'Clearance for Dispatch',
      'Site Visits & Checking',
      'HSD Area Design',
    ],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    icon: '🎨',
    color: '#2E7D32',
    services: [
      'Interior Concept Design',
      'Space Planning',
      'Material & Finish Selection',
      'Furniture Design & Layout',
      'Lighting Design',
      '3D Visualization',
      'Working Drawings',
      'BOQ & Cost Estimation',
      'Vendor Coordination',
      'Site Supervision',
      'Ergonomic Workspace Planning',
      'Branding Integration',
    ],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: '📊',
    color: '#1B5E20',
    services: [
      'Project Planning & Scheduling',
      'Primavera P6 Scheduling',
      'BIM Implementation',
      'Cost Planning & Control',
      'Risk Management',
      'Stakeholder Coordination',
      'Progress Monitoring',
      'Quality Management',
      'Contractor Management',
      'Document Control',
      'Commissioning Management',
      'Handover & Closeout',
    ],
  },
]

const tools = [
  { name: 'AutoCAD 2019', category: 'Design' },
  { name: 'Revit', category: 'BIM' },
  { name: 'ETABS', category: 'Structural' },
  { name: 'SAFE', category: 'Structural' },
  { name: 'Staad Pro', category: 'Structural' },
  { name: 'Primavera', category: 'PM' },
  { name: 'MS Project', category: 'PM' },
  { name: 'Autodesk 3Ds Max', category: 'Visualization' },
  { name: 'SketchUp', category: 'Design' },
  { name: 'BIM 360', category: 'BIM' },
  { name: 'Dialux', category: 'MEP' },
  { name: 'Simaris', category: 'MEP' },
  { name: 'Adobe Photoshop', category: 'Visualization' },
  { name: 'Adobe After Effect', category: 'Visualization' },
  { name: 'Coral Draw', category: 'Design' },
  { name: 'MS Office 2016', category: 'Management' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('architectural')
  const active = serviceCategories.find(c => c.id === activeTab)

  useEffect(() => {
    document.title = 'Pairahan Design Consultants | Our Services'
  }, [])

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero animate-fade-in">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'var(--color-lime-bright)' }}>What We Offer</span>
          <h1 className="animate-fade-up delay-100" style={{ color: '#fff', marginTop: '0.5rem' }}>Our Professional Services</h1>
          <p className="animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '650px', marginTop: '1.5rem', fontSize: '1.2rem' }}>
            Comprehensive Architectural, Engineering, and Project Management solutions specifically tailored for Industrial, Warehousing and Institutional excellence.
          </p>
        </div>
      </section>

      {/* ===== SERVICE TABS ===== */}
      <section className="section" id="services-tabs">
        <div className="container">
          <div className="section-header animate-fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Expertise</span>
            <h2>Complete <span style={{ color: 'var(--color-primary)' }}>Service Portfolio</span></h2>
            <div className="divider" style={{ margin: '1.5rem auto 0' }} />
          </div>

          <div className="services-tabs">
            <div className="services-tabs__nav animate-slide-right" id="services-tab-nav">
              {serviceCategories.map(({ id, icon, title }, index) => (
                <button
                  key={id}
                  id={`tab-${id}`}
                  className={`tab-btn ${activeTab === id ? 'active' : ''}`}
                  onClick={() => setActiveTab(id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="tab-btn__icon">{icon}</span>
                  <span className="tab-btn__label">{title}</span>
                </button>
              ))}
            </div>

            <div className="services-tabs__content" id="services-tab-content">
              <div className="tab-content" key={activeTab}>
                <div className="tab-content__header" style={{ background: active.color }}>
                  <span className="tab-content__icon">{active.icon}</span>
                  <h3>{active.title}</h3>
                </div>
                <div className="tab-content__body">
                  <div className="tab-services-list">
                    {active.services.map((s, i) => (
                      <div className="tab-service-item animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }} key={i}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOFTWARE & TOOLS ===== */}
      <section className="section tools-section" id="tools-section">
        <div className="container">
          <div className="section-header animate-fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Technology</span>
            <h2>Software & <span style={{ color: 'var(--color-primary)' }}>Digital Tools</span></h2>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>We leverage cutting-edge industry software to deliver precision, speed, and innovation at every project stage.</p>
          </div>
          <div className="tools-grid">
            {tools.map(({ name, category }, index) => (
              <div 
                className="tool-card animate-fade-up" 
                key={name} 
                id={`tool-${name.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="tool-category">{category}</span>
                <h4>{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT ===== */}
      <section className="section equipment-section" id="equipment-section">
        <div className="container">
          <div className="equipment-inner">
            <div className="equipment-text animate-slide-right">
              <span className="section-label">Infrastructure</span>
              <h2>Office <span style={{ color: 'var(--color-primary)' }}>Equipment</span></h2>
              <div className="divider" />
              <p>A fully equipped professional hub with high-end hardware and survey infrastructure ensures we deliver technical outputs with unmatched accuracy.</p>
              <div className="equipment-list">
                {[
                  'Desktop Computers — 10 Nos.',
                  'Laptops — 5 Nos.',
                  'Xerox Work Centre',
                  'HP Design Jet Plotter',
                  'Epson Projector',
                  'EPABX Machine',
                  'Smart SX Access Card System',
                  'HP All-in-One Printer & Scanner',
                  'High-Speed Internet Connection',
                  'Total Stations — 6 Nos.',
                  'Auto Level — 3 Nos.',
                  'Office Equipment & Furniture',
                ].map((item, index) => (
                  <div className="equipment-item animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }} key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="equipment-cta-box animate-fade-in delay-300">
              <div className="equipment-cta-icon">🏢</div>
              <h3>Ready to Start Your Project?</h3>
              <p>Our consortium of 15+ experts is ready to transform your industrial or warehousing vision into a high-performance reality.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%' }} id="services-contact-cta">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
