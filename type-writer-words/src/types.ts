export interface TypeWriterProps {
  words: string[];
  cursor?:"default" | "line";
  typingSpeed?: number;
  deletingSpeed?: number;
  wordPause?: number;
  deletePause?: number;
  color?: string;
}
