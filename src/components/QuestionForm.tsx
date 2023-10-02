"use client";

import {useRef, useState} from "react";

function ProcessingSpinner() {
  return (
    <>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          data-darkreader-inline-stroke=""
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          data-darkreader-inline-fill=""
        ></path>
      </svg>
      Procesando...
    </>
  );
}

export default function QuestionForm({
  createQuestion,
}: {
  createQuestion: (question: string) => Promise<void>;
}) {
  const form = useRef<HTMLFormElement>(null);
  const [creating, setCreating] = useState(false);

  async function handleAddQuestion(data: FormData) {
    setCreating(true);
    const question = data.get("question") as string;
    if (!question) return;
    await createQuestion(question);
    setCreating(false);
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
        className="bg-pink-500 mt-3 h-[51px] rounded-lg text-white text-lg font-semibold flex items-center justify-center"
        disabled={creating}
      >
        {creating ? <ProcessingSpinner /> : "Enviar pregunta"}
      </button>
    </form>
  );
}
