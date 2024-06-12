export type TranscriptBlock = {
  start: number;
  end: number;
  text: string;
};

export type TranscriptResponse = {
  id: string;
  title: string;
  audioUrl: string;
  blocks: TranscriptBlock[];
};
