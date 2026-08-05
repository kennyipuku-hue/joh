import { HardHat, Music, ArrowRight, Building2, Star, Phone, Mail, MapPin, Quote } from 'lucide-react';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';
import { LangToggle } from '@/components/ui/LangToggle';
import { Reveal } from '@/components/ui/Reveal';
import { constructionTestimonials } from '@/data/construction';
import { musicTestimonials } from '@/data/music';
import { ContactForm } from '@/components/forms/Forms';

export function HomePage() {
  const { navigate } = useNav();
  const { t } = useLang();

  const allTestimonials = [...constructionTestimonials, ...musicTestimonials];

  return (
    <div className="min-h-screen bg-maroon-950">
      {/* ── Navigation Bar ── */}
      <nav className="absolute top-0 z-40 w-full">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 font-display text-xl font-black text-maroon-900">
              JB
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">JB Group</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">
                Construction & Music
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 sm:flex">
              <button
                onClick={() => navigate('construction', 'home')}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
              >
                {t('nav.construction')}
              </button>
              <button
                onClick={() => navigate('music', 'home')}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-spot-green"
              >
                {t('nav.music')}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {t('nav.contact')}
              </button>
            </div>
            <LangToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background: split design */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-950 to-black" />
          {/* Construction half (left) */}
          <div
            className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-25 mix-blend-luminosity transition-all duration-700 hover:opacity-40"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
              maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
            }}
          />
          {/* Music half (right) */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-25 mix-blend-luminosity transition-all duration-700 hover:opacity-40"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/36117935/pexels-photo-36117935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
              maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/60" />
        </div>

        {/* Floating accent orbs */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-spot-green/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
                {t('home.badge')}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t('home.title1')}
              <br />
              <span className="text-gradient-gold">{t('home.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              {t('home.subtitle')}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate('construction', 'home')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-maroon-900 shadow-2xl shadow-gold-400/20 transition-all hover:scale-105 hover:bg-gold-300 active:scale-95"
              >
                <HardHat className="h-5 w-5" />
                {t('home.exploreConstruction')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('music', 'home')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-spot-green px-8 py-4 text-base font-bold text-black shadow-2xl shadow-spot-green/20 transition-all hover:scale-105 hover:bg-spot-green-bright active:scale-95"
              >
                <Music className="h-5 w-5" />
                {t('home.exploreMusic')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-500">{t('home.scroll')}</span>
            <div className="h-12 w-px animate-bounce bg-gradient-to-b from-gold-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Short Company Introduction ── */}
      <section className="relative bg-maroon-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-8 flex max-w-md items-center justify-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/50" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.ourStory')}</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/50" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t('home.introTitle')}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              {t('home.introText')}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { key: 'stat1', value: '17+', label: t('home.stat1') },
                { key: 'stat2', value: '500+', label: t('home.stat2') },
                { key: 'stat3', value: '50M+', label: t('home.stat3') },
              ].map((stat, i) => (
                <Reveal key={stat.key} delay={i * 100}>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                    <div className="font-display text-3xl font-black text-gradient-gold sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Choose Your Experience ── */}
      <section className="relative bg-gradient-to-b from-maroon-950 to-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.choosePath')}</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              {t('home.chooseTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              {t('home.chooseSubtitle')}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Construction Card */}
            <Reveal>
              <button
                onClick={() => navigate('construction', 'home')}
                className="group relative block w-full overflow-hidden rounded-3xl text-left"
              >
                <div className="relative h-[28rem] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Construction projects"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/60 to-maroon-950/20" />
                  <div className="absolute inset-0 border-4 border-transparent transition-colors duration-500 group-hover:border-gold-400/50 rounded-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 text-maroon-900 shadow-lg">
                    <HardHat className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{t('home.constructionCard')}</h3>
                  <p className="mt-2 max-w-md text-gray-300">
                    {t('home.constructionCardDesc')}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-all group-hover:gap-3">
                    {t('home.enterConstruction')} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </Reveal>

            {/* Music Card */}
            <Reveal delay={150}>
              <button
                onClick={() => navigate('music', 'home')}
                className="group relative block w-full overflow-hidden rounded-3xl text-left"
              >
                <div className="relative h-[28rem] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/36117935/pexels-photo-36117935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Gospel music worship"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spot-black via-spot-black/60 to-spot-black/20" />
                  <div className="absolute inset-0 border-4 border-transparent transition-colors duration-500 group-hover:border-spot-green/50 rounded-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-spot-green text-black shadow-lg">
                    <Music className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{t('home.musicCard')}</h3>
                  <p className="mt-2 max-w-md text-gray-300">
                    {t('home.musicCardDesc')}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-spot-green transition-all group-hover:gap-3">
                    {t('home.enterMusic')} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── About the Company ── */}
      <section className="relative bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.pexels.com/photos/8469990/pexels-photo-8469990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="JB Group team"
                    className="h-[24rem] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-2xl border border-gold-400/20 bg-maroon-900 p-6 shadow-xl">
                  <div className="font-display text-3xl font-black text-gradient-gold">25+ Years</div>
                  <div className="mt-1 text-sm text-gray-400">of building and inspiring</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.aboutLabel')}</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  {t('home.aboutTitle')}
                </h2>
                <p className="mt-6 text-gray-400">
                  {t('home.aboutText1')}
                </p>
                <p className="mt-4 text-gray-400">
                  {t('home.aboutText2')}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { key: 'construction', icon: Building2, title: t('nav.construction'), text: t('home.aboutConstruction') },
                    { key: 'music', icon: Music, title: t('nav.music'), text: t('home.aboutMusic') },
                  ].map((item) => (
                    <div key={item.key} className="rounded-xl border border-white/5 bg-white/5 p-4">
                      <item.icon className="mb-2 h-6 w-6 text-gold-400" />
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative bg-gradient-to-b from-black to-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.whyLabel')}</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white">{t('home.whyTitle')}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { key: 'why1', icon: Star, title: t('home.why1Title'), text: t('home.why1Text') },
              { key: 'why2', icon: Building2, title: t('home.why2Title'), text: t('home.why2Text') },
              { key: 'why3', icon: HardHat, title: t('home.why3Title'), text: t('home.why3Text') },
              { key: 'why4', icon: Quote, title: t('home.why4Title'), text: t('home.why4Text') },
              { key: 'why5', icon: Phone, title: t('home.why5Title'), text: t('home.why5Text') },
              { key: 'why6', icon: Mail, title: t('home.why6Title'), text: t('home.why6Text') },
            ].map((item, i) => (
              <Reveal key={item.key} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all hover:border-gold-400/20 hover:from-gold-400/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-maroon-900">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative bg-maroon-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.testimonialsLabel')}</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-white">{t('home.testimonialsTitle')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              {t('home.testimonialsSubtitle')}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTestimonials.slice(0, 6).map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-6">
                  <Quote className="mb-3 h-8 w-8 text-gold-400/40" />
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

      {/* ── Contact ── */}
      <section id="contact" className="relative bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">{t('home.contactLabel')}</span>
                <h2 className="mt-3 font-display text-4xl font-bold text-white">{t('home.contactTitle')}</h2>
                <p className="mt-4 text-gray-400">
                  {t('home.contactText')}
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { id: 'call', icon: Phone, label: t('home.callUs'), value: '+243 000 000 000' },
                    { id: 'email', icon: Mail, label: t('home.emailUs'), value: 'hello@jbgroup.com' },
                    { id: 'visit', icon: MapPin, label: t('home.visitUs'), value: t('home.address') },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">{item.label}</div>
                        <div className="font-semibold text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-8">
                <ContactForm division="home" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-maroon-800/50 bg-maroon-950 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 font-display text-sm font-black text-maroon-900">
              JB
            </div>
            <span className="font-display text-base font-bold text-white">JB Group</span>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} JB Group. {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
