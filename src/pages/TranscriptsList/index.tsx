import React from "react";
import { Link } from "react-router-dom";

interface TranscriptData {
  id: string;
  title: string;
}

interface TranscriptsListProps {
  transcripts: TranscriptData[];
}

const TranscriptsList: React.FC<TranscriptsListProps> = ({ transcripts }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transcripts List</h1>
      <ul className="space-y-4">
        {transcripts.map((transcript) => (
          <li
            key={transcript.id}
            className="p-4 border rounded hover:bg-gray-100"
          >
            <Link
              to={`/transcripts/${transcript.id}`}
              className="text-blue-500"
            >
              {transcript.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranscriptsList;
