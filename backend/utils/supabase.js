// utils/supabase.js
// import { createClient } from '@supabase/supabase-js';

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );


//  import { createClient } from '@supabase/supabase-js';

//  const supabaseUrl = process.env.SUPABASE_URL;
//  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;



//  export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// utils/supabase.js
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
