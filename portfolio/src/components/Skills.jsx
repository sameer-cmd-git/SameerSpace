// EDIT HERE: update these rows as your skills grow.
const rows = [
  { category: 'Tools', value: 'GitHub, VS Code', tags: [] },
  { category: 'Learning', value: '', tags: ['C — Learning', 'Python — Learning'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
      <p className="label" style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', marginBottom: '0.75rem' }}>
        Skills
      </p>
      <h2
        className="display"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '0.75rem' }}
      >
        Skills
      </h2>
      <p style={{ color: 'var(--slate)', marginBottom: '2.5rem' }}>
        Tools I use, and what I'm currently learning.
      </p>

      <div className="tilt-card" style={{ background: 'var(--card)', border: '1px solid var(--line)' }}>
        <div
          className="label"
          style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr',
            fontSize: '0.7rem',
            color: 'var(--accent-bright)',
            padding: '0.9rem 1.5rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <span>Category</span>
          <span>Tools</span>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.category}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              alignItems: 'baseline',
              padding: '1.1rem 1.5rem',
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line)',
              gap: '0.5rem',
            }}
          >
            <span className="label" style={{ fontSize: '0.85rem', color: 'var(--paper)' }}>
              {row.category}
            </span>
            {row.value ? (
              <span style={{ color: 'var(--slate)' }}>{row.value}</span>
            ) : (
              <span style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {row.tags.map((t) => (
                  <span
                    key={t}
                    className="label"
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.3rem 0.75rem',
                      border: '1px solid rgba(107,119,128,0.4)',
                      color: 'var(--slate)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
