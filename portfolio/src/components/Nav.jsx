import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      let current = ''
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 200) {
          current = section.id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div
          style={{
            maxWidth: '76rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* EDIT HERE: your name / wordmark */}
          <a
            href="#"
            className="label"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--paper)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            SAMEER<span style={{ color: 'var(--accent-bright)' }}>_</span>SPACE
          </a>

          <div className="nav-links" style={{ display: 'flex', gap: '2.75rem' }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label nav-link"
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: active === l.href.slice(1) ? 'var(--paper)' : 'var(--slate)',
                  position: 'relative',
                  paddingBottom: '6px',
                }}
              >
                {l.label}
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '1.5px',
                    width: active === l.href.slice(1) ? '100%' : '0%',
                    background: 'var(--accent-bright)',
                    transition: 'width 0.25s ease',
                  }}
                />
              </a>
            ))}
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            style={{ display: 'none', fontSize: '1.5rem', color: 'var(--paper)' }}
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="mobile-panel"
          style={{
            position: 'fixed',
            inset: '5rem 0 0 0',
            background: 'var(--ink)',
            zIndex: 40,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="display"
              style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--paper)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-link span { }
        .nav-link:hover { color: var(--paper) !important; }
        .nav-link:hover span { width: 100% !important; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-panel { display: none !important; }
        }
      `}</style>
    </>
  )
}
