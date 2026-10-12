import { FaFilePdf } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const welcomeText = 'WELCOME TO MY PORTFOLIO';
  const welcomeLetters = welcomeText.split('');
  
  const { displayedText, isCompleted } = useTypewriter('AI Python Full Stack Developer', 70, 400);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-20 relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Animated Welcome: letters fade in one by one in cyan & pink */}
        <p className="text-sky-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.24em] mb-4 flex flex-wrap justify-center drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]">
          {welcomeLetters.map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-700 ease-out"
              style={{
                animation: `fadeUp 0.6s ease-out forwards`,
                animationDelay: `${index * 45}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        {/* Hero Heading: Hi, I'm Geetha R with animated glowing blue-to-pink gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.18] mb-5">
          <span className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-500">
            Hi,&nbsp;
          </span>
          <span className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-500">
            I'm&nbsp;
          </span>
          <span 
            className="inline-block bg-gradient-to-r from-sky-400 via-pink-400 via-rose-400 to-sky-400 bg-[length:200%_auto] bg-clip-text text-transparent font-extrabold animate-shimmer drop-shadow-[0_0_20px_rgba(244,63,94,0.5)] transform hover:scale-105 transition-transform duration-300 cursor-default"
          >
            Geetha R
          </span>
        </h1>

        {/* Hero Subtitle: Typewriter effect with animated subtle wave/floating moving text */}
        <div className="min-h-[44px] sm:min-h-[52px] flex items-center justify-center mb-6">
          <h2 
            className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide transition-all duration-700 ${
              isCompleted 
                ? 'text-pink-300 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-wave' 
                : 'text-slate-200'
            }`}
          >
            <span className="inline-block">
              {displayedText}
            </span>
            <span className="inline-block w-[3px] h-6 sm:h-7 ml-1.5 bg-sky-400 align-middle animate-ping opacity-90 shadow-[0_0_8px_#38bdf8]" />
          </h2>
        </div>

        {/* Hero Description */}
        <p className="text-slate-200/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal drop-shadow-sm">
          I am a passionate aspiring web developer who enjoys creating
          clean, responsive and user-friendly websites using modern
          web development technologies.
        </p>

        {/* Hero Buttons: View My Work, View My CV, Hire Me */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* View My Work Button */}
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="group relative overflow-hidden px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(14,165,233,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(14,165,233,0.55)] active:translate-y-0"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 transition-all duration-700 group-hover:left-full" />
          </a>

          {/* View My Resume Button: Blue-pink fusion styling opening Resume in new tab */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open('/resume.html', '_blank');
            }}
            className="group relative overflow-hidden px-7 py-3.5 rounded-full bg-[#1b223c] hover:bg-[#252f52] text-white font-semibold text-sm sm:text-base border-2 border-pink-400/80 shadow-[0_8px_22px_rgba(244,63,94,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(244,63,94,0.5)] active:translate-y-0 flex items-center gap-2.5 cursor-pointer"
          >
            <FaFilePdf className="w-4 h-4 text-pink-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 font-medium tracking-wide">View My Resume</span>
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-sky-300/25 to-transparent skew-x-12 transition-all duration-700 group-hover:left-full" />
          </a>

          {/* Hire Me Button with pulse ring */}
          <div className="relative">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="group relative overflow-hidden block px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-sm sm:text-base animate-pulseRing transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(244,63,94,0.55)] active:translate-y-0 shadow-[0_8px_25px_rgba(244,63,94,0.35)]"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 transition-all duration-700 group-hover:left-full" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
