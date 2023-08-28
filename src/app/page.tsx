import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

import QuestionForm from "@/app/questionForm/questionForm";

export default async function QuestionList() {
  const supabase = createServerComponentClient({cookies});
  const {data: questions}: PostgrestSingleResponse<{id: number; question: string}[]> =
    await supabase.from("questions").select();

  return (
    <main className="flex flex-col max-w-7xl mx-auto w-full h-full gap-4">
      <QuestionForm />
      <QuestionList questions={questions} />
    </main>
  );
}
