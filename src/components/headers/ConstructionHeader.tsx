import { useState } from 'react';
import { HardHat, Music, Home, Menu, X } from 'lucide-react';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';
import { LangToggle } from '@/components/ui/LangToggle';

interface NavLink {
  labelKey: string;
  page: string;
}

const links: NavLink[] = [
  { labelKey: 'cNav.home', page: 'home' },
  { labelKey: 'cNav.services', page: 'services' },
  { labelKey: 'cNav.projects', page: 'projects' },
  { labelKey: 'cNav.gallery', page: 'gallery' },
  { labelKey: 'cNav.process', page: 'process' },
  { labelKey: 'cNav.team', page: 'team' },
  { labelKey: 'cNav.quote', page: 'quote' },
  { labelKey: 'cNav.faq', page: 'faq' },
  { labelKey: 'cNav.contact', page: 'contact' },
];

export function ConstructionHeader() {
  const { navigate, goHome, page } = useNav();
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-maroon-800/50 bg-maroon-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button onClick={() => navigate('construction', 'home')} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 text-maroon-900">
            <HardHat className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-white">JB Projects Consulting</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-400">{t('cNav.tagline')}</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate('construction', link.page)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                page === link.page
                  ? 'bg-gold-400/15 text-gold-300'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t(link.labelKey)}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            onClick={goHome}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:flex"
          >
            <Home className="h-3.5 w-3.5" />
            {t('nav.company')}
          </button>
          <button
            onClick={() => navigate('music', 'home')}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:flex"
          >
            <Music className="h-3.5 w-3.5" />
            {t('nav.music')}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-300 hover:bg-white/5 hover:text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-maroon-800/50 bg-maroon-950 px-4 pb-4 pt-2 lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigate('construction', link.page);
                  setOpen(false);
                }}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  page === link.page ? 'bg-gold-400/15 text-gold-300' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {t(link.labelKey)}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => {
                goHome();
                setOpen(false);
              }}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2 text-sm text-gray-300"
            >
              <Home className="h-4 w-4" /> {t('nav.company')}
            </button>
            <button
              onClick={() => {
                navigate('music', 'home');
                setOpen(false);
              }}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2 text-sm text-gray-300"
            >
              <Music className="h-4 w-4" /> {t('nav.music')}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
