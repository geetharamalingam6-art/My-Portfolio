import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  const [contentRef, isContentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading caption="GET TO KNOW ME" title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-center">

        {/* Left: Floating Circular Profile Image with rotating dashed ring & soft glow */}
        <div className="flex justify-center">
          <div className="relative group">

            {/* Soft Ambient Blue/Pink Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/40 to-pink-500/40 blur-2xl transform scale-110 -z-10 group-hover:scale-125 transition-transform duration-500" />

            {/* Slowly Rotating Dashed Ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-sky-400/50 animate-spinSlow pointer-events-none" />

            {/* Profile Circle with Floating Animation */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-sky-400/50 via-pink-400/30 to-rose-400/50 shadow-[0_20px_50px_rgba(56,189,248,0.25)] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-white/90">
                <img
                  src={profileImg}
                  alt="Geetha R"
                  className="w-full h-full object-cover object-top rounded-full transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                    const span = document.createElement('span');
                    span.innerText = 'GR';
                    span.className = 'text-5xl font-bold text-pink-400';
                    e.target.parentNode.appendChild(span);
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Right: Text Slides In From The Right On Scroll with balanced translucent glass card */}
        <div
          ref={contentRef}
          className={`transition-all duration-1000 ease-out ${
            isContentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="bg-[#1e233d]/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-pink-400/20 hover:border-sky-400/40 transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 flex items-center gap-2">
              <span>I'm</span>
              <span className="bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400 bg-clip-text text-transparent font-extrabold">
                Geetha R
              </span>
            </h3>

            <h4 className="text-pink-400 font-semibold text-base sm:text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping inline-block" />
              AI Python Full Stack Developer
            </h4>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              <p className="bg-white/[0.04] p-3.5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] cursor-default">
                I am an enthusiastic and motivated aspiring developer
                with a strong interest in web development and modern
                technologies. I enjoy creating websites that are simple,
                attractive, responsive and easy to use.
              </p>

              <p className="bg-white/[0.04] p-3.5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] cursor-default">
                Currently, I am developing my technical skills through
                an AI Python Full Stack Developer internship. As part
                of my learning journey, I am practicing HTML, CSS, Bootstrap, Tailwind CSS, Javascript, React.js, Python and Django
                by building different mini projects and responsive
                web pages.
              </p>

              <p className="bg-white/[0.04] p-3.5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] cursor-default">
                I have worked on projects involving responsive layouts,
                Flexbox, CSS Grid, forms, navigation menus, product
                cards, portfolio pages and other website components.
                These projects have helped me improve my understanding
                of website structure and visual design.
              </p>

              <p className="bg-white/[0.04] p-3.5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] cursor-default">
                My goal is to become a skilled full stack developer,
                continuously learn new technologies and build useful,
                creative and user-friendly applications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
