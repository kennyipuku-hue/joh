import { useState } from 'react';
import { Disc3, HardHat, Home, Menu, X } from 'lucide-react';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';
import { LangToggle } from '@/components/ui/LangToggle';

interface NavLink {
  labelKey: string;
  page: string;
}

const links: NavLink[] = [
  { labelKey: 'mNav.home', page: 'home' },
  { labelKey: 'mNav.artists', page: 'artists' },
  { labelKey: 'mNav.music', page: 'albums' },
  { labelKey: 'mNav.videos', page: 'videos' },
  { labelKey: 'mNav.events', page: 'events' },
  { labelKey: 'mNav.studio', page: 'studio' },
  { labelKey: 'mNav.bookStudio', page: 'book-studio' },
  { labelKey: 'mNav.contact', page: 'contact' },
];

export function MusicHeader() {
  const { navigate, goHome, page } = useNav();
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-spot-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button onClick={() => navigate('music', 'home')} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-spot-green text-black">
            <Disc3 className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-white">JB Records</span>
            <span className="text-[10px] uppercase tracking-widest text-spot-green">{t('mNav.tagline')}</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate('music', link.page)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                page === link.page
                  ? 'bg-spot-green/15 text-spot-green'
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
            onClick={() => navigate('construction', 'home')}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:flex"
          >
            <HardHat className="h-3.5 w-3.5" />
            {t('nav.construction')}
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
        <nav className="border-t border-white/5 bg-spot-black px-4 pb-4 pt-2 lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigate('music', link.page);
                  setOpen(false);
                }}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  page === link.page ? 'bg-spot-green/15 text-spot-green' : 'text-gray-300 hover:bg-white/5'
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
                navigate('construction', 'home');
                setOpen(false);
              }}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2 text-sm text-gray-300"
            >
              <HardHat className="h-4 w-4" /> {t('nav.construction')}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
