import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { customerReviews } from '@/data/site-content';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── PAGE HEADER ─── */}
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)',
          }}
        />
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              What Clients Say
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Reviews
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="font-paragraph text-base text-white/65">
                5.0 average — Google Reviews
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── REVIEWS GRID ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-muted rounded-xl p-7 flex flex-col gap-5 hover:shadow-[0_8px_32px_rgba(27,58,45,0.08)] transition-shadow duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <blockquote className="font-paragraph text-sm text-foreground leading-relaxed flex-1">
                  "{review.reviewText}"
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-sm text-primary leading-none">
                        {review.customerName.charAt(0)}
                      </span>
                    </div>
                    <p className="font-paragraph text-sm font-semibold text-foreground">
                      {review.customerName}
                    </p>
                  </div>
                  <p className="font-paragraph text-xs text-secondary/60">{review.reviewSource}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 text-center"
          >
            <p className="font-paragraph text-sm text-secondary mb-6">
              All reviews are from Google. We never filter or hide feedback.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-paragraph font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Leave a Google Review <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PULL QUOTE ─── */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-6">Featured Review</p>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            <blockquote className="font-heading text-3xl lg:text-4xl xl:text-5xl text-foreground italic leading-snug mb-8">
              "{customerReviews[1]?.reviewText}"
            </blockquote>
            <p className="font-paragraph text-sm font-semibold uppercase tracking-widest text-secondary">
              — {customerReviews[1]?.customerName}, {customerReviews[1]?.reviewSource}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1B3A2D 0%, #111C11 60%, #1B3A2D 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,146,42,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl lg:text-6xl text-white mb-4 leading-[0.95]"
          >
            Ready to join our happy clients?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-paragraph text-base text-white/55 mb-10"
          >
            Get a free estimate and experience the same quality work firsthand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-9 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(200,146,42,0.45)] transition-all duration-300"
            >
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8644173947"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-paragraph font-semibold px-9 py-4 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
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
