import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
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
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#F7F9FC',
            letterSpacing: '-0.02em',
            display: 'flex',
          }}
        >
          BS
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 12,
            background: '#3A9BD5',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
