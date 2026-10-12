import { useState, useRef } from 'react';
import {
  FaUser,
  FaUtensils,
  FaHardHat,
  FaGraduationCap,
  FaHeart,
  FaArrowRight,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';

const PROJECTS_DATA = [
  // 1. Personal Portfolio
  {
    id: 1,
    title: 'Personal Portfolio',
    desc: 'A modern, responsive portfolio website featuring interactive components, sleek animations, and clean presentation.',
    icon: FaUser,
    tags: ['HTML', 'Tailwind CSS', 'React'],
    gradient: 'from-[#172554] via-[#2e1065] to-[#3b0764]',
    iconColor: 'text-sky-400',
    link: 'https://geetharamalingam6-art.github.io/geetha-portfolio/Geetha.html',
  },
  // 2. Food Blog Website
  {
    id: 2,
    title: 'Food Blog Website',
    desc: 'An attractive and delicious food blog displaying culinary recipes, food reviews, appetizing galleries, and post layouts.',
    icon: FaUtensils,
    tags: ['HTML', 'CSS'],
    gradient: 'from-[#4a044e] via-[#1e1b4b] to-[#1e3a8a]',
    iconColor: 'text-rose-400',
    link: 'https://geetharamalingam6-art.github.io/food-blog/index.html',
  },
  // 3. Construction Website
  {
    id: 3,
    title: 'Construction Website',
    desc: 'A robust commercial construction company web app showcasing architectural projects, services, and dynamic quote forms.',
    icon: FaHardHat,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    gradient: 'from-[#1e293b] via-[#331326] to-[#1e1b4b]',
    iconColor: 'text-amber-400',
    link: 'https://construction-sepia-nu.vercel.app/',
  },
  // 4. Vetri Website (Next Row)
  {
    id: 4,
    title: 'Vetri Website',
    desc: 'An educational and institutional portal built for Vetri with responsive course overviews, student registration, and news modules.',
    icon: FaGraduationCap,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#2e1065]',
    iconColor: 'text-emerald-400',
    link: 'https://construction-website-2a9l.vercel.app/',
  },
  // 5. Wedding Invitation Card
  {
    id: 5,
    title: 'Wedding Invitation Card',
    desc: 'An elegant digital wedding invitation website with romantic RSVP interactions, ceremonial countdown, and photo galleries.',
    icon: FaHeart,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    gradient: 'from-[#3b0764] via-[#4c0519] to-[#172554]',
    iconColor: 'text-pink-400',
    link: 'https://wedding-card-one-omega.vercel.app/',
  },
];

function ProjectCard({ project, index, isInView }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const Icon = project.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl bg-[#1e233d]/85 backdrop-blur-xl overflow-hidden border border-pink-400/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:border-sky-400 hover:shadow-[0_25px_50px_rgba(56,189,248,0.25)] hover:-translate-y-3 flex flex-col justify-between ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transform: tilt.active
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px)`
          : undefined,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Top Image / Media Area with Animated Gradient, Shimmer Sweep, and Floating Icon */}
      <div>
        <div className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden border-b border-pink-400/20`}>

          {/* Shimmer sweep animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />

          {/* Floating, gently pulsing & rotating icon */}
          <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-12">
            <Icon className={`text-6xl ${project.iconColor} drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] animate-float`} />
          </div>

          {/* Glowing aura inside media header */}
          <div className="absolute w-32 h-32 rounded-full bg-sky-400/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-pink-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            {project.desc}
          </p>

          {/* Tags pop in one by one and bounce on hover */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tIndex) => (
              <span
                key={tag}
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-sky-500 hover:text-white cursor-default shadow-sm ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                style={{
                  transitionDelay: `${index * 120 + 200 + tIndex * 80}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* View Project Link with external link support, target="_blank", and rel="noopener noreferrer" */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-sky-400 hover:text-pink-300 font-semibold text-sm w-fit relative py-1 transition-colors duration-200"
        >
          <span>View Project</span>
          <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-2" />

          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-pink-500 rounded-full transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_#38bdf8]" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [containerRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading caption="MY RECENT WORK" title="My Projects" />

      {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
