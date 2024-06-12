import React, { useState, useEffect } from "react";
import AudioPlayer from "../AudioPlayer";

interface TranscriptComponentProps {
  id: string;
}

type TranscriptBlock = {
  start: number;
  end: number;
  text: string;
};

type TranscriptResponse = {
  id: string;
  title: string;
  audioUrl: string;
  blocks: TranscriptBlock[];
};

const TranscriptComponent = ({ id }: TranscriptComponentProps) => {
  const [transcript, setTranscript] = useState<TranscriptResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await fetch(
          `https://frontend-challenge-backend.vercel.app/api/transcripts/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as TranscriptResponse;
        setTranscript(data);
      } catch (error) {
        debugger;
      } finally {
        setLoading(false);
      }
    };

    fetchTranscript();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {transcript !== null && (
        <AudioPlayer
          audioSrc={transcript.audioUrl}
          transcript={transcript.blocks}
        />
      )}
    </div>
  );
};

export default TranscriptComponent;
