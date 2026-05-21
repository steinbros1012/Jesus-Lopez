import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function PhotoPlaceholder({ label, className = '' }: { label?: string; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-primary/85 to-primary flex items-center justify-center ${className}`}>
      {label && (
        <span className="font-paragraph text-xs uppercase tracking-widest text-white/25">{label}</span>
      )}
    </div>
  );
}

const values = [
  {
    title: 'Thorough prep every time',
    desc: 'Every surface is cleaned, sanded, and primed before painting begins. The prep is where quality is built.',
  },
  {
    title: 'Honest pricing',
    desc: 'You get a clear, itemized estimate before any work starts. No hidden fees, no surprises at the end.',
  },
  {
    title: 'Reliable schedule',
    desc: 'We show up when we say we will and keep you informed throughout the project.',
  },
  {
    title: 'Respect for your home',
    desc: 'Furniture is covered, floors are protected, and the job site is left clean at the end of every day.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── PAGE HEADER ─── */}
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 90% 20%, rgba(200,146,42,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              Our Story
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              About Us
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <p className="font-paragraph text-base lg:text-lg text-white/65 max-w-2xl">
              Locally owned and operated in Greenville, SC. Built on careful work, honest pricing, and results homeowners are proud of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STORY SECTION ─── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <PhotoPlaceholder label="Photo Coming Soon" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-accent-gold/15 rounded-xl -z-10" />
              <div className="absolute -top-5 -left-5 w-16 h-16 border-2 border-primary/15 rounded-xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
                Jesus Lopez Painting
              </p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-8 leading-[1]">
                20 years of experience,<br />
                <span className="italic">one standard of work.</span>
              </h2>
              <div className="space-y-5 font-paragraph text-base text-secondary leading-relaxed">
                <p>
                  Jesus Lopez Painting is a locally owned company serving residential and commercial properties across Greenville and Upstate South Carolina. With over two decades of experience, Jesus has built a reputation for professionalism, integrity, and a genuine passion for the craft.
                </p>
                <p>
                  From the initial consultation to the final brushstroke, we prioritize clear communication and close collaboration with every client. You always know what to expect, what it costs, and when it will be done.
                </p>
                <p>
                  Whether it is a single room, a full exterior, or a commercial property, every project gets the same level of care — thorough prep, quality materials, and a finished result you will be proud of.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <p className="font-paragraph text-sm text-secondary">
                  Based in Greenville, SC — serving the entire Upstate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">How We Work</p>
            <h2 className="font-heading text-5xl lg:text-6xl text-foreground leading-[1]">
              What you can expect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-xl p-7 flex gap-5 hover:shadow-[0_8px_32px_rgba(27,58,45,0.07)] transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-paragraph text-base font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA ─── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Where We Work</p>
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6 leading-[1]">
                Serving Upstate South Carolina
              </h2>
              <p className="font-paragraph text-base text-secondary leading-relaxed mb-6">
                We serve homeowners throughout Greenville County and the surrounding Upstate region. If you are not sure whether we cover your area, give us a call — we are happy to discuss your project.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Greenville', 'Greer', 'Simpsonville', 'Mauldin', 'Spartanburg', 'Anderson', 'Easley', 'Taylors', 'Travelers Rest', 'Fountain Inn'].map((city) => (
                  <span key={city} className="font-paragraph text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary rounded-2xl p-8 lg:p-10"
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">Get In Touch</p>
              <h3 className="font-heading text-4xl text-white mb-6 leading-[1]">
                Let's talk about your project.
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:8644173947"
                  className="inline-flex items-center gap-3 bg-accent-gold text-foreground font-paragraph font-semibold px-7 py-3.5 rounded-full hover:bg-accent-gold/90 transition-all duration-300 w-fit"
                >
                  <Phone className="w-4 h-4" />
                  (864) 417-3947
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-paragraph text-sm text-white/60 hover:text-white transition-colors"
                >
                  Or fill out the estimate form <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
