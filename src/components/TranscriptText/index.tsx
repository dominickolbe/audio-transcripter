import React from "react";

interface TranscriptTextProps {
  blocks: {
    text: string;
    start: number;
    end: number;
  }[];
  currentTime: number;
  onClick: (time: number) => void;
}

const TranscriptText: React.FC<TranscriptTextProps> = ({
  blocks,
  currentTime,
  onClick,
}) => {
  return (
    <>
      {blocks.map((block) => (
        <div
          key={block.start + " " + block.end}
          onClick={() => onClick(block.start)}
        >
          {block.text}
        </div>
      ))}
    </>
  );
};

export default TranscriptText;
