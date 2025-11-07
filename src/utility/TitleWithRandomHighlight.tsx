import React from "react";
import HighlightLetters from "./HighlightLetters";

export default function TitleWithRandomHighlight({ title }: { title: string }) {
  // ambil panjang string
  const length = title.length;  

  // generate 3 angka random unik
  const randomIndices = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * length)
  );

  return (
    <HighlightLetters
      text={title}
      indices={randomIndices}
      className="font-menu"
    />
  );
}
