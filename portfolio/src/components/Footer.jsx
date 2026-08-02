export default function Footer() {
  return (
    <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p style={{ color: 'var(--slate-dim)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Sameer Kulkarni.
        </p>
        {/* EDIT HERE: point these at your real profiles */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" aria-label="GitHub" style={{ color: 'var(--slate)' }}>
            GitHub
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: 'var(--slate)' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
