export default function QuestionList(questions: {id: number; question: string}[]) {
  return (
    <ul className="grid grid-cols-0n gap-4 justify-between h-full">
      {questions?.map(({id, question}) => {
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
  );
}
