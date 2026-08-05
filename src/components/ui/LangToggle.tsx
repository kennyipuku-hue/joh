import { Globe } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white ${className}`}
      title={t('lang.label')}
    >
      <Globe className="h-3.5 w-3.5" />
      {t('lang.toggle')}
    </button>
  );
}
