import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Phone, ArrowRight, CheckCircle2, MapPin, Award, Brush, Home, PaintBucket, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimateSection from '@/components/EstimateSection';
import { PaintingServices, CustomerReviews } from '@/entities';
import { customerReviews, paintingServices } from '@/data/site-content';
import { useCountUp } from '@/hooks/useCountUp';

function StatCounter({ value, label, light = false }: { value: string; label: string; light?: boolean }) {
  const isNumeric = /^\d+/.test(value);
  const numericPart = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/^\d+/, '');
  const { count, ref } = useCountUp(isNumeric ? numericPart : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <span className={`font-heading text-4xl lg:text-5xl leading-none ${light ? 'text-white' : 'text-foreground'}`}>
        {isNumeric ? `${count}${suffix}` : value}
      </span>
      <span className={`font-paragraph text-xs uppercase tracking-[0.2em] mt-2 ${light ? 'text-white/45' : 'text-secondary'}`}>
        {label}
      </span>
    </motion.div>
  );
}

const serviceIcons = [
  <Home key="home" className="w-5 h-5" />,
  <Building2 key="building" className="w-5 h-5" />,
  <PaintBucket key="paint" className="w-5 h-5" />,
  <Brush key="brush" className="w-5 h-5" />,
  <CheckCircle2 key="check" className="w-5 h-5" />,
  <Award key="award" className="w-5 h-5" />,
];

