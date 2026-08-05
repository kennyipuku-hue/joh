import { HardHat, Music, Phone, Mail, MapPin, Home } from 'lucide-react';
import { useNav } from '@/lib/navigation';
import { useLang } from '@/lib/i18n';

export function Footer({ theme }: { theme: 'construction' | 'music' }) {
  const { navigate, goHome } = useNav();
  const { t } = useLang();

  const isConstruction = theme === 'construction';
  const accent = isConstruction ? 'text-gold-400' : 'text-spot-green';
  const hoverAccent = isConstruction ? 'hover:text-gold-300' : 'hover:text-spot-green-bright';
  const bg = isConstruction ? 'bg-maroon-950' : 'bg-spot-black';
  const border = isConstruction ? 'border-maroon-800/50' : 'border-white/5';

  const constructionLinks = [
    { label: t('cNav.home'), page: 'home' },
    { label: t('cNav.services'), page: 'services' },
    { label: t('cNav.projects'), page: 'projects' },
    { label: t('cNav.gallery'), page: 'gallery' },
    { label: t('cNav.process'), page: 'process' },
    { label: t('cNav.team'), page: 'team' },
    { label: t('cNav.quote'), page: 'quote' },
    { label: t('cNav.faq'), page: 'faq' },
    { label: t('cNav.contact'), page: 'contact' },
  ];

  const musicLinks = [
    { label: t('mNav.home'), page: 'home' },
    { label: t('mNav.artists'), page: 'artists' },
    { label: t('mNav.music'), page: 'albums' },
    { label: t('mNav.videos'), page: 'videos' },
    { label: t('mNav.events'), page: 'events' },
    { label: t('mNav.studio'), page: 'studio' },
    { label: t('mNav.bookStudio'), page: 'book-studio' },
    { label: t('mNav.submitDemo'), page: 'submit-demo' },
    { label: t('mNav.contact'), page: 'contact' },
  ];

  const links = isConstruction ? constructionLinks : musicLinks;
  const Icon = isConstruction ? HardHat : Music;
  const divisionName = isConstruction ? 'JB Projects Consulting' : 'JB Records';
  const tagline = isConstruction
    ? `${t('cHero.title1')} ${t('cHero.title2')}`
    : `${t('mHero.title1')} ${t('mHero.title2')}`;

  return (
    <footer className={`${bg} ${border} border-t`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  isConstruction ? 'bg-gold-400 text-maroon-900' : 'bg-spot-green text-black'
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold text-white">{divisionName}</span>
            </div>
            <p className="mt-3 text-sm text-gray-400">{tagline}</p>
            <button
              onClick={goHome}
              className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${accent} ${hoverAccent}`}
            >
              <Home className="h-4 w-4" />
              {t('footer.backToGroup')}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              {t('footer.explore')}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(isConstruction ? 'construction' : 'music', link.page)}
                    className={`text-sm text-gray-400 transition-colors ${hoverAccent}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Division */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              {t('footer.otherDivision')}
            </h4>
            <button
              onClick={() => navigate(isConstruction ? 'music' : 'construction', 'home')}
              className="flex items-center gap-2.5 rounded-lg border border-white/10 p-3 text-left transition-colors hover:bg-white/5"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  isConstruction ? 'bg-spot-green/20 text-spot-green' : 'bg-gold-400/20 text-gold-400'
                }`}
              >
                {isConstruction ? <Music className="h-4 w-4" /> : <HardHat className="h-4 w-4" />}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {isConstruction ? 'JB Records' : 'JB Projects Consulting'}
                </div>
                <div className="text-xs text-gray-500">
                  {isConstruction
                    ? `${t('nav.music')} Division`
                    : `${t('nav.construction')} Division`}
                </div>
              </div>
            </button>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Phone className={`h-4 w-4 flex-shrink-0 ${accent} mt-0.5`} />
                +243 000 000 000
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Mail className={`h-4 w-4 flex-shrink-0 ${accent} mt-0.5`} />
                {isConstruction ? 'info@jbprojectsdrc.com' : 'music@jbprojectsdrc.com'}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className={`h-4 w-4 flex-shrink-0 ${accent} mt-0.5`} />
                <span className="block">
                  <span className="block font-medium text-gray-300">{t('home.visitUs')}</span>
                  <span className="block">{t('home.address')}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-10 border-t ${border} pt-6 text-center`}>
          <p className="text-xs text-gray-500">
            {`© ${new Date().getFullYear()} JB Group. ${t('footer.copyright')}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
