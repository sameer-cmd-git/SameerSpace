import { useState } from 'react'
import jetTail from '../assets/jet-tail.jpg'

export default function Contact() {
  const [toast, setToast] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setToast(true)
    setTimeout(() => setToast(false), 5000)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--ink)',
    border: '1px solid var(--line)',
    color: 'var(--paper)',
    fontFamily: 'Geist, sans-serif',
    fontSize: '1rem',
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        backgroundImage: `linear-gradient(180deg, #000 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.88) 100%), url(${jetTail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ maxWidth: '38rem', margin: '0 auto' }}>
      <p className="label" style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', marginBottom: '0.75rem' }}>
        Contact
      </p>
      <h2
        className="display"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}
      >
        Get in touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="aurora-card"
        style={{ background: 'var(--card)', border: '1px solid var(--line)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        <div>
          <label className="label" htmlFor="name" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label className="label" htmlFor="email" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="your@email.com" style={inputStyle} />
        </div>
        <div>
          <label className="label" htmlFor="message" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
            Message
          </label>
          <textarea id="message" name="message" rows={5} required placeholder="Your message..." style={inputStyle} />
        </div>
        <button
          type="submit"
          className="label magnetic-btn"
          style={{ padding: '0.9rem', background: 'var(--accent)', color: '#000', fontSize: '0.8rem' }}
        >
          Send message
        </button>
        <p style={{ fontSize: '0.8rem', color: 'var(--slate-dim)', lineHeight: 1.6 }}>
          {/* EDIT HERE: replace with your real email, and wire this form up to Formspree/EmailJS when ready */}
          This form isn't connected to a backend yet — for now, reach me directly at{' '}
          <a href="mailto:your.email@example.com" style={{ color: 'var(--accent-bright)' }}>
            your.email@example.com
          </a>
          .
        </p>
      </form>
      </div>

      {toast && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            maxWidth: '20rem',
            padding: '1rem 1.5rem',
            background: 'var(--card)',
            border: '1px solid var(--line)',
            fontSize: '0.9rem',
          }}
        >
          This form is a placeholder. Email me directly using the link below the button for now.
        </div>
      )}
    </section>
  )
}
