import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fflbmyabphugvkrxlmxn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmbGJteWFicGh1Z3ZrcnhsbXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMjk2NjgsImV4cCI6MjA2MDkwNTY2OH0.CtrqxzdTcKKR2ZI5tyVyDUBryPZxWd9LXo6gHzKg0y8'

export default defineNuxtPlugin(() => {
  const supabase = createClient(supabaseUrl, supabaseKey)
  return {
    provide: {
      supabase
    }
  }
})