import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Workshop O Poder';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #4a1d96, #4338ca)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Workshop O Poder
        </h1>
        <p
          style={{
            fontSize: '32px',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Transforme sua vida e alcance seus objetivos
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}