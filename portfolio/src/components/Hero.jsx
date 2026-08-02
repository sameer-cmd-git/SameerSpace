import { useEffect, useState } from 'react'
import jetHero from '../assets/jet-hero.jpg'
import SplitText from './SplitText.jsx'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${jetHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Gradient scrim: this image has a clean dark void in the lower-left,
          so only a light touch is needed — mainly to guarantee legibility
          regardless of how the crop falls on different viewport widths. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem 4.5rem',
        }}
      >
        {/* EDIT HERE: name and role */}
        <h1
          className="display"
          style={{
            fontSize: 'clamp(2.75rem, 9vw, 5.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            filter: 'drop-shadow(0 4px 18px rgba(63, 110, 140, 0.35))',
          }}
        >
          {loaded && <SplitText text="Sameer Kulkarni" stagger={0.025} gradient />}
        </h1>
        <p
          className="label"
          style={{
            fontSize: '0.85rem',
            color: 'var(--accent-bright)',
            marginBottom: '2rem',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.5s',
          }}
        >
          ECE Student
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s',
          }}
        >
          <a
            href="#contact"
            className="label magnetic-btn"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '0.8rem',
              background: 'var(--accent)',
              color: '#000',
              display: 'inline-block',
            }}
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="label magnetic-btn"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '0.8rem',
              border: '1px solid rgba(228,230,232,0.25)',
              color: 'var(--paper)',
              display: 'inline-block',
            }}
          >
            View work
          </a>
        </div>
      </div>

      {/* Horizon-line signature element: a single hairline rule, like a flight
          instrument's artificial horizon, marking the boundary below the hero. */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(63,110,140,0.6), transparent)',
          zIndex: 3,
        }}
      />
    </section>
  )
}


