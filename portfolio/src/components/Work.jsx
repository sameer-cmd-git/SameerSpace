import projects from '../projects.js'

export default function Work() {
  return (
    <section id="work" style={{ padding: '6rem 1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
      <p className="label" style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', marginBottom: '0.75rem' }}>
        Work
      </p>
      <h2
        className="display"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}
      >
        Work
      </h2>

      {projects.length === 0 ? (
        <div
          className="aurora-card"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--line)',
            padding: '3rem',
            textAlign: 'center',
          }}
        >
          <p className="label" style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>
            Projects coming soon
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p) => (
            <div key={p.name} className="tilt-card" style={{ background: 'var(--card)', border: '1px solid var(--line)', padding: '2rem' }}>
              <h3 className="display" style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {p.name}
              </h3>
              <p style={{ color: 'var(--slate)', marginBottom: '1.25rem', lineHeight: 1.6 }}>{p.description}</p>
              {p.tags?.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="label"
                      style={{ fontSize: '0.7rem', padding: '0.3rem 0.75rem', border: '1px solid var(--line)', color: 'var(--slate)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                {p.repo && (
                  <a href={p.repo} style={{ color: 'var(--accent-bright)', fontSize: '0.9rem' }}>
                    Repo →
                  </a>
                )}
                {p.link && (
                  <a href={p.link} style={{ color: 'var(--accent-bright)', fontSize: '0.9rem' }}>
                    {p.linkLabel || 'Link'} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
