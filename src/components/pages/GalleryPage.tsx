import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Camera } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProjectGallery } from '@/entities';
import { projectGallery } from '@/data/site-content';

function ProjectPlaceholder({ project, index }: { project: ProjectGallery; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="grid grid-cols-2 gap-2 mb-4">
        {/* Before placeholder */}
        <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-muted border border-gray-200/80">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(27,58,45,0.06) 0px, rgba(27,58,45,0.06) 1px, transparent 1px, transparent 16px)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Camera className="w-6 h-6 text-primary/20" />
            <span className="font-paragraph text-xs text-primary/25 uppercase tracking-widest">Photo Coming</span>
          </div>
          <span className="absolute top-2 left-2 font-paragraph text-[10px] font-semibold uppercase tracking-widest bg-foreground/8 text-foreground/40 px-2 py-1 rounded">
            Before
          </span>
        </div>
        {/* After placeholder */}
        <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-muted border border-gray-200/80">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(27,58,45,0.06) 0px, rgba(27,58,45,0.06) 1px, transparent 1px, transparent 16px)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Camera className="w-6 h-6 text-primary/20" />
            <span className="font-paragraph text-xs text-primary/25 uppercase tracking-widest">Photo Coming</span>
          </div>
          <span className="absolute top-2 right-2 font-paragraph text-[10px] font-semibold uppercase tracking-widest bg-accent-gold/15 text-accent-gold px-2 py-1 rounded">
            After
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 px-1">
        <div>
          <p className="font-heading text-xl text-foreground mb-1">{project.projectTitle}</p>
          <p className="font-paragraph text-sm text-secondary leading-relaxed">{project.projectDescription}</p>
        </div>
        <p className="font-paragraph text-xs text-secondary/55 flex-shrink-0 mt-1 bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">{project.projectLocation}</p>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Interior', 'Exterior', 'Cabinets', 'Other'];

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
              Our Work
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Project Gallery
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <p className="font-paragraph text-base lg:text-lg text-white/60 max-w-2xl">
              Before and after photos from recent projects across Greenville and Upstate South Carolina. Photos are added as projects are completed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── COMING SOON NOTICE ─── */}
      <section className="bg-muted border-b border-gray-100">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-4">
          <div className="flex items-center gap-3">
            <Camera className="w-4 h-4 text-accent-gold flex-shrink-0" />
            <p className="font-paragraph text-sm text-secondary">
              Project photos are being added now. Check back soon for before and after results from recent jobs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="bg-background border-b border-gray-100 sticky top-[65px] z-30">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-shrink-0 font-paragraph text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'text-secondary hover:text-foreground hover:bg-muted'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {projectGallery.map((project, index) => (
              <ProjectPlaceholder key={project._id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center py-12 border border-dashed border-gray-200 rounded-2xl"
          >
            <Camera className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="font-heading text-2xl text-secondary mb-1">More photos coming soon</p>
            <p className="font-paragraph text-sm text-secondary/50">New project photos added regularly</p>
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
            Ready to start your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-paragraph text-base text-white/50 mb-10"
          >
            Get a free estimate and see what Jesus Lopez Painting can do for your home.
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
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-paragraph font-semibold px-9 py-4 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
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
