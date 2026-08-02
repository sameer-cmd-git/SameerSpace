// Plain gradient transition between About and Work — no image. Echoes the
// same cool blue-grey tones as the ambient backdrop blobs so it reads as
// an intentional breathing space, not a missing image.
export default function Divider() {
  return (
    <div
      role="presentation"
      style={{
        position: 'relative',
        height: 'clamp(120px, 14vw, 200px)',
        background: 'linear-gradient(180deg, #000 0%, rgba(63,110,140,0.06) 50%, #000 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1px',
          height: '60%',
          background: 'linear-gradient(180deg, transparent, rgba(91,143,176,0.35), transparent)',
        }}
      />
    </div>
  )
}
