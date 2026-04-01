-- Create membership registrations table
CREATE TABLE IF NOT EXISTS public.membership_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  message TEXT,
  org TEXT NOT NULL CHECK (org IN ('skillceta', 'ppt')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.membership_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration form)
CREATE POLICY "Anyone can submit a membership registration"
  ON public.membership_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins should read (for now, block all reads from client)
CREATE POLICY "No public reads on registrations"
  ON public.membership_registrations
  FOR SELECT
  USING (false);