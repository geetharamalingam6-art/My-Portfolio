import { FaLinkedinIn, FaBriefcase, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-[#181d33]/90 backdrop-blur-xl border-t border-pink-400/20 text-center mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Name */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
          Geetha R
        </h3>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base mt-1.5 mb-6">
          AI Python Full Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-7">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-[#1e233d] text-sky-400 border border-sky-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:-translate-y-1 hover:shadow-[0_0_15px_#38bdf8] active:scale-95"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          <a
            href="https://indeed.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Indeed Profile"
            className="w-10 h-10 rounded-full bg-[#1e233d] text-pink-400 border border-pink-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:border-pink-400 hover:-translate-y-1 hover:shadow-[0_0_15px_#f43f5e] active:scale-95"
          >
            <FaBriefcase className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-[#1e233d] text-emerald-400 border border-emerald-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:-translate-y-1 hover:shadow-[0_0_15px_#25D366] active:scale-95"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 text-xs sm:text-sm">
          &copy; 2026 Geetha Ramalingam. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
