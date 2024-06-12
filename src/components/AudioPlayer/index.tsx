import React, { useRef, useState, useEffect } from "react";
import "./index.css";

interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

interface AudioPlayerProps {
  audioSrc: string;
  transcript: TranscriptSegment[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, transcript }) => {
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

  const handleTranscriptClick = (startTime: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = startTime;
      audio.play();
    }
  };

  const getHighlightedText = () => {
    return transcript.map(({ start, end, text }, index) => (
      <span
        key={index}
        className={`${
          currentTime >= start && currentTime <= end ? "bg-yellow-300" : ""
        } cursor-pointer hover:bg-yellow-100`}
        onClick={() => handleTranscriptClick(start)}
      >
        {text}{" "}
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Audio Transcript</h1>
          <div className="text-lg">
            <div className="mb-16 pb-8 text-left">{getHighlightedText()}</div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-lg">
        <audio ref={audioRef} controls src={audioSrc} className="w-full" />
      </div>
    </div>
  );
};

export default AudioPlayer;
