import api from "@/api";
import QuestionItem from "@/components/QuestionItem";
import Link from "next/link";
import Copy2Clipboard from "./copy2Clipboard";

export default async function Question({params}: {params: {id: string}}) {
  const {question} = await api.question.get(params.id);
  console.log(question);
  return (
    <section className="grid gap-4">
      <QuestionItem question={question} />
      <section className="flex gap-2">
        <Link
          href="/"
          className="bg-pink-700 text-white w-20 py-2 px-1 text-center rounded-lg hover:font-semibold text-lg"
        >
          Atras
        </Link>
        <Copy2Clipboard />
      </section>
    </section>
  );
}
