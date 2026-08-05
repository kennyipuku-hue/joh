import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLang } from '@/lib/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-gold-400">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400';

export function ContactForm({ division = 'home' }: { division?: string }) {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        division,
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: (data.get('phone') as string) || null,
        subject: (data.get('subject') as string) || null,
        message: data.get('message') as string,
      });
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t('form.error'));
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-spot-green/30 bg-spot-green/10 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-spot-green" />
        <h3 className="text-xl font-bold text-white">{t('form.sent')}</h3>
        <p className="mt-2 text-gray-400">{t('form.sentDesc')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-spot-green hover:underline"
        >
          {t('form.sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.fullName')} required>
          <input name="name" required className={inputClass} placeholder="John Doe" />
        </Field>
        <Field label={t('form.email')} required>
          <input name="email" type="email" required className={inputClass} placeholder="john@example.com" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.phone')}>
          <input name="phone" className={inputClass} placeholder="(555) 123-4567" />
        </Field>
        <Field label={t('form.subject')}>
          <input name="subject" className={inputClass} placeholder={t('form.howCanHelp')} />
        </Field>
      </div>
      <Field label={t('form.message')} required>
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder={t('form.tellProject')}
        />
      </Field>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-spot-green px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:bg-spot-green-bright active:scale-95 disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? t('form.sending') : t('form.send')}
      </button>
    </form>
  );
}

export function QuoteForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const { error } = await supabase.from('quote_requests').insert({
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: (data.get('phone') as string) || null,
        project_type: (data.get('project_type') as string) || null,
        budget: (data.get('budget') as string) || null,
        location: (data.get('location') as string) || null,
        project_details: data.get('project_details') as string,
      });
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t('form.error'));
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-gold-400" />
        <h3 className="text-xl font-bold text-white">{t('form.quoteSent')}</h3>
        <p className="mt-2 text-gray-400">{t('form.quoteSentDesc')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-gold-400 hover:underline"
        >
          {t('form.submitAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.fullName')} required>
          <input name="name" required className={inputClass} placeholder="John Doe" />
        </Field>
        <Field label={t('form.email')} required>
          <input name="email" type="email" required className={inputClass} placeholder="john@example.com" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.phone')}>
          <input name="phone" className={inputClass} placeholder="(555) 123-4567" />
        </Field>
        <Field label={t('form.projectLocation')}>
          <input name="location" className={inputClass} placeholder={t('form.cityState')} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.projectType')}>
          <select name="project_type" className={inputClass} defaultValue="">
            <option value="" disabled>{t('form.selectType')}</option>
            <option value="residential">{t('form.residential')}</option>
            <option value="commercial">{t('form.commercial')}</option>
            <option value="renovation">{t('form.renovation')}</option>
            <option value="interior">{t('form.interior')}</option>
            <option value="architecture">{t('form.architecture')}</option>
            <option value="other">{t('form.other')}</option>
          </select>
        </Field>
        <Field label={t('form.budget')}>
          <select name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>{t('form.selectBudget')}</option>
            <option value="under-50k">Under $50K</option>
            <option value="50k-150k">$50K – $150K</option>
            <option value="150k-500k">$150K – $500K</option>
            <option value="500k-1m">$500K – $1M</option>
            <option value="over-1m">Over $1M</option>
          </select>
        </Field>
      </div>
      <Field label={t('form.projectDetails')} required>
        <textarea
          name="project_details"
          required
          rows={5}
          className={inputClass}
          placeholder={t('form.describeProject')}
        />
      </Field>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-maroon-900 transition-all hover:scale-[1.01] hover:bg-gold-300 active:scale-95 disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? t('form.submitting') : t('form.submitQuote')}
      </button>
    </form>
  );
}

