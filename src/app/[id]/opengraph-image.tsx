import api from "@/api";
import QuestionItem from "@/components/QuestionItem";
import {ImageResponse} from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({params}: {params: {id: string}}) {
  const {question} = await api.question.get(params.id);
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "1.5rem",
          flexDirection: "column",
          backgroundColor: "#1f2937",
          justifyContent: "center",
        }}
      >
        <article
          style={{
            fontSize: 80,
            overflow: "hidden",
            borderRadius: "2rem",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <span style={{backgroundColor: "rgb(236 72 153)", paddingLeft: "1rem", color: "white"}}>
            Preguntin
          </span>
          <span
            style={{paddingLeft: "1rem", marginTop: "auto", marginBottom: "auto", fontSize: 70}}
          >
            {question}
          </span>
        </article>
      </div>
    ),
    {
      ...size,
    },
  );
}
