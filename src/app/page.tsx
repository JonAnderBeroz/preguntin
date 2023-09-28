import QuestionForm from "@/components/QuestionForm";
import api from "../api";
import QuestionList from "@/components/QuestionList";

export default async function QuestionsIndex() {
  const questions = await api.question.getAll();
  return (
    <main className="flex flex-col gap-4">
      <QuestionForm createQuestion={api.question.create} />
      <QuestionList questions={questions} />
    </main>
  );
}
