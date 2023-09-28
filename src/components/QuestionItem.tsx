export default function QuestionItem({question}: {question: string}) {
  return (
    <article className="rounded-lg overflow-hidden bg-white min-h-[104px] flex flex-col">
      <span className=" bg-pink-500 h-[52px] px-4 flex items-center text-lg font-semibold decoration-solid text-white">
        Preguntin
      </span>
      <span className="px-4 my-auto">{question}</span>
    </article>
  );
}
