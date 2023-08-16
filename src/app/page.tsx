"use client";

import {FormEvent, useState} from "react";

export default function QuestionList() {
  const [questions, setQuestion] = useState<
    {
      id: number;
      question: string;
    }[]
  >([
    {
      id: 1,
      question: "Cual es tu peor experiencia?",
    },
    {
      id: 2,
      question: "Color favorito?",
    },
    {
      id: 3,
      question: "Eres otako?",
    },
    {
      id: 4,
      question: "Le pregunta",
    },
  ]);

  function handleAddQuestion(event: FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const question: string = form["question"].value;
    setQuestion((questions) => questions.concat({id: -1, question}));
    form["question"].value = "";
  }

  return (
    <main className="flex flex-col max-w-7xl mx-auto w-full h-full gap-4">
      <form onSubmit={handleAddQuestion} className=" w-full flex flex-col">
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
      <section className="h-full">
        <ul className="grid grid-cols-0n gap-4 justify-between">
          {questions.map(({id, question}) => {
            return (
              <li
                key={id}
                className="rounded-lg overflow-hidden bg-white h-[104px] flex flex-col w-[233px]"
              >
                <span className=" bg-pink-500 h-[52px] flex items-center px-4 text-lg font-semibold decoration-solid text-white">
                  Preguntin
                </span>
                <span className="my-auto px-4">{question}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
