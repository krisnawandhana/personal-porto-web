export default function HighlightLetters({ text, indices, className }: {
  text: string;
  indices: number[];
  className: string;
}) {
  return (
    <>
      {[...text].map((char, i) => 
        indices.includes(i) ? (
          <span key={i} className={className}>{char}</span>
        ) : (
          char
        )
      )}
    </>
  );
}
