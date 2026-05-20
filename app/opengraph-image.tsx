import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f6efe2', color: '#17130f', padding: 70, border: '18px solid #17130f' }}>
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 8, color: '#9f2d20', textTransform: 'uppercase' }}>portfolio / case studies / resume</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 86, fontWeight: 900, lineHeight: .95, maxWidth: 920 }}>
        <span>{profile.name}</span>
        <span>Design-minded Frontend Engineer</span>
      </div>
      <div style={{ display: 'flex', fontSize: 26, color: '#5f574d' }}>{profile.subheadline}</div>
    </div>,
    size,
  );
}
