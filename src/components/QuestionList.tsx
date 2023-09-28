import Link from "next/link";

import {Question} from "@/types";
import QuestionItem from "./QuestionItem";

interface props {
  questions: Question[];
}
export default function QuestionList({questions}: props) {
  return (
    <ul className="grid grid-cols-0n gap-4 justify-between h-full">
      {questions?.map(({id, question}) => {
        return (
          <li key={id}>
            <Link key={id} href={`/${id}`}>
              <QuestionItem question={question} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
