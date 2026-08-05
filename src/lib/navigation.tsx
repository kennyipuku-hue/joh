import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type World = 'home' | 'construction' | 'music';

export interface NavState {
  world: World;
  page: string;
  params: Record<string, string>;
}

interface NavContextValue extends NavState {
  navigate: (world: World, page?: string, params?: Record<string, string>) => void;
  goHome: () => void;
}

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavState>({
    world: 'home',
    page: 'home',
    params: {},
  });

  const navigate = useCallback(
    (world: World, page: string = 'home', params: Record<string, string> = {}) => {
      setState({ world, page, params });
      window.scrollTo({ top: 0, behavior: 'instant' });
    },
    [],
  );

  const goHome = useCallback(() => {
    setState({ world: 'home', page: 'home', params: {} });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <NavContext.Provider value={{ ...state, navigate, goHome }}>{children}</NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');
  return ctx;
}
