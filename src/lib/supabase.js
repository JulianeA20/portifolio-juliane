import { createClient } from '@supabase/supabase-js'

// IMPORTANTE: Substitua com as suas credenciais do Supabase
const supabaseUrl = 'https://slfrstbjroxiioszugwl.supabase.co'
const supabaseAnonKey = 'sb_publishable_HxrQy9PjKX_ka7LPcz2y1Q_ORoAUWzX'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
