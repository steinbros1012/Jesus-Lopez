import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimateSection from '@/components/EstimateSection';

export default function ContactPage() {
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
              Reach Out
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Get In Touch
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <p className="font-paragraph text-base lg:text-lg text-white/65 max-w-2xl">
              Ready to get started? Fill out the estimate form or call us directly. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT INFO STRIP ─── */}
      <section className="bg-muted border-b border-gray-100">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-4 h-4 text-primary" />,
                label: 'Call or Text',
                value: '(864) 417-3947',
                sub: 'Best way to reach us quickly',
                href: 'tel:8644173947',
              },
              {
                icon: <MapPin className="w-4 h-4 text-primary" />,
                label: 'Service Area',
                value: 'Greenville, SC',
                sub: 'And all of Upstate South Carolina',
                href: null as string | null,
              },
              {
                icon: <Clock className="w-4 h-4 text-primary" />,
                label: 'Response Time',
                value: 'Within 24 hours',
                sub: 'Usually same day',
                href: null as string | null,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-paragraph text-xs uppercase tracking-widest text-secondary font-semibold mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-paragraph text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-paragraph text-base font-semibold text-foreground">{item.value}</p>
                  )}
                  <p className="font-paragraph text-sm text-secondary mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESTIMATE FORM ─── */}
      <EstimateSection />

      {/* ─── ASSURANCES ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              'Free, no-obligation estimates',
              'Response within 24 hours',
              'Clear pricing before work begins',
              'Locally based in Greenville',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-paragraph text-sm text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
