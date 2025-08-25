"use server";

import { createClient } from "../../api/supabase/server";

export default async function Blogs() {
  const supabase = await createClient();
  const { data: blogs } = await supabase.from("blogs").select();
  return <pre>{JSON.stringify(blogs, null, 2)}</pre>;
}
