import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Calendar,
  HardHat,
  X,
  Plus,
  Minus,
  Phone,
  Mail,
  Linkedin,
  Users,
} from 'lucide-react';
import { ConstructionHeader } from '@/components/headers/ConstructionHeader';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { StarRating } from '@/components/ui/StarRating';
import { QuoteForm, ContactForm } from '@/components/forms/Forms';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';
import {
  services,
  projects,
  galleryImages,
  team,
  constructionTestimonials,
  faqs,
  processSteps,
  whyChooseUs,
  type Project,
  type TeamMember,
} from '@/data/construction';

export function ConstructionWorld({ page }: { page: string }) {
  return (
    <div className="min-h-screen bg-maroon-950">
      <ConstructionHeader />
      <main>
        {page === 'home' && <ConstructionHome />}
        {page === 'services' && <ServicesPage />}
        {page === 'projects' && <ProjectsPage />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'process' && <ProcessPage />}
        {page === 'team' && <TeamPage />}
        {page === 'quote' && <QuotePage />}
        {page === 'faq' && <FAQPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer theme="construction" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   HERO COMPONENT (reused on home)
   ════════════════════════════════════════════════════════════════ */
function ConstructionHero() {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Luxury construction project"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/80 to-maroon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5">
              <HardHat className="h-4 w-4 text-gold-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                {t('cHero.badge')}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t('cHero.title1')}
              <br />
              <span className="text-gradient-gold">{t('cHero.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              {t('cHero.subtitle')}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate('construction', 'quote')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-maroon-900 shadow-xl shadow-gold-400/20 transition-all hover:scale-105 hover:bg-gold-300 active:scale-95"
              >
                {t('cHero.quoteBtn')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('construction', 'projects')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                {t('cHero.projectsBtn')}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   CONSTRUCTION HOME (full landing page)
   ════════════════════════════════════════════════════════════════ */
function ConstructionHome() {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <>
      <ConstructionHero />

      {/* Services Preview */}
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="construction"
            eyebrow={t('cServices.eyebrow')}
            title={t('cServices.title')}
            subtitle={t('cServices.subtitle')}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all hover:border-gold-400/20 hover:from-gold-400/5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-all group-hover:bg-gold-400 group-hover:text-maroon-900">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-400">{t(service.descriptionKey)}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.featuresKey.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold-400/60" />
                        {t(f)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('construction', 'services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300"
            >
              {t('cServices.viewAll')} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-gradient-to-b from-maroon-950 to-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="construction"
            eyebrow={t('cProjects.eyebrow')}
            title={t('cProjects.title')}
            subtitle={t('cProjects.subtitle')}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('construction', 'projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300"
            >
              {t('cProjects.viewAll')} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="construction"
            eyebrow={t('cWhy.eyebrow')}
            title={t('cWhy.title')}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.titleKey} delay={i * 80}>
                <div className="group flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:border-gold-400/20">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-all group-hover:bg-gold-400 group-hover:text-maroon-900">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{t(item.titleKey)}</h3>
                    <p className="mt-1 text-sm text-gray-400">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <TeamPreviewSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="bg-gradient-to-r from-maroon-900 to-maroon-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t('cCta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              {t('cCta.text')}
            </p>
            <button
              onClick={() => navigate('construction', 'quote')}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-maroon-900 shadow-xl transition-all hover:scale-105 hover:bg-gold-300 active:scale-95"
            >
              {t('cCta.btn')} <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   PROJECT CARD (shared component)
   ════════════════════════════════════════════════════════════════ */
function ProjectCard({ project, onClick }: { project: Project; onClick?: () => void }) {
  const { t } = useLang();
  return (
    <button
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 text-left transition-all hover:border-gold-400/30 hover:shadow-2xl hover:shadow-gold-400/10"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-maroon-900">
          {t(project.categoryKey)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-white">{t(project.titleKey)}</h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {project.year}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ════════════════════════════════════════════════════════════════
   TESTIMONIALS SECTION (shared)
   ════════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-maroon-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="construction"
          eyebrow={t('home.testimonialsLabel')}
          title={t('home.testimonialsTitle')}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {constructionTestimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-6">
                <StarRating rating={testimonial.rating} className="mb-3" />
                <p className="text-sm leading-relaxed text-gray-300">{t(testimonial.quoteKey)}</p>
                <div className="mt-5 border-t border-white/5 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SERVICES PAGE
   ════════════════════════════════════════════════════════════════ */
function ServicesPage() {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <PageHero
      title={t('cServices.title')}
      subtitle={t('cServices.subtitle')}
      image="https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-7 transition-all hover:border-gold-400/20 hover:from-gold-400/5">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400 transition-all group-hover:bg-gold-400 group-hover:text-maroon-900">
                    <Icon name={service.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-400">{t(service.descriptionKey)}</p>
                  <ul className="mt-4 space-y-2">
                    {service.featuresKey.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-gold-400" />
                        {t(f)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 rounded-3xl border border-gold-400/20 bg-gradient-to-r from-gold-400/10 to-transparent p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold text-white">{t('cServices.ctaTitle')}</h3>
            <p className="mx-auto mt-3 max-w-lg text-gray-400">
              {t('cServices.ctaText')}
            </p>
            <button
              onClick={() => navigate('construction', 'quote')}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-maroon-900 transition-all hover:scale-105 hover:bg-gold-300"
            >
              {t('cHero.quoteBtn')} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   PROJECTS PAGE (with before/after)
   ════════════════════════════════════════════════════════════════ */
function ProjectsPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Church', 'Renovation'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageHero
      title={t('cProjects.title')}
      subtitle={t('cProjects.subtitle')}
      image="https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-gold-400 text-maroon-900'
                    : 'border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {cat === 'All' ? t('cProjects.all') : t(`cProj.${cat.toLowerCase()}`)}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-gradient-to-b from-maroon-950 to-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="construction"
            eyebrow={t('cProjects.beforeAfter')}
            title={t('cProjects.beforeAfter')}
            subtitle={t('cProjects.beforeAfterSubtitle')}
          />
          <div className="mt-14 space-y-12">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <BeforeAfter project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </PageHero>
  );
}

function BeforeAfter({ project }: { project: Project }) {
  const { t } = useLang();
  const [showAfter, setShowAfter] = useState(true);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5">
      <div className="relative h-72 sm:h-96">
        <img
          src={showAfter ? project.afterImage : project.beforeImage}
          alt={showAfter ? t('cProjects.after') : t('cProjects.before')}
          className="h-full w-full object-cover transition-all duration-500"
        />
        <div className="absolute top-4 left-4 rounded-full bg-maroon-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          {showAfter ? t('cProjects.after') : t('cProjects.before')}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-1 rounded-full border border-white/20 bg-maroon-950/80 p-1 backdrop-blur-sm">
            <button
              onClick={() => setShowAfter(false)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                !showAfter ? 'bg-gold-400 text-maroon-900' : 'text-gray-300'
              }`}
            >
              {t('cProjects.before')}
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                showAfter ? 'bg-gold-400 text-maroon-900' : 'text-gray-300'
              }`}
            >
              {t('cProjects.after')}
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-white">{t(project.titleKey)}</h3>
        <p className="mt-1 text-sm text-gray-400">{t(project.descriptionKey)}</p>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLang();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-gold-400/20 bg-maroon-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-maroon-950/80 p-2 text-gray-400 backdrop-blur-sm transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <img src={project.image} alt={t(project.titleKey)} className="h-72 w-full object-cover" />
        <div className="p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-maroon-900">
              {t(project.categoryKey)}
            </span>
            <span className="text-xs text-gray-500">{project.year}</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white">{t(project.titleKey)}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4 text-gold-400" /> {project.location}
          </div>
          <p className="mt-4 text-gray-300">{t(project.descriptionKey)}</p>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   GALLERY PAGE
   ════════════════════════════════════════════════════════════════ */
function GalleryPage() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <PageHero
      title={t('cGallery.title')}
      subtitle={t('cGallery.subtitle')}
      image="https://images.pexels.com/photos/9976121/pexels-photo-9976121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <button
                  onClick={() => setLightbox(img)}
                  className={`group relative block w-full overflow-hidden rounded-xl ${
                    i % 5 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-maroon-950/0 transition-colors group-hover:bg-maroon-950/20" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          <img src={lightbox} alt="Gallery large view" className="relative z-10 max-h-[90vh] max-w-full rounded-2xl" />
          <button className="absolute top-6 right-6 z-20 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   PROCESS PAGE
   ════════════════════════════════════════════════════════════════ */
function ProcessPage() {
  const { t } = useLang();
  return (
    <PageHero
      title={t('cProcess.title')}
      subtitle={t('cProcess.subtitle')}
      image="https://images.pexels.com/photos/16764815/pexels-photo-16764815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-400 font-display text-2xl font-black text-maroon-900">
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && <div className="mt-2 w-px flex-1 bg-gold-400/20" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-xl font-bold text-white">{t(step.titleKey)}</h3>
                    <p className="mt-2 text-gray-400">{t(step.descriptionKey)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   TEAM PREVIEW SECTION (on construction home)
   ════════════════════════════════════════════════════════════════ */
function TeamPreviewSection() {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-b from-black to-maroon-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="construction"
          eyebrow={t('cTeam.title')}
          title={t('cTeam.title')}
          subtitle={t('cTeam.subtitle')}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.slice(0, 3).map((member, i) => (
            <Reveal key={member.id} delay={i * 100}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('construction', 'team')}
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300"
          >
            {t('cTeam.viewAll')} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   TEAM CARD (shared component)
   ════════════════════════════════════════════════════════════════ */
function TeamCard({ member }: { member: TeamMember }) {
  const { t } = useLang();
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all hover:border-gold-400/20 hover:shadow-2xl hover:shadow-gold-400/10">
      <div className="relative h-80 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent" />
        {/* LinkedIn overlay on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg transition-transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
        <div className="mt-1 text-sm font-medium text-gold-400">{t(member.roleKey)}</div>
        <p className="mt-3 text-xs leading-relaxed text-gray-400">{t(member.bioKey)}</p>
        {/* LinkedIn link below bio */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] transition-colors hover:text-[#3b82f6]"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   TEAM PAGE
   ════════════════════════════════════════════════════════════════ */
function TeamPage() {
  const { t } = useLang();
  return (
    <PageHero
      title={t('cTeam.title')}
      subtitle={t('cTeam.subtitle')}
      image="/src/components/sections/construction/Team1.jpg"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Leadership row */}
          <Reveal>
            <div className="mb-10 flex items-center gap-3">
              <Users className="h-6 w-6 text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-white">{t('cTeam.leadership')}</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   QUOTE PAGE
   ════════════════════════════════════════════════════════════════ */
function QuotePage() {
  const { t } = useLang();
  return (
    <PageHero
      title={t('cQuote.title')}
      subtitle={t('cQuote.subtitle')}
      image="https://images.pexels.com/photos/7031412/pexels-photo-7031412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gold-400/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-10">
            <QuoteForm />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: CheckCircle2, title: t('cQuote.freeEstimate'), text: t('cQuote.noCost') },
              { icon: CheckCircle2, title: t('cQuote.fastResponse'), text: '' },
              { icon: CheckCircle2, title: t('cQuote.detailedBreakdown'), text: t('cQuote.transparent') },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                <item.icon className="mx-auto mb-2 h-6 w-6 text-gold-400" />
                <div className="text-sm font-semibold text-white">{item.title}</div>
                {item.text && <div className="text-xs text-gray-500">{item.text}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   FAQ PAGE
   ════════════════════════════════════════════════════════════════ */
function FAQPage() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <PageHero
      title={t('cFaq.title')}
      subtitle={t('cFaq.subtitle')}
      image="https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/5">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-white">{t(faq.qKey)}</span>
                    {openIdx === i ? (
                      <Minus className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    ) : (
                      <Plus className="h-5 w-5 flex-shrink-0 text-gold-400" />
                    )}
                  </button>
                  {openIdx === i && (
                    <div className="border-t border-white/5 p-5 text-sm text-gray-400">{t(faq.aKey)}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   CONTACT PAGE
   ════════════════════════════════════════════════════════════════ */
function ContactPage() {
  const { t } = useLang();
  return (
    <PageHero
      title={t('cContact.title')}
      subtitle={t('cContact.subtitle')}
      image="https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{t('cContact.getInTouch')}</h3>
                <p className="mt-3 text-gray-400">
                  {t('cContact.text')}
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Phone, label: t('home.callUs'), value: '+243 000 000 000', sub: t('cContact.monFri') },
                    { icon: Mail, label: t('home.emailUs'), value: 'info@jbprojectsdrc.com', sub: t('cContact.reply24h') },
                    { icon: MapPin, label: t('home.visitUs'), value: t('home.address'), sub: '' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">{item.label}</div>
                        <div className="font-semibold text-white">{item.value}</div>
                        {item.sub && <div className="text-xs text-gray-500">{item.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-8">
                <ContactForm division="construction" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   PAGE HERO (reused for sub-pages)
   ════════════════════════════════════════════════════════════════ */
function PageHero({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/70 to-maroon-950/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1">
              <HardHat className="h-3.5 w-3.5 text-gold-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                {t('cHero.badge')}
              </span>
            </div>
            <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-300">{subtitle}</p>
          </Reveal>
        </div>
      </section>
      {children}
    </>
  );
}
