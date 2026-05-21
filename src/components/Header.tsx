import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_2px_24px_rgba(27,58,45,0.1)] border-b border-gray-100'
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-paragraph text-[0.58rem] uppercase tracking-[0.4em] text-accent-gold font-semibold">
              Painting
            </span>
            <span className={`font-heading text-2xl lg:text-[1.7rem] leading-none transition-colors duration-400 ${
              scrolled ? 'text-primary group-hover:text-primary-light' : 'text-white group-hover:text-white/80'
            }`}>
              Jesus Lopez
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-paragraph text-sm transition-colors duration-200 rounded ${
                  isActive(link.path)
                    ? scrolled ? 'text-primary font-semibold' : 'text-white font-semibold'
                    : scrolled ? 'text-foreground/60 hover:text-primary' : 'text-white/65 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-gold rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8644173947"
              className={`flex items-center gap-2 font-paragraph text-sm transition-colors duration-200 ${
                scrolled ? 'text-foreground/60 hover:text-primary' : 'text-white/65 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(864) 417-3947</span>
            </a>
            <Link
              to="/contact"
              className={`font-paragraph font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-light hover:shadow-[0_4px_20px_rgba(27,58,45,0.3)]'
                  : 'bg-accent-gold text-foreground hover:bg-accent-gold/90 hover:shadow-[0_4px_20px_rgba(200,146,42,0.4)]'
              }`}
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[65px] bg-primary z-40 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-8 pt-10 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-heading text-4xl py-3 border-b border-white/10 transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-accent-gold'
                        : 'text-white hover:text-accent-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex flex-col gap-4"
              >
                <a
                  href="tel:8644173947"
                  className="flex items-center gap-3 font-paragraph text-base text-white/80"
                >
                  <Phone className="w-5 h-5" />
                  (864) 417-3947
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 text-center rounded-full hover:bg-accent-gold/90 transition-colors"
                >
                  Get Free Estimate
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
