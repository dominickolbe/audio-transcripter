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
          className={` ${
            currentTime >= block.start && currentTime <= block.end
              ? "bg-yellow-300"
              : "hover:bg-blue-100"
          } text-lg cursor-pointer transition duration-200 ease-in-out mb-2`}
        >
          {block.text}
        </div>
      ))}
    </>
  );
};

export default TranscriptText;
