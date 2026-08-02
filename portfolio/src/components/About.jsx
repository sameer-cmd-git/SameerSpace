export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '6rem 1.5rem', maxWidth: '48rem', margin: '0 auto' }}
    >
      <p className="label" style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', marginBottom: '0.75rem' }}>
        About
      </p>
      <h2
        className="display"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}
      >
        About
      </h2>

      <div
        className="aurora-card"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--line)',
          padding: '2rem',
        }}
      >
        {/* EDIT HERE: replace this short bio with anything you'd like to add */}
        <p style={{ fontSize: '1.1rem', color: 'var(--slate)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          ECE student with an interest in aerospace and defense technology.
        </p>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.25rem' }}>
          <h3 className="label" style={{ fontSize: '0.7rem', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
            Located In
          </h3>
          <p style={{ color: 'var(--paper)' }}>Karnataka, India</p>
        </div>
      </div>
    </section>
  )
}
