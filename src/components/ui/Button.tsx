import { type ReactNode, type MouseEventHandler } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Theme = 'construction' | 'music' | 'home';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  theme?: Theme;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

const themeStyles: Record<Theme, Record<Variant, string>> = {
  construction: {
    primary: 'bg-gold-400 text-maroon-900 hover:bg-gold-300 shadow-lg shadow-gold-400/20',
    secondary: 'bg-maroon-700 text-white hover:bg-maroon-600 shadow-lg shadow-maroon-700/20',
    outline: 'border-2 border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-maroon-900',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10',
  },
  music: {
    primary: 'bg-spot-green text-black font-bold hover:bg-spot-green-bright hover:scale-[1.02] shadow-lg shadow-spot-green/30',
    secondary: 'bg-white text-spot-black hover:bg-gray-200 shadow-lg',
    outline: 'border-2 border-spot-gray-lighter text-white hover:border-spot-green hover:text-spot-green',
    ghost: 'text-white/70 hover:text-white hover:bg-white/10',
  },
  home: {
    primary: 'bg-white text-maroon-800 hover:bg-gray-100 shadow-xl',
    secondary: 'bg-maroon-700 text-white hover:bg-maroon-600 shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-maroon-800',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10',
  },
};

export function Button({
  children,
  variant = 'primary',
  theme = 'home',
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 ${themeStyles[theme][variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
