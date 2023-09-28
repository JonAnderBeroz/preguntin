import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {createServerActionClient} from "@supabase/auth-helpers-nextjs";

import {Question} from "./types";

const api = {
  question: {
    getAll: async (): Promise<Question[]> => {
      const supabase = createServerComponentClient({cookies});
      const {data: questions} = await supabase.from("questions").select();
      return questions as Question[];
    },
    create: async (question: string): Promise<void> => {
      "use server";
      const supabase = createServerActionClient({cookies});
      await supabase.from("questions").insert({question});
      revalidatePath("/");
    },
    get: async (id: string): Promise<Question> => {
      const supabase = createServerComponentClient({cookies});
      const {data: results} = await supabase.from("questions").select().eq("id", id);
      if (!results || results.length === 0) return {id: "-1", question: "test"};
      return results[0] as Question;
    },
  },
};

export default api;
