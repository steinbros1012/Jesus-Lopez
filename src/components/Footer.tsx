import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      {/* Amber gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />

      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div>
            <p className="font-paragraph text-[0.58rem] uppercase tracking-[0.4em] text-accent-gold font-semibold mb-1">
              Painting
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-white leading-none">
              Jesus Lopez
            </h2>
            <p className="font-paragraph text-sm text-white/50 mt-2">Greenville, SC</p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-accent-gold text-foreground font-paragraph font-semibold px-7 py-3 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_4px_20px_rgba(200,146,42,0.35)] transition-all duration-300"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-paragraph text-sm text-white/55 leading-relaxed">
            Interior and exterior painting, cabinet refinishing, drywall repair, trim work, and pressure washing for homeowners across Greenville, Greer, Simpsonville, Mauldin, Spartanburg, Anderson, Easley, and nearby Upstate South Carolina communities.
          </p>
        </div>

        <div>
          <h4 className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-5">
            Pages
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/reviews', label: 'Reviews' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-paragraph text-sm text-white/55 hover:text-accent-gold transition-colors duration-200 w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-5">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="tel:8645550000"
              className="flex items-center gap-3 font-paragraph text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              (864) 555-0000
            </a>
            <div className="flex items-start gap-3 font-paragraph text-sm text-white/55">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Greenville, SC</span>
            </div>
            <p className="font-paragraph text-sm text-white/55">
              Serving Greenville, Greer, Simpsonville, Mauldin, Spartanburg, Anderson, Easley & surrounding communities.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-5">
          <p className="font-paragraph text-xs text-white/35">
            © {new Date().getFullYear()} Jesus Lopez Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
