import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  theme: 'construction' | 'music';
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, theme, center = true }: SectionHeadingProps) {
  const accent = theme === 'construction' ? 'text-gold-400' : 'text-spot-green';
  const lineColor = theme === 'construction' ? 'bg-gold-400' : 'bg-spot-green';

  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''} mb-4`}>
          <span className={`h-px w-8 ${lineColor}`} />
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>{eyebrow}</span>
          <span className={`h-px w-8 ${lineColor}`} />
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base text-gray-400 ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