export default function HomePage() {
  const [services, setServices] = useState<PaintingServices[]>([]);
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);

  useEffect(() => {
    setServices(paintingServices.filter((s) => s.isFeatured));
    setReviews(customerReviews);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#152A1E' }}>

        {/* Subtle diagonal brushstroke texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 48px)',
          }}
        />

        {/* Warm ambient glow — top right */}
        <div
          className="absolute top-0 right-0 w-3/5 h-4/5 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 10%, rgba(200,146,42,0.13) 0%, transparent 60%)',
          }}
        />

        {/* Large decorative "20" in background — right side */}
        <div
          className="absolute right-[-2%] bottom-[-8%] font-heading italic leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(260px, 40vw, 560px)',
            color: 'rgba(255,255,255,0.033)',
          }}
          aria-hidden="true"
        >
          20
        </div>

        {/* Amber vertical accent bar — left edge */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-[20%] bottom-[20%] w-0.5 bg-accent-gold/50 origin-top"
        />

        {/* Content — left-aligned */}
        <div className="relative z-10 max-w-[100rem] mx-auto px-6 lg:px-16 w-full pt-28 pb-20 lg:pt-36">
          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-paragraph text-xs uppercase tracking-[0.4em] text-accent-gold font-semibold mb-7"
            >
              Greenville, South Carolina
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[6rem] text-white leading-[0.93] mb-7"
            >
              Painting done right,<br />
              <span className="italic text-accent-gold">every time.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-16 bg-accent-gold mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="font-paragraph text-base lg:text-lg text-white/60 mb-10 leading-relaxed max-w-lg"
            >
              Over 20 years of residential and commercial painting across Greenville and Upstate South Carolina. Interior, exterior, cabinets, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-9 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(200,146,42,0.5)] transition-all duration-300"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:8644173947"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-paragraph font-semibold px-9 py-4 rounded-full hover:border-white/60 hover:bg-white/6 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                (864) 417-3947
              </a>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <span className="font-paragraph text-xs text-white/40 uppercase tracking-widest">5-Star Rated on Google</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '5.0★', label: 'Google Rating' },
              { value: 'FREE', label: 'Estimates' },
              { value: 'RESI & COMM', label: 'Residential & Commercial' },
            ].map((stat, i) => (
              <div key={i} className="flex justify-center">
                <StatCounter value={stat.value} label={stat.label} light />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">What We Do</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground leading-[1]">Services We Offer</h2>
            </motion.div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-muted hover:bg-primary rounded-2xl p-7 transition-all duration-400 overflow-hidden cursor-default border border-transparent hover:border-white/5"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 10% 10%, rgba(200,146,42,0.09) 0%, transparent 70%)' }}
                />

                <div className="w-10 h-10 rounded-lg bg-accent-gold/12 group-hover:bg-accent-gold/18 flex items-center justify-center text-accent-gold mb-5 transition-colors duration-300">
                  {serviceIcons[index % serviceIcons.length]}
                </div>

                <h3 className="font-heading text-2xl text-foreground group-hover:text-white mb-2 transition-colors duration-300">
                  {service.serviceName}
                </h3>
                <p className="font-paragraph text-sm text-secondary group-hover:text-white/60 leading-relaxed transition-colors duration-300">
                  {service.shortSummary}
                </p>

                <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold">Get estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: decorative panel (placeholder for photo) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative" style={{ background: '#1B3A2D' }}>
                {/* Texture */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 40px)',
                  }}
                />
                {/* Amber glow */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(200,146,42,0.15) 0%, transparent 60%)' }}
                />
                {/* Centered content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                  <span className="font-heading text-8xl lg:text-9xl text-white/10 italic leading-none">20</span>
                  <div className="h-px w-16 bg-accent-gold/50" />
                  <span className="font-paragraph text-xs uppercase tracking-[0.3em] text-white/30">Years of Experience</span>
                </div>
                {/* Photo coming soon label */}
                <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white/40 font-paragraph text-[10px] uppercase tracking-widest px-3 py-1.5 rounded">
                  Photo Coming Soon
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-accent-gold/15 rounded-xl -z-10" />
              <div className="absolute -top-5 -left-5 w-16 h-16 border-2 border-primary/15 rounded-xl -z-10" />

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-[0_8px_32px_rgba(27,58,45,0.12)] p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="font-paragraph text-sm font-semibold text-foreground">5-Star Rated</p>
                  <p className="font-paragraph text-xs text-secondary">Google Reviews</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Why Jesus Lopez Painting?</p>
                <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-10 leading-[1]">
                  Work done right,<br />
                  <span className="italic">every time.</span>
                </h2>
              </motion.div>

              <div className="flex flex-col gap-0">
                {[
                  { title: 'Thorough prep every time', desc: 'Surfaces are cleaned, sanded, and primed before a single coat goes on. No shortcuts.' },
                  { title: 'Clear pricing, no surprises', desc: 'You get a clear estimate before work starts and know exactly what you\'re paying for.' },
                  { title: 'Locally based in Greenville', desc: 'Serving the Upstate for over two decades. We live in this community and take pride in every job.' },
                  { title: 'Clean job site, always', desc: 'Furniture is protected, floors are covered, and everything is left tidy at the end of each day.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-5 py-5 border-b border-gray-200/70 last:border-0 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/8 group-hover:bg-primary/15 flex items-center justify-center transition-colors duration-300 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-paragraph text-base font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="font-paragraph text-sm text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED REVIEW ─── */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div
          className="absolute top-0 left-6 font-heading text-[16rem] lg:text-[22rem] text-white/[0.04] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          &#8220;
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center relative z-10">
          {reviews[0] && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <blockquote className="font-heading text-3xl lg:text-4xl xl:text-5xl text-white italic leading-snug mb-8">
                "{reviews[0].reviewText}"
              </blockquote>
              <p className="font-paragraph text-sm font-semibold uppercase tracking-widest text-white/40">
                — {reviews[0].customerName}, {reviews[0].reviewSource}
              </p>
              <div className="mt-10">
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-accent-gold hover:text-accent-gold/80 transition-colors"
                >
                  Read All Reviews <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── SERVICE AREA STRIP ─── */}
      <section className="py-16 bg-muted border-y border-gray-100">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-6 justify-between"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0" />
              <div>
                <p className="font-paragraph text-xs uppercase tracking-widest text-secondary font-semibold mb-0.5">Service Area</p>
                <p className="font-paragraph text-sm text-foreground">
                  Greenville, Greer, Simpsonville, Mauldin, Spartanburg, Anderson, Easley & surrounding Upstate SC
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white font-paragraph font-semibold text-sm px-7 py-3 rounded-full hover:bg-primary-light hover:shadow-[0_4px_20px_rgba(27,58,45,0.25)] transition-all duration-300"
            >
              Check Your Area <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── ESTIMATE SECTION ─── */}
      <EstimateSection />

      {/* ─── BOTTOM CTA ─── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1B3A2D 0%, #111C11 60%, #1B3A2D 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,146,42,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl lg:text-7xl text-white mb-6 leading-[0.95]"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-paragraph text-base text-white/55 mb-10"
          >
            No pressure. A straightforward estimate, clear communication, and work you can stand behind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent-gold text-foreground font-paragraph font-semibold px-10 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(200,146,42,0.45)] transition-all duration-300"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:8644173947"
              className="flex items-center justify-center gap-2 border border-white/25 text-white font-paragraph font-semibold px-10 py-4 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              (864) 417-3947
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
