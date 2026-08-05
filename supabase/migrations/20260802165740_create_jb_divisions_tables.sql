/*
# Create JB Company form-submission tables (single-tenant, no auth)

1. Overview
   This migration creates four tables to capture inbound form submissions for the
   JB company dual-division website (Construction + Gospel Music). There is no
   sign-in / account system — visitors submit forms anonymously, so all policies
   are scoped to the `anon, authenticated` roles and writes are intentionally open.

2. New Tables
   - `contact_submissions` — general contact messages from the company home page
     or any division's contact section. Columns: id, division (home/construction/music),
     name, email, phone, subject, message, created_at.
   - `quote_requests` — construction quote requests. Columns: id, name, email, phone,
     project_type, budget, location, project_details, created_at.
   - `demo_submissions` — aspiring gospel artists submitting a demo. Columns: id,
     artist_name, email, phone, genre, stage_name, song_title, soundcloud_or_youtube,
     bio, created_at.
   - `studio_bookings` — requests to book the recording studio. Columns: id, name,
     email, phone, service (recording/mixing/mastering/etc), preferred_date, notes,
     created_at.
   - `event_registrations` — RSVP / ticket interest for gospel music events.
     Columns: id, event_title, name, email, phone, ticket_count, created_at.

3. Security
   - Enable RLS on every table.
   - Allow anon + authenticated INSERT only (these are public intake forms).
   - No SELECT/UPDATE/DELETE for anon — only inserts, so submitted data stays private
     and cannot be enumerated from the browser.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  division text NOT NULL DEFAULT 'home',
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text,
  budget text,
  location text,
  project_details text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_quote" ON quote_requests;
CREATE POLICY "anon_insert_quote" ON quote_requests
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS demo_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_name text NOT NULL,
  email text NOT NULL,
  phone text,
  genre text,
  stage_name text,
  song_title text,
  link text,
  bio text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE demo_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_demo" ON demo_submissions;
CREATE POLICY "anon_insert_demo" ON demo_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS studio_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  preferred_date date,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE studio_bookings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_studio_booking" ON studio_bookings;
CREATE POLICY "anon_insert_studio_booking" ON studio_bookings
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_title text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  ticket_count integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert_event_registration" ON event_registrations;
CREATE POLICY "anon_insert_event_registration" ON event_registrations
  FOR INSERT TO anon, authenticated WITH CHECK (true);
