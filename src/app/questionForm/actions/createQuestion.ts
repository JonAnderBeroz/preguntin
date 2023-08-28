"use server";

import {cookies} from "next/headers";
import {createServerActionClient} from "@supabase/auth-helpers-nextjs";
import {revalidatePath} from "next/cache";

export default async function addQuestion(question: string) {
  if (!question) return;
  const supabase = createServerActionClient({cookies});
  await supabase.from("questions").insert({question});
  revalidatePath("/");
}
