import {revalidatePath} from "next/cache";

import {Question} from "./types";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const api = {
  question: {
    getAll: async (): Promise<Question[]> => {
      const {data: questions} = await supabase.from("questions").select();
      return questions as Question[];
    },
    create: async (question: string): Promise<void> => {
      "use server";
      await supabase.from("questions").insert({question});
      revalidatePath("/");
    },
    get: async (id: string): Promise<Question> => {
      const {data: result} = await supabase.from("questions").select().eq("id", id).single();
      if (!result) return {id: "-1", question: "Pregunta no encontrada!"};
      return result as Question;
    },
  },
};

export default api;
