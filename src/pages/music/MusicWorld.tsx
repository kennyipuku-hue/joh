import { useState } from 'react';
import {
  Play,
  Pause,
  Disc3,
  Mic,
  Music,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Ticket,
  Download,
  Heart,
  Share2,
  Volume2,
  ChevronRight,
  Phone,
  Mail,
  ExternalLink,
  Users,
  Camera,
  Video,
  SlidersHorizontal,
  PenLine,
} from 'lucide-react';
import { MusicHeader } from '@/components/headers/MusicHeader';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarRating } from '@/components/ui/StarRating';
import { ContactForm, DemoForm, StudioBookingForm, EventRegistrationForm } from '@/components/forms/Forms';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';
import {
  artists,
  albums,
  videos,
  events,
  studioServices,
  musicTestimonials,
  type Album,
  type Artist,
  type MusicEvent,
} from '@/data/music';

export function MusicWorld({ page, params }: { page: string; params: Record<string, string> }) {
  return (
    <div className="min-h-screen bg-spot-black">
      <MusicHeader />
      <main>
        {page === 'home' && <MusicHome />}
        {page === 'artists' && <ArtistsPage />}
        {page === 'artist' && <ArtistDetailPage artistId={params.artistId} />}
        {page === 'albums' && <AlbumsPage />}
        {page === 'album' && <AlbumDetailPage albumId={params.albumId} />}
        {page === 'videos' && <VideosPage />}
        {page === 'events' && <EventsPage />}
        {page === 'event' && <EventDetailPage eventId={params.eventId} />}
        {page === 'studio' && <StudioPage />}
        {page === 'book-studio' && <BookStudioPage />}
        {page === 'submit-demo' && <SubmitDemoPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer theme="music" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MUSIC HOME
   ════════════════════════════════════════════════════════════════ */
function MusicHome() {
  const { navigate } = useNav();
  const { t } = useLang();
  const featuredAlbum = albums[0];
  const featuredArtist = artists[0];

  return (
    <>
      {/* ── Full Screen Video Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/36117935/pexels-photo-36117935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Worship concert"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-spot-black/60 via-spot-black/40 to-spot-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-spot-black/60 to-transparent" />
        </div>

        {/* Animated equalizer bars at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex h-24 items-end justify-center gap-1 opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="eq-bar w-1 bg-spot-green"
              style={{ animationDelay: `${i * 0.05}s`, height: `${20 + Math.random() * 60}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-spot-green/30 bg-spot-green/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-spot-green" />
              <span className="text-xs font-bold uppercase tracking-widest text-spot-green">
                {t('mHero.badge')}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t('mHero.title1')}
              <br />
              <span className="text-gradient-spotify">{t('mHero.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              {t('mHero.subtitle')}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate('music', 'albums')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-spot-green px-8 py-4 text-base font-bold text-black shadow-2xl shadow-spot-green/30 transition-all hover:scale-105 hover:bg-spot-green-bright active:scale-95"
              >
                <Play className="h-5 w-5 fill-current" />
                {t('mHero.listen')}
              </button>
              <button
                onClick={() => navigate('music', 'videos')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Video className="h-5 w-5" />
                {t('mHero.watch')}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Latest Release ── */}
      <section className="bg-gradient-to-b from-spot-black to-spot-gray-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={featuredAlbum.coverImage}
                    alt={featuredAlbum.title}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-spot-green text-black shadow-2xl">
                      <Play className="h-8 w-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 rounded-full bg-spot-green px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-lg">
                  {t('mRelease.newAlbum')}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-spot-green">{t('mRelease.eyebrow')}</span>
                <h2 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
                  {featuredAlbum.title}
                </h2>
                <p className="mt-2 text-lg text-gray-400">{featuredAlbum.artistName}</p>
                <p className="mt-4 text-gray-400">{t(featuredAlbum.descriptionKey)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate('music', 'album', { albumId: featuredAlbum.id })}
                    className="inline-flex items-center gap-2 rounded-full bg-spot-green px-7 py-3 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-spot-green-bright"
                  >
                    <Play className="h-4 w-4 fill-current" /> {t('mRelease.listen')}
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/5">
                    <Download className="h-4 w-4" /> {t('mRelease.download')}
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Disc3 className="h-4 w-4" /> {featuredAlbum.tracks.length} {t('mRelease.tracks')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {featuredAlbum.releaseDate}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Featured Artist ── */}
      <section className="bg-spot-gray-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={featuredArtist.image}
                  alt={featuredArtist.name}
                  className="h-[28rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spot-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-xs uppercase tracking-widest text-spot-green">{t('mArtist.featured')}</div>
                  <div className="font-display text-3xl font-black text-white">{featuredArtist.name}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-spot-green">
                  {t('mArtist.spotlight')}
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  {featuredArtist.stageName}
                </h2>
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-400">
                  <span className="rounded-full bg-white/10 px-3 py-1">{t(featuredArtist.genreKey)}</span>
                  <span className="flex items-center gap-1">
                    <Volume2 className="h-4 w-4 text-spot-green" />
                    {featuredArtist.monthlyListeners} {t('mArtist.monthlyListeners')}
                  </span>
                </div>
                <p className="mt-5 text-gray-400">{t(featuredArtist.bioKey)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate('music', 'artist', { artistId: featuredArtist.id })}
                    className="inline-flex items-center gap-2 rounded-full bg-spot-green px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105"
                  >
                    {t('mArtist.viewPage')} <ArrowRight className="h-4 w-4" />
                  </button>
                  {featuredArtist.socials.map((social) => (
                    <button
                      key={social.platform}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
                    >
                      <ExternalLink className="h-4 w-4" /> {social.platform}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Latest Music Videos ── */}
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <SectionHeading
              theme="music"
              eyebrow={t('mVideos.eyebrow')}
              title={t('mVideos.title')}
              center={false}
            />
            <button
              onClick={() => navigate('music', 'videos')}
              className="hidden items-center gap-2 text-sm font-bold text-spot-green hover:text-spot-green-bright sm:inline-flex"
            >
              {t('mVideos.viewAll')} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {videos.slice(0, 3).map((video, i) => (
              <Reveal key={video.id} delay={i * 100}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signed Artists ── */}
      <section className="bg-spot-gray-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="music"
            eyebrow={t('mArtists.eyebrow')}
            title={t('mArtists.title')}
            subtitle={t('mArtists.subtitle')}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artists.map((artist, i) => (
              <Reveal key={artist.id} delay={i * 80}>
                <ArtistCard artist={artist} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <SectionHeading
              theme="music"
              eyebrow={t('mEvents.eyebrow')}
              title={t('mEvents.title')}
              center={false}
            />
            <button
              onClick={() => navigate('music', 'events')}
              className="hidden items-center gap-2 text-sm font-bold text-spot-green hover:text-spot-green-bright sm:inline-flex"
            >
              {t('mEvents.viewAll')} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-12 space-y-4">
            {events.slice(0, 3).map((event, i) => (
              <Reveal key={event.id} delay={i * 80}>
                <EventRow event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Services ── */}
      <section className="bg-gradient-to-b from-spot-black to-spot-gray-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="music"
            eyebrow={t('mStudio.whatOffer')}
            title={t('mStudio.services')}
            subtitle={t('mStudio.pageSubtitle')}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studioServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all hover:border-spot-green/20 hover:from-spot-green/5">
                  <StudioServiceIcon id={service.id} />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-400">{t(service.descriptionKey)}</p>
                  <div className="mt-3 text-sm font-bold text-spot-green">{service.price}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('music', 'book-studio')}
              className="inline-flex items-center gap-2.5 rounded-full bg-spot-green px-8 py-4 text-base font-bold text-black transition-all hover:scale-105"
            >
              {t('mStudio.bookSession')} <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-spot-gray-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading theme="music" eyebrow={t('mTestimonials.eyebrow')} title={t('mTestimonials.title')} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {musicTestimonials.map((testimonial, i) => (
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

      {/* ── Become an Artist CTA ── */}
      <section className="relative overflow-hidden bg-spot-green py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7520351/pexels-photo-7520351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black text-black sm:text-4xl">
            {t('mDemo.ctaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/80">
            {t('mDemo.ctaText')}
          </p>
          <button
            onClick={() => navigate('music', 'submit-demo')}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-4 text-base font-bold text-spot-green transition-all hover:scale-105 hover:bg-gray-900"
          >
            {t('mDemo.ctaBtn')} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ════════════════════════════════════════════════════════════════ */
function VideoCard({ video, onClick }: { video: (typeof videos)[0]; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-2xl border border-white/5 bg-spot-gray text-left transition-all hover:border-spot-green/30"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-spot-green/90 text-black shadow-xl transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-2">{video.title}</h3>
        <div className="mt-1.5 flex items-center justify-between text-xs text-gray-500">
          <span>{video.artist}</span>
          <span>{video.views}</span>
        </div>
      </div>
    </button>
  );
}

function ArtistCard({ artist, onClick }: { artist: Artist; onClick?: () => void }) {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <button
      onClick={onClick ?? (() => navigate('music', 'artist', { artistId: artist.id }))}
      className="group block w-full overflow-hidden rounded-2xl border border-white/5 bg-spot-gray text-left transition-all hover:border-spot-green/30"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spot-black via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-lg font-bold text-white">{artist.stageName}</h3>
          <p className="text-xs text-spot-green">{t(artist.genreKey)}</p>
        </div>
      </div>
    </button>
  );
}

function EventRow({ event, onClick }: { event: MusicEvent; onClick?: () => void }) {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <button
      onClick={onClick ?? (() => navigate('music', 'event', { eventId: event.id }))}
      className="group flex w-full items-center gap-5 overflow-hidden rounded-2xl border border-white/5 bg-spot-gray p-4 text-left transition-all hover:border-spot-green/30 hover:bg-spot-gray-light/30"
    >
      <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-spot-green/10 text-spot-green">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white truncate">{event.title}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {event.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {event.venue}
          </span>
        </div>
      </div>
      <div className="hidden text-right sm:block">
        <div className="text-sm font-bold text-spot-green">{event.price}</div>
        <div className="text-xs text-gray-500">{t(event.categoryKey)}</div>
      </div>
      <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-spot-green" />
    </button>
  );
}

function StudioServiceIcon({ id }: { id: string }) {
  const iconMap: Record<string, typeof Mic> = {
    recording: Mic,
    mixing: SlidersHorizontal,
    mastering: Disc3,
    songwriting: PenLine,
    'video-production': Video,
    photography: Camera,
  };
  const Cmp = iconMap[id] ?? Mic;
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-spot-green/10 text-spot-green">
      <Cmp className="h-6 w-6" />
    </div>
  );
}

function MusicPageHero({
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
      <section className="relative flex min-h-[45vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-spot-black via-spot-black/70 to-spot-black/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-spot-green/30 bg-spot-green/10 px-3 py-1">
              <Disc3 className="h-3.5 w-3.5 text-spot-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-spot-green">
                {t('mHero.badge')}
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

/* ════════════════════════════════════════════════════════════════
   ARTISTS PAGE
   ════════════════════════════════════════════════════════════════ */
function ArtistsPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mArtists.pageTitle')}
      subtitle={t('mArtists.pageSubtitle')}
      image="https://images.pexels.com/photos/7520351/pexels-photo-7520351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artists.map((artist, i) => (
              <Reveal key={artist.id} delay={i * 80}>
                <ArtistCard artist={artist} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   ARTIST DETAIL PAGE
   ════════════════════════════════════════════════════════════════ */
function ArtistDetailPage({ artistId }: { artistId?: string }) {
  const { navigate } = useNav();
  const { t } = useLang();
  const artist = artists.find((a) => a.id === artistId) ?? artists[0];
  const artistAlbums = albums.filter((a) => artist.albumIds.includes(a.id));
  const artistVideos = videos.filter((v) => v.artist === artist.name);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={artist.image} alt={artist.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-spot-black via-spot-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-2 text-sm font-medium text-spot-green">{t(artist.genreKey)}</div>
              <h1 className="font-display text-5xl font-black text-white sm:text-6xl">{artist.stageName}</h1>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="h-4 w-4 text-spot-green" />
                  {artist.monthlyListeners} {t('mArtist.monthlyListeners')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Disc3 className="h-4 w-4 text-spot-green" />
                  {artistAlbums.length} albums
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-spot-black py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white">{t('mArtistDetail.bio')}</h2>
            <p className="mt-4 leading-relaxed text-gray-400">{t(artist.fullBioKey)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {artist.socials.map((social) => (
                <button
                  key={social.platform}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-spot-green"
                >
                  <ExternalLink className="h-4 w-4 text-spot-green" /> {social.platform}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Albums */}
      {artistAlbums.length > 0 && (
        <section className="bg-spot-gray-dark py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('mArtistDetail.discography')}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {artistAlbums.map((album, i) => (
                <Reveal key={album.id} delay={i * 80}>
                  <AlbumCard album={album} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Music Videos */}
      {artistVideos.length > 0 && (
        <section className="bg-spot-black py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('mArtistDetail.videos')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {artistVideos.map((video, i) => (
                <Reveal key={video.id} delay={i * 80}>
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="bg-spot-gray-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('mArtistDetail.events')}</h2>
          <div className="space-y-4">
            {events.slice(0, 2).map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   ALBUM CARD (shared)
   ════════════════════════════════════════════════════════════════ */
function AlbumCard({ album, onClick }: { album: Album; onClick?: () => void }) {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <button
      onClick={onClick ?? (() => navigate('music', 'album', { albumId: album.id }))}
      className="group block w-full overflow-hidden rounded-2xl border border-white/5 bg-spot-gray p-3 text-left transition-all hover:border-spot-green/30 hover:bg-spot-gray-light/20"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={album.coverImage}
          alt={album.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-spot-green text-black shadow-xl">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>
      <div className="mt-3 px-1 pb-1">
        <h3 className="font-semibold text-white truncate">{album.title}</h3>
        <p className="text-xs text-gray-500">{album.artistName}</p>
        <div className="mt-1 text-[10px] uppercase tracking-wider text-gray-600">
          {album.typeLabel} · {album.tracks.length} {t('mRelease.tracks')}
        </div>
      </div>
    </button>
  );
}

/* ════════════════════════════════════════════════════════════════
   ALBUMS PAGE
   ════════════════════════════════════════════════════════════════ */
function AlbumsPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mAlbums.title')}
      subtitle={t('mAlbums.subtitle')}
      image="https://images.pexels.com/photos/8815036/pexels-photo-8815036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {albums.map((album, i) => (
              <Reveal key={album.id} delay={i * 80}>
                <AlbumCard album={album} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   ALBUM DETAIL PAGE
   ════════════════════════════════════════════════════════════════ */
function AlbumDetailPage({ albumId }: { albumId?: string }) {
  const { navigate } = useNav();
  const { t } = useLang();
  const album = albums.find((a) => a.id === albumId) ?? albums[0];
  const artist = artists.find((a) => a.id === album.artistId);
  const [playing, setPlaying] = useState<number | null>(null);
  const related = albums.filter((a) => a.id !== album.id).slice(0, 4);

  return (
    <>
      {/* Album Header */}
      <section className="bg-gradient-to-b from-spot-gray-dark to-spot-black pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[20rem_1fr] md:items-end">
            <Reveal>
              <img
                src={album.coverImage}
                alt={album.title}
                className="aspect-square w-full rounded-2xl shadow-2xl"
              />
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-spot-green">
                  {album.typeLabel}
                </div>
                <h1 className="mt-2 font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                  {album.title}
                </h1>
                <p className="mt-3 text-lg text-gray-400">{album.artistName}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>{album.tracks.length} {t('mRelease.tracks')}</span>
                  <span>·</span>
                  <span>{album.releaseDateLabel}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setPlaying(playing === null ? 0 : null)}
                    className="inline-flex items-center gap-2 rounded-full bg-spot-green px-7 py-3 text-sm font-bold text-black transition-all hover:scale-105"
                  >
                    {playing !== null ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                    {playing !== null ? t('mAlbum.pauseAlbum') : t('mAlbum.playAlbum')}
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/5">
                    <Download className="h-4 w-4" /> {t('mAlbum.buyAlbum')}
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About + Tracklist */}
      <section className="bg-spot-black py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 rounded-2xl border border-white/5 bg-white/5 p-6">
              <h2 className="font-display text-xl font-bold text-white">{t('mAlbum.about')}</h2>
              <p className="mt-3 text-gray-400">{t(album.descriptionKey)}</p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{t('mAlbum.trackList')}</h2>
            <div className="overflow-hidden rounded-2xl border border-white/5">
              {album.tracks.map((track, i) => (
                <button
                  key={i}
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className={`flex w-full items-center gap-4 p-4 text-left transition-colors ${
                    i % 2 === 0 ? 'bg-spot-gray' : 'bg-spot-gray-dark'
                  } hover:bg-spot-gray-light/30 ${playing === i ? 'ring-1 ring-inset ring-spot-green/40' : ''}`}
                >
                  <span className="w-6 text-center text-sm text-gray-500">
                    {playing === i ? (
                      <Pause className="mx-auto h-4 w-4 fill-current text-spot-green" />
                    ) : (
                      <Play className="mx-auto h-4 w-4 text-gray-500" />
                    )}
                  </span>
                  <span className="flex-1 font-medium text-white">{track.title}</span>
                  <span className="text-sm text-gray-500">{track.duration}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Behind the Album */}
          <Reveal>
            <div className="mt-10 rounded-2xl border border-white/5 bg-gradient-to-br from-spot-green/5 to-transparent p-6">
              <h2 className="font-display text-xl font-bold text-white">{t('mAlbum.behind')}</h2>
              <p className="mt-3 text-gray-400">
                {t(album.behindAlbumKey)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Albums */}
      <section className="bg-spot-gray-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-white">{t('mAlbum.related')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((rel, i) => (
              <Reveal key={rel.id} delay={i * 80}>
                <AlbumCard album={rel} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {artist && (
        <section className="bg-spot-black py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('music', 'artist', { artistId: artist.id })}
              className="inline-flex items-center gap-2 text-sm font-bold text-spot-green hover:text-spot-green-bright"
            >
              {t('mAlbum.moreFrom')} {artist.name} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   VIDEOS PAGE
   ════════════════════════════════════════════════════════════════ */
function VideosPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mVideos.title')}
      subtitle="Watch our latest worship sessions, live concerts, and official music videos."
      image="https://images.pexels.com/photos/4061438/pexels-photo-4061438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <Reveal key={video.id} delay={(i % 3) * 100}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   EVENTS PAGE
   ════════════════════════════════════════════════════════════════ */
function EventsPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mEvents.pageTitle')}
      subtitle={t('mEvents.pageSubtitle')}
      image="https://images.pexels.com/photos/37790569/pexels-photo-37790569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {events.map((event, i) => (
              <Reveal key={event.id} delay={i * 80}>
                <EventRow event={event} />
              </Reveal>
            ))}
          </div>

          {/* Gallery from previous events */}
          <Reveal>
            <h2 className="mb-6 mt-16 font-display text-2xl font-bold text-white">{t('mEvents.previous')}</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              'https://images.pexels.com/photos/10024790/pexels-photo-10024790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              'https://images.pexels.com/photos/8815025/pexels-photo-8815025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              'https://images.pexels.com/photos/1309599/pexels-photo-1309599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              'https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              'https://images.pexels.com/photos/10024798/pexels-photo-10024798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              'https://images.pexels.com/photos/35555152/pexels-photo-35555152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
            ].map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={img} alt={`Previous event ${i + 1}`} className="h-full w-full object-cover transition-transform hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   EVENT DETAIL PAGE
   ════════════════════════════════════════════════════════════════ */
function EventDetailPage({ eventId }: { eventId?: string }) {
  const { t } = useLang();
  const event = events.find((e) => e.id === eventId) ?? events[0];
  const [registered, setRegistered] = useState(false);

  return (
    <>
      <section className="relative h-[55vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-spot-black via-spot-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-spot-green/20 px-3 py-1 text-xs font-bold text-spot-green">
                {t(event.categoryKey)}
              </div>
              <h1 className="font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                {event.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-spot-black py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white">{t('mEvents.aboutEvent')}</h2>
                <p className="mt-4 text-gray-400">{t(event.descriptionKey)}</p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: Calendar, key: 'date', label: t('mEvents.date'), value: event.date },
                    { icon: Clock, key: 'time', label: t('mEvents.time'), value: event.time },
                    { icon: MapPin, key: 'location', label: t('mEvents.location'), value: event.location },
                    { icon: Ticket, key: 'tickets', label: t('mEvents.tickets'), value: event.price },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-spot-green/10 text-spot-green">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">{item.label}</div>
                        <div className="font-semibold text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                {registered ? (
                  <EventRegistrationForm eventTitle={event.title} />
                ) : (
                  <>
                    <h3 className="font-display text-lg font-bold text-white">{t('mEvents.registerNow')}</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {t('mEvents.reserveSpot')} {event.title}.
                    </p>
                    <button
                      onClick={() => setRegistered(true)}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-spot-green px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.02]"
                    >
                      <Ticket className="h-4 w-4" /> {t('mEvents.buyTickets')}
                    </button>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   STUDIO PAGE
   ════════════════════════════════════════════════════════════════ */
function StudioPage() {
  const { navigate } = useNav();
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mStudio.pageTitle')}
      subtitle={t('mStudio.pageSubtitle')}
      image="https://images.pexels.com/photos/7450049/pexels-photo-7450049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      {/* Video Tour */}
      <section className="bg-spot-black py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/164755/pexels-photo-164755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Studio tour"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-spot-green text-black shadow-2xl transition-transform hover:scale-110">
                  <Play className="h-8 w-8 fill-current" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6">
                <h2 className="font-display text-2xl font-bold text-white">{t('mStudio.tour')}</h2>
                <p className="text-sm text-gray-400">{t('mStudio.tourDesc')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Equipment & Rooms */}
      <section className="bg-spot-gray-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading theme="music" eyebrow={t('mStudio.facility')} title={t('mStudio.equipment')} />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                key: 'recording',
                title: t('mStudio.recordingRoomTitle'),
                desc: t('mStudio.recordingRoomDesc'),
                image: 'https://images.pexels.com/photos/7450049/pexels-photo-7450049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              },
              {
                key: 'mixing',
                title: t('mStudio.mixingRoomTitle'),
                desc: t('mStudio.mixingRoomDesc'),
                image: 'https://images.pexels.com/photos/30807699/pexels-photo-30807699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              },
            ].map((room, i) => (
              <Reveal key={room.key} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl border border-white/5 bg-spot-gray">
                  <img src={room.image} alt={room.title} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-white">{room.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{room.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-spot-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading theme="music" eyebrow={t('mStudio.whatOffer')} title={t('mStudio.services')} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studioServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all hover:border-spot-green/20 hover:from-spot-green/5">
                  <StudioServiceIcon id={service.id} />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-400">{t(service.descriptionKey)}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="font-bold text-spot-green">{service.price}</span>
                    <button
                      onClick={() => navigate('music', 'book-studio')}
                      className="text-xs font-bold text-white/60 transition-colors hover:text-spot-green"
                    >
                      {t('mStudio.book')} →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Production Team */}
      <section className="bg-spot-gray-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading theme="music" eyebrow={t('mStudio.team')} title={t('mStudio.productionTeam')} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Marcus Johnson', role: t('mStudioTeam.engineerRole'), img: 'https://images.pexels.com/photos/28276940/pexels-photo-28276940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
              { name: 'Tobias Keller', role: 'Mix Engineer', img: 'https://images.pexels.com/photos/34287896/pexels-photo-34287896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
              { name: 'Samuel Adeyemi', role: 'Producer', img: 'https://images.pexels.com/photos/14037590/pexels-photo-14037590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
              { name: 'Lina Rondon', role: 'Vocal Coach', img: 'https://images.pexels.com/photos/30770887/pexels-photo-30770887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
            ].map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl border border-white/5 bg-spot-gray text-center">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spot-black to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-white">{member.name}</h3>
                    <div className="mt-1 text-xs font-medium text-spot-green">{member.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-spot-green py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black text-black">{t('mStudio.readyRecord')}</h2>
          <p className="mt-3 text-black/80">{t('mStudio.readyRecordText')}</p>
          <button
            onClick={() => navigate('music', 'book-studio')}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-4 text-base font-bold text-spot-green transition-all hover:scale-105"
          >
            {t('mStudio.bookSession')} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   BOOK STUDIO PAGE
   ════════════════════════════════════════════════════════════════ */
function BookStudioPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mBook.title')}
      subtitle={t('mBook.subtitle')}
      image="https://images.pexels.com/photos/30642559/pexels-photo-30642559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-spot-green/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-10">
            <StudioBookingForm />
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   SUBMIT DEMO PAGE
   ════════════════════════════════════════════════════════════════ */
function SubmitDemoPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mDemo.title')}
      subtitle={t('mDemo.subtitle')}
      image="https://images.pexels.com/photos/7715781/pexels-photo-7715781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Music, key: 'step1', title: t('mDemo.step1Title'), text: t('mDemo.step1Text') },
                { icon: Users, key: 'step2', title: t('mDemo.step2Title'), text: t('mDemo.step2Text') },
                { icon: Mic, key: 'step3', title: t('mDemo.step3Title'), text: t('mDemo.step3Text') },
              ].map((step, i) => (
                <div key={step.key} className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-spot-green/10 text-spot-green">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-spot-green">Step {i + 1}</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">{step.title}</div>
                  <div className="mt-0.5 text-xs text-gray-500">{step.text}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-spot-green/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-10">
              <DemoForm />
            </div>
          </Reveal>
        </div>
      </section>
    </MusicPageHero>
  );
}

/* ════════════════════════════════════════════════════════════════
   CONTACT PAGE
   ════════════════════════════════════════════════════════════════ */
function ContactPage() {
  const { t } = useLang();
  return (
    <MusicPageHero
      title={t('mContact.title')}
      subtitle={t('mContact.subtitle')}
      image="https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    >
      <section className="bg-spot-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{t('mContact.getInTouch')}</h3>
                <p className="mt-3 text-gray-400">
                  {t('mContact.text')}
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Phone, key: 'call', label: t('home.callUs'), value: '+243 000 000 000', sub: t('mContact.monFri') },
                    { icon: Mail, key: 'email', label: t('home.emailUs'), value: 'music@jbprojectsdrc.com', sub: t('cContact.reply24h') },
                    { icon: MapPin, key: 'visit', label: t('home.visitUs'), value: t('home.address'), sub: '' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-spot-green/10 text-spot-green">
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
                <ContactForm division="music" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </MusicPageHero>
  );
}
