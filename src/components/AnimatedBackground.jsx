import { useEffect, useState, useMemo } from 'react';

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 24 drifting glowing particles alternating between electric cyan-blue, royal blue, and vibrant pink
  const particles = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${(i * 4.3 + 2) % 100}%`,
      size: `${(i % 3) * 2 + 3}px`,
      duration: `${9 + (i % 5) * 2.3}s`,
      delay: `${(i % 6) * 1.5}s`,
      opacity: 0.35 + (i % 4) * 0.1,
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#f43f5e' : '#818cf8',
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* 1. Medium Deep Blue & Pink Linear Gradient Canvas (Not too dark, not washed out) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1e2238] via-[#2c2040] via-[#213054] via-[#381e42] via-[#1c2c4c] to-[#261d3b] bg-[length:350%_350%] animate-gradientShift"
        style={{ animationDuration: '18s' }}
      />

      {/* 2. Secondary Glowing Diagonal Linear Gradient Stream in Electric Cyan & Magenta */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(130deg,rgba(56,189,248,0.22)_0%,rgba(99,102,241,0.2)_35%,rgba(244,63,94,0.25)_70%,rgba(168,85,247,0.2)_100%)] bg-[length:260%_260%] animate-gradientShift mix-blend-screen"
        style={{ animationDuration: '22s' }}
      />

      {/* 3. Interactive Mouse Spotlight Glow with Blue & Pink Aura */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none transition-transform duration-300 ease-out blur-3xl opacity-40"
        style={{
          left: mousePos.x - 260,
          top: mousePos.y - 260,
          background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(244,63,94,0.35) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* 4. Balanced Floating Blue & Pink Glowing Blobs */}
      {/* Blob 1 - Top Left Sapphire Royal Blue */}
      <div 
        className="absolute -top-16 -left-16 w-[430px] h-[430px] rounded-full bg-[#3b82f6] opacity-35 blur-[100px] animate-blob" 
        style={{ animationDuration: '15s' }}
      />

      {/* Blob 2 - Top Right Hot Pink / Rose */}
      <div 
        className="absolute top-10 right-10 w-[420px] h-[420px] rounded-full bg-[#f43f5e] opacity-35 blur-[110px] animate-blob" 
        style={{ animationDuration: '18s', animationDelay: '2s' }}
      />

      {/* Blob 3 - Center Radiant Indigo Violet */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-[#6366f1] opacity-30 blur-[120px] animate-blob" 
        style={{ animationDuration: '20s', animationDelay: '4s' }}
      />

      {/* Blob 4 - Mid Left Bright Cyan Blue */}
      <div 
        className="absolute top-1/2 -left-20 w-[380px] h-[380px] rounded-full bg-[#0ea5e9] opacity-35 blur-[100px] animate-blob" 
        style={{ animationDuration: '16s', animationDelay: '1s' }}
      />

      {/* Blob 5 - Mid Right Vibrant Fuchsia Pink */}
      <div 
        className="absolute top-2/3 -right-20 w-[440px] h-[440px] rounded-full bg-[#ec4899] opacity-35 blur-[110px] animate-blob" 
        style={{ animationDuration: '19s', animationDelay: '3s' }}
      />

      {/* Blob 6 - Bottom Left Deep Navy Plum */}
      <div 
        className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1d4ed8] opacity-35 blur-[110px] animate-blob" 
        style={{ animationDuration: '17s', animationDelay: '5s' }}
      />

      {/* Blob 7 - Bottom Right Warm Coral Pink */}
      <div 
        className="absolute -bottom-16 right-1/4 w-[420px] h-[420px] rounded-full bg-[#fb7185] opacity-35 blur-[100px] animate-blob" 
        style={{ animationDuration: '15s', animationDelay: '7s' }}
      />

      {/* 5. Drifting Glowing Blue & Pink Stars */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full animate-driftUp"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
