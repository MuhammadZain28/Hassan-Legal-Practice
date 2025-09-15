import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tdxrwcvtxpxphupttcxp.supabase.co' // your Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkeHJ3Y3Z0eHB4cGh1cHR0Y3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTg2NzgsImV4cCI6MjA3MDU3NDY3OH0.NDas7XDIvR75ulz1i1kbqliU792sPcCB7HUZZeIhosE' // your anon public key
export const supabase = createClient(supabaseUrl, supabaseKey)
