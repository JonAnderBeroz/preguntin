"use client";

import {useRef} from "react";
import createQuestion from "./actions/createQuestion";

export default function QuestionForm() {
  const form = useRef<HTMLFormElement>(null);

  async function handleAddQuestion(data: FormData) {
    const question = data.get("question") as string;
    if (!question) return;
    createQuestion(question);
    form.current?.reset();
  }

  return (
    <form ref={form} action={handleAddQuestion} className=" w-full flex flex-col">
      <span className="rounded-t-lg bg-pink-500 h-[52px] items-center flex px-4 text-lg font-semibold decoration-solid text-white">
        Preguntin
      </span>
      <input
        name="question"
        placeholder="Me pregunto si.."
        className="w-full outline-none px-4 bg-white h-[52px] rounded-b-lg "
        autoFocus={true}
      />
      <button
        type="submit"
        className="bg-pink-500 mt-3 h-[51px] rounded-lg text-white text-lg font-semibold"
      >
        Enviar pregunta
      </button>
    </form>
  );
}
