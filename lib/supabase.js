import { createClient } from "@supabase/supabase-js";

function cleanEnv(v) {
  if (!v) return v;
  const s = String(v).trim();
  // Support accidental wrapping quotes in .env values.
  return s.replace(/^['"]|['"]$/g, "");
}

const supabaseUrl = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_URL);


const supabaseAnonKey = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
