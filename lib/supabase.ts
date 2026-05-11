"use client"

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://cehzetnqkhsdnfelapnq.supabase.co"

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlaHpldG5xa2hzZG5mZWxhcG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MzU2MzksImV4cCI6MjA5NDExMTYzOX0.vFQ1yXLNycdS2WgD9af03o3XNQfsSfourqxKxZuEc3Q"

let cached: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (cached) return cached
  cached = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  })
  return cached
}
