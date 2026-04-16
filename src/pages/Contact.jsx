import { useState, useEffect } from 'react'
import './Contact.css'

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z"/>
      </svg>
    ),
    title: 'Phone',
    value: '+91-9953930499',
    link: 'tel:+919953930499',
    id: 'contact-phone',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email',
    value: 'Hussain@pairahan.in',
    link: 'mailto:Hussain@pairahan.in',
    id: 'contact-email',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Website',
    value: 'www.Pairahan.in',
    link: 'http://www.pairahan.in',
    id: 'contact-website',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Office Address',
    value: 'Plot no 148, Upper Ground Floor, Pocket-2, Jasola New Delhi - 110025',
    link: 'https://maps.google.com/?q=Jasola,+New+Delhi+110025',
    id: 'contact-address',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    document.title = 'Pairahan Design Consultants | Contact Us'
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero animate-fade-in">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'var(--color-lime-bright)' }}>Get In Touch</span>
          <h1 className="animate-fade-up delay-100" style={{ color: '#fff', marginTop: '0.5rem' }}>Contact Us</h1>
          <p className="animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '650px', marginTop: '1.5rem', fontSize: '1.2rem' }}>
            Ready to start your next project? Reach out to our consortium of experts for a comprehensive consultation or detailed project quote.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-inner">
            {/* Info Panel */}
            <div className="contact-info animate-slide-right">
              <span className="section-label">Reach Us</span>
              <h2>Let's <span style={{ color: 'var(--color-primary)' }}>Connect</span></h2>
              <div className="divider" />
              <p style={{ margin: '1.5rem 0 3rem' }}>
                We'd love to hear about your project vision. Fill out the form or reach us directly via any of the channels below. Our team typically responds within 24 hours with a tailored approach.
              </p>

              <div className="contact-cards">
                {contactInfo.map(({ icon, title, value, link, id }, index) => (
                  <a
                    key={id}
                    href={link}
                    className="contact-card animate-fade-up"
                    id={id}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="contact-card__icon">{icon}</div>
                    <div className="contact-card__text">
                      <span className="contact-card__title">{title}</span>
                      <span className="contact-card__value">{value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder animate-fade-up delay-400" id="map-placeholder">
                <div className="map-placeholder__inner">
                  <span className="map-pin">📍</span>
                  <h4>Pairahan Design Consultants</h4>
                  <p>Plot no 148, Upper Ground Floor, Pocket-2<br />Jasola, New Delhi - 110025</p>
                  <a
                    href="https://maps.google.com/?q=Jasola+New+Delhi+110025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '1rem', fontSize: '0.9rem', padding: '0.8rem 2rem' }}
                    id="open-maps-btn"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="contact-form-panel animate-fade-up delay-200">
              {submitted ? (
                <div className="success-message" id="success-message">
                  <span className="success-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our specialist team will get back to you within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '2.5rem', width: '100%' }}
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    id="send-another-btn"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form" noValidate>
                  <h3 className="form-title">Send Us a Message</h3>

                  <div className="form-row">
                    <div className={`form-group ${errors.name ? 'error' : ''}`}>
                      <label htmlFor="form-name">Full Name *</label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-group ${errors.email ? 'error' : ''}`}>
                      <label htmlFor="form-email">Email Address *</label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-company">Company Name</label>
                      <input
                        type="text"
                        id="form-company"
                        name="company"
                        placeholder="Your company"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-service">Service Interested In</label>
                    <select id="form-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option value="architectural">Architectural Design</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="mepf">MEPF Engineering</option>
                      <option value="project-management">Project Management</option>
                      <option value="interior">Interior Design</option>
                      <option value="epcmv">EPCMV Turnkey Solution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label htmlFor="form-message">Message *</label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={6}
                      placeholder="Describe your project and requirements..."
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary form-submit" id="form-submit-btn">
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}>
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
