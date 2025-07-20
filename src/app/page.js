'use client';
import dynamic from 'next/dynamic';
const GlobeDemo = dynamic(() => import('../../components/ui/globe-demo').then(m => m.GlobeDemo), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <GlobeDemo />
    <div>Hello, Is it visible?</div>
    </div>
  );
}
