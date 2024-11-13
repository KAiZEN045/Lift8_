// supabase.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhseGF4dm1mcnV1YXp3bGFrb3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1MzM0NDgsImV4cCI6MjA0NDEwOTQ0OH0.VkxAHS9tVU8ZXA1E-izUXitImQrLP0eWSkuvakTjgFw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
