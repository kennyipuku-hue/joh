import { NavProvider } from '@/lib/navigation';
import { LangProvider } from '@/lib/i18n';
import { HomePage } from '@/pages/HomePage';
import { ConstructionWorld } from '@/pages/construction/ConstructionWorld';
import { MusicWorld } from '@/pages/music/MusicWorld';
import { useNav } from '@/lib/navigation';

function AppContent() {
  const { world, page, params } = useNav();

  if (world === 'construction') {
    return <ConstructionWorld page={page} />;
  }
  if (world === 'music') {
    return <MusicWorld page={page} params={params} />;
  }
  return <HomePage />;
}

export default function App() {
  return (
    <LangProvider>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </LangProvider>
  );
}
