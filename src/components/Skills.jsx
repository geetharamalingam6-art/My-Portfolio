import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiDjango } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const SKILLS_DATA = [
  // Row 1
  {
    name: 'HTML',
    desc: 'Creating structured and semantic web pages.',
    percentage: 80,
    icon: FaHtml5,
    iconColor: 'text-orange-400',
  },
  {
    name: 'CSS',
    desc: 'Designing responsive and attractive websites.',
    percentage: 75,
    icon: FaCss3Alt,
    iconColor: 'text-sky-400',
  },
  {
    name: 'Bootstrap',
    desc: 'Learning responsive layouts and grid systems.',
    percentage: 70,
    icon: FaBootstrap,
    iconColor: 'text-purple-400',
  },
  {
    name: 'Tailwind CSS',
    desc: 'Learning utility-based responsive styling.',
    percentage: 75,
    icon: SiTailwindcss,
    iconColor: 'text-pink-400',
  },
  // Row 2: JavaScript, React, Python, Django
  {
    name: 'JavaScript',
    desc: 'Building interactive and dynamic web logic.',
    percentage: 75,
    icon: FaJs,
    iconColor: 'text-yellow-400',
  },
  {
    name: 'React',
    desc: 'Developing modern single-page applications.',
    percentage: 70,
    icon: FaReact,
    iconColor: 'text-cyan-400',
  },
  {
    name: 'Python',
    desc: 'Core programming, algorithms and problem solving.',
    percentage: 80,
    icon: FaPython,
    iconColor: 'text-blue-400',
  },
  {
    name: 'Django',
    desc: 'Developing scalable backend APIs and web apps.',
    percentage: 70,
    icon: SiDjango,
    iconColor: 'text-emerald-400',
  },
];

function SkillCard({ skill, index, isInView }) {
  const count = useCountUp(skill.percentage, 1600, isInView);
  const Icon = skill.icon;

  return (
    <div
      className={`group relative bg-[#1e233d]/85 backdrop-blur-xl rounded-2xl p-6 sm:p-7 text-center border border-pink-400/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2.5 hover:border-sky-400/60 hover:shadow-[0_20px_45px_rgba(56,189,248,0.25)] ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Floating & Rotating Icon on Hover */}
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-sky-400/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-pink-400/50">
        <Icon className={`text-4xl ${skill.iconColor} transition-transform duration-500 animate-float`} />
      </div>

      <h3 className="text-xl font-bold text-white mb-1.5">{skill.name}</h3>

      <p className="text-slate-300 text-xs sm:text-sm mb-6 min-h-[36px]">
        {skill.desc}
      </p>

      {/* Progress Bar Container */}
      <div className="w-full bg-slate-900/80 border border-white/5 h-2.5 rounded-full overflow-hidden relative mb-3">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500 relative transition-all duration-1000 ease-out shadow-[0_0_8px_#38bdf8]"
          style={{
            width: isInView ? `${skill.percentage}%` : '0%',
          }}
        >
          {/* Moving shine sweep across the progress bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer bg-[length:200%_100%]" />
        </div>
      </div>

      {/* Animated Counter percentage */}
      <strong className="block text-sky-300 font-bold text-base mt-2 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
        {count}%
      </strong>
    </div>
  );
}

export default function Skills() {
  const [containerRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading caption="MY TECHNICAL ABILITIES" title="My Skills" />

      <p className="max-w-2xl mx-auto text-center text-slate-200 text-sm sm:text-base leading-relaxed -mt-6 mb-12 sm:mb-16">
        I am continuously improving my technical skills through
        practical exercises, mini projects and hands-on learning.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