export function DemoForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const { error } = await supabase.from('demo_submissions').insert({
        artist_name: data.get('artist_name') as string,
        email: data.get('email') as string,
        phone: (data.get('phone') as string) || null,
        genre: (data.get('genre') as string) || null,
        stage_name: (data.get('stage_name') as string) || null,
        song_title: (data.get('song_title') as string) || null,
        link: (data.get('link') as string) || null,
        bio: (data.get('bio') as string) || null,
      });
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t('form.error'));
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-spot-green/30 bg-spot-green/10 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-spot-green" />
        <h3 className="text-xl font-bold text-white">{t('form.demoSent')}</h3>
        <p className="mt-2 text-gray-400">{t('form.demoSentDesc')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-spot-green hover:underline"
        >
          Submit another demo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.fullName')} required>
          <input name="artist_name" required className={inputClass} placeholder="Your full name" />
        </Field>
        <Field label={t('form.stageName')}>
          <input name="stage_name" className={inputClass} placeholder="Artist / stage name" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.email')} required>
          <input name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </Field>
        <Field label={t('form.phone')}>
          <input name="phone" className={inputClass} placeholder="(555) 123-4567" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.genre')}>
          <select name="genre" className={inputClass} defaultValue="">
            <option value="" disabled>{t('form.selectGenre')}</option>
            <option value="gospel">{t('form.gospel')}</option>
            <option value="worship">{t('form.worship')}</option>
            <option value="contemporary-gospel">{t('form.contemporary')}</option>
            <option value="choir">{t('form.choir')}</option>
            <option value="christian-rock">{t('form.christianRock')}</option>
            <option value="other">{t('form.other')}</option>
          </select>
        </Field>
        <Field label={t('form.songTitle')}>
          <input name="song_title" className={inputClass} placeholder="Title of submitted song" />
        </Field>
      </div>
      <Field label={t('form.demoLink')}>
        <input name="link" className={inputClass} placeholder="https://soundcloud.com/..." />
      </Field>
      <Field label={t('form.briefBio')}>
        <textarea
          name="bio"
          rows={4}
          className={inputClass}
          placeholder={t('form.tellJourney')}
        />
      </Field>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-spot-green px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:bg-spot-green-bright active:scale-95 disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? t('form.submitting') : t('form.submitDemo')}
      </button>
    </form>
  );
}

export function StudioBookingForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const { error } = await supabase.from('studio_bookings').insert({
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: (data.get('phone') as string) || null,
        service: data.get('service') as string,
        preferred_date: (data.get('preferred_date') as string) || null,
        notes: (data.get('notes') as string) || null,
      });
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t('form.error'));
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-spot-green/30 bg-spot-green/10 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-spot-green" />
        <h3 className="text-xl font-bold text-white">{t('form.bookingSent')}</h3>
        <p className="mt-2 text-gray-400">{t('form.bookingSentDesc')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-spot-green hover:underline"
        >
          {t('form.bookAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.fullName')} required>
          <input name="name" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label={t('form.email')} required>
          <input name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.phone')}>
          <input name="phone" className={inputClass} placeholder="(555) 123-4567" />
        </Field>
        <Field label={t('form.serviceNeeded')} required>
          <select name="service" required className={inputClass} defaultValue="">
            <option value="" disabled>{t('form.selectService')}</option>
            <option value="recording">{t('form.recording')}</option>
            <option value="mixing">{t('form.mixing')}</option>
            <option value="mastering">{t('form.mastering')}</option>
            <option value="songwriting">{t('form.songwriting')}</option>
            <option value="video-production">{t('form.videoProd')}</option>
            <option value="photography">{t('form.photography')}</option>
          </select>
        </Field>
      </div>
      <Field label={t('form.preferredDate')}>
        <input name="preferred_date" type="date" className={inputClass} />
      </Field>
      <Field label={t('form.projectNotes')}>
        <textarea
          name="notes"
          rows={4}
          className={inputClass}
          placeholder={t('form.tellStudio')}
        />
      </Field>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-spot-green px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:bg-spot-green-bright active:scale-95 disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? t('form.submitting') : t('form.bookSession')}
      </button>
    </form>
  );
}

export function EventRegistrationForm({ eventTitle }: { eventTitle: string }) {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const { error } = await supabase.from('event_registrations').insert({
        event_title: eventTitle,
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: (data.get('phone') as string) || null,
        ticket_count: parseInt(data.get('ticket_count') as string, 10) || 1,
      });
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t('form.error'));
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-spot-green/30 bg-spot-green/10 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-spot-green" />
        <h3 className="text-xl font-bold text-white">{t('form.registered')}</h3>
        <p className="mt-2 text-gray-400">
          {t('form.registeredDesc')} {eventTitle}. {t('form.confirmationEmail')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.fullName')} required>
          <input name="name" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label={t('form.email')} required>
          <input name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('form.phone')}>
          <input name="phone" className={inputClass} placeholder="(555) 123-4567" />
        </Field>
        <Field label={t('form.numTickets')} required>
          <input
            name="ticket_count"
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            required
            className={inputClass}
          />
        </Field>
      </div>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-spot-green px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:bg-spot-green-bright active:scale-95 disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === 'submitting' ? t('form.processing') : t('form.register')}
      </button>
    </form>
  );
}
