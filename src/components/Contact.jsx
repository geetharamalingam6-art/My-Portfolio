import { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaBriefcase,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [leftRef, isLeftInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, isFormInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading caption="LET'S CONNECT" title="Get In Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Slides in from left */}
        <div
          ref={leftRef}
          className={`transition-all duration-1000 ease-out ${
            isLeftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let's Talk
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            I would love to hear from you. If you have a project,
            internship opportunity or any questions, feel free
            to contact me.
          </p>

          {/* Contact Details with gently pulsing icons */}
          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-[0_0_15px_#38bdf8]">
                <FaEnvelope className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Email</h4>
                <a
                  href="mailto:geethaaipythonjune@vtslearners.com"
                  className="text-slate-300 text-sm sm:text-base hover:text-sky-400 transition-colors break-all"
                >
                  geethaaipythonjune@vtslearners.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-400 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_15px_#f43f5e]">
                <FaPhoneAlt className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Phone</h4>
                <a
                  href="tel:+919876543210"
                  className="text-slate-300 text-sm sm:text-base hover:text-pink-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* City */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 transition-all duration-300 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_15px_#a855f7]">
                <FaMapMarkerAlt className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">City</h4>
                <p className="text-slate-300 text-sm sm:text-base">Salem, India</p>
              </div>
            </div>

          </div>

          {/* Social Icons that bounce on hover */}
          <div className="flex items-center gap-3.5 mt-9">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full bg-[#181d33] text-sky-400 border border-sky-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_15px_#38bdf8] active:scale-95"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="https://indeed.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Indeed Profile"
              className="w-11 h-11 rounded-full bg-[#181d33] text-pink-400 border border-pink-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:border-pink-400 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_15px_#f43f5e] active:scale-95"
            >
              <FaBriefcase className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-[#181d33] text-emerald-400 border border-emerald-400/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_15px_#25D366] active:scale-95"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form with Floating Labels & Focus Glow */}
        <div
          ref={formRef}
          className={`transition-all duration-1000 ease-out ${
            isFormInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="bg-[#1e233d]/85 backdrop-blur-xl rounded-2xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-pink-400/20 relative overflow-hidden">
            
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-pink-950/60 border border-pink-500 text-pink-200 flex items-center gap-3 text-sm animate-fadeUp shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <FaCheckCircle className="w-5 h-5 flex-shrink-0 text-pink-400" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Floating Label: Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 text-sm text-white bg-slate-900/70 border border-sky-400/30 rounded-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-sky-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Your Name
                  </label>
                </div>

                {/* Floating Label: Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 text-sm text-white bg-slate-900/70 border border-sky-400/30 rounded-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-sky-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              {/* Floating Label: Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-sm text-white bg-slate-900/70 border border-sky-400/30 rounded-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-sky-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
                >
                  Subject
                </label>
              </div>

              {/* Floating Label: Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-sm text-white bg-slate-900/70 border border-sky-400/30 rounded-xl outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20 resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-sky-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
                >
                  Your Message
                </label>
              </div>

              {/* Send Button with flying paper-plane icon */}
              <button
                type="submit"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-pink-500 text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(14,165,233,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(244,63,94,0.5)] active:translate-y-0"
              >
                <span className="relative z-10">Send Message</span>
                <FaPaperPlane className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:rotate-12" />
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 transition-all duration-700 group-hover:left-full" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
