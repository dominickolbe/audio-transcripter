import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { TranscriptResponse } from "../../types";
import TranscriptText from "../../components/TranscriptText";

const TranscriptsDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useFetch<TranscriptResponse>(`${id}`);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <Navigate to="/not-found" />;
  if (!data) return <div>Transcript not found</div>;

  const handleTranscriptClick = (startTime: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = startTime;
      audio.play();
    }
  };

  return (
    <div className="p-4 h-screen">
      <Link to="/" className="text-blue-500 hover:underline">
        Back to List
      </Link>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <div className="flex flex-col h-[calc(100vh_-_85px)]">
        <div className="p-4 border rounded bg-gray-100 flex-grow overflow-auto">
          <TranscriptText
            blocks={data.blocks}
            currentTime={currentTime}
            onClick={handleTranscriptClick}
          />
        </div>
        <div className="left-0 w-full p-4 bg-white">
          <audio
            ref={audioRef}
            controls
            src={data.audioUrl}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TranscriptsDetail;
