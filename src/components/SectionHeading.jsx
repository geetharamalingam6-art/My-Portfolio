import { useInView } from '../hooks/useInView';

export default function SectionHeading({ caption, title, className = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const letters = title.split('');

  return (
    <div ref={ref} className={`text-center mb-12 sm:mb-16 ${className}`}>
      {/* Caption fades in */}
      <p 
        className={`text-sky-400 font-semibold text-xs sm:text-sm tracking-[3px] uppercase transition-all duration-700 ease-out drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {caption}
      </p>

      {/* Title reveals letter by letter */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight inline-block drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
        {letters.map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ease-out ${
              isInView ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-[2px]'
            }`}
            style={{
              transitionDelay: `${150 + index * 35}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>

      {/* Animated underline that grows with cyan-to-pink gradient */}
      <div className="flex justify-center mt-3.5">
        <div 
          className={`h-1 rounded-full bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#38bdf8] ${
            isInView ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{ transitionDelay: `${200 + letters.length * 35}ms` }}
        />
      </div>
    </div>
  );
}
