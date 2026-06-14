import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      resumes: {
        Row: {
          id: string
          created_at: string
          name: string
          title: string
          email: string
          phone: string
          city: string
          summary: string
          skills: string[]
          experience: any[]
          education: any[]
          languages: any[]
        }
        Insert: Omit<Database['public']['Tables']['resumes']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['resumes']['Insert']>
      }
      jobs: {
        Row: {
          id: string
          created_at: string
          title: string
          company: string
          location: string
          description: string
          image_url: string | null
          apply_url: string | null
        }
      }
    }
  }
}
