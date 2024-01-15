import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://vwxxdauiyvddmckupqab.supabase.co';
const ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3eHhkYXVpeXZkZG1ja3VwcWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyOTg3MzAsImV4cCI6MjAyMDg3NDczMH0.zv_jRBvIPje5utPMaD6_m04Xrgz5P2L7OpDtum5fO4s';
export const supabase = createClient(PROJECT_URL, ANON_KEY);
