import { ImageResponse } from 'next/og'

export const alt = 'Barnstorm Computer Services - Mountain Tech, Done Right'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D1B2A',
          position: 'relative',
        }}
      >
        {/* Teal accent bar at the top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 6,
            background: '#3A9BD5',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#F7F9FC',
              letterSpacing: '0.05em',
              display: 'flex',
            }}
          >
            BARNSTORM
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#8AA0B4',
              letterSpacing: '0.15em',
              marginTop: 8,
              display: 'flex',
            }}
          >
            COMPUTER SERVICES
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: '#3A9BD5',
              marginTop: 24,
              display: 'flex',
            }}
          >
            Mountain Tech, Done Right
          </div>
        </div>

        {/* Phone number at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            fontSize: 22,
            fontWeight: 600,
            color: '#F0A500',
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          (719) 838-0435
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
