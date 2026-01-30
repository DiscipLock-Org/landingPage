-- Disciplock Waitlist Table Setup
-- Run this SQL in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  device_type TEXT NOT NULL CHECK (device_type IN ('ios', 'android')),
  primary_goal TEXT,
  accountability_interest TEXT,
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_device_type ON waitlist(device_type);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for re-running this script)
DROP POLICY IF EXISTS "Allow public inserts" ON waitlist;
DROP POLICY IF EXISTS "Allow service role reads" ON waitlist;

-- Create a policy that allows inserts from anonymous users (for the API)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy that allows service role to read (for admin purposes)
-- Note: This uses the service role key, not the anon key
CREATE POLICY "Allow service role reads" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- Optional: Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
