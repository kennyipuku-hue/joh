import {
  Home,
  Building2,
  Hammer,
  Palette,
  DraftingCompass,
  ClipboardList,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Leaf,
  HeartHandshake,
  Mic,
  SlidersHorizontal,
  Disc3,
  PenLine,
  Video,
  Camera,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Hammer,
  Palette,
  DraftingCompass,
  ClipboardList,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Leaf,
  HeartHandshake,
  Mic,
  SlidersHorizontal,
  Disc3,
  PenLine,
  Video,
  Camera,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
