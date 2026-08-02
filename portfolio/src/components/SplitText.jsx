// Lightweight split-text reveal, in the spirit of reactbits' SplitText component.
// Splits text into words, each word into letters, and staggers a fade+lift animation.
//
// gradient: when true, applies the .gradient-text treatment to each letter span
// individually (with background-attachment: fixed-style positioning via
// background-size/position tied to viewport width) so the gradient reads as
// one continuous sweep across the whole word instead of restarting per letter.
export default function SplitText({ text, as: Tag = 'span', className = '', style = {}, delay = 0, stagger = 0.03, gradient = false }) {
  const words = text.split(' ')
  let letterIndex = 0
  const totalLetters = text.replace(/ /g, '').length

  return (
    <Tag className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter, li) => {
            const idx = letterIndex++
            const gradientStyle = gradient
              ? {
                  background: 'linear-gradient(135deg, #ffffff 0%, #d7e4ec 28%, #8fb8d6 55%, #5b8fb0 75%, #3f6e8c 100%)',
                  backgroundSize: `${totalLetters * 100}% 100%`,
                  backgroundPosition: `${totalLetters <= 1 ? 0 : (idx / (totalLetters - 1)) * 100}% 50%`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }
              : {}
            return (
              <span
                key={li}
                className="split-letter"
                style={{ animationDelay: `${delay + idx * stagger}s`, ...gradientStyle }}
              >
                {letter}
              </span>
            )
          })}
          {wi < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}
