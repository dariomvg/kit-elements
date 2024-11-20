import { useEffect, useState } from "react";
import { cursors } from "./cursors";
import { TypeWriterProps } from "./types";
import "./TypeWriter.css";

export default function TypeWriter({
  words = [],
  cursor = "default",
  typingSpeed = 100,
  deletingSpeed = 100,
  wordPause = 2000, // pausa para empezar a eliminar
  deletePause = 2000, // pausa para empezar a escribir 
  color = "#fff"
}: TypeWriterProps): JSX.Element {

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: any;

    const updateText = () => {
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), wordPause);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = setTimeout(updateText, deletePause);
      } else {
        timeout = setTimeout(
          updateText,
          isDeleting ? deletingSpeed : typingSpeed
        );
      }
    };

    timeout = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    wordPause,
  ]);

  return (
    <div className="efects_titles">
      <p id="text" style={{color: color}}>{displayedText}</p>
      <span id="cursor" className="cursor" style={{color: color}}>
        {cursors[cursor]}
      </span>
    </div>
  );
}
