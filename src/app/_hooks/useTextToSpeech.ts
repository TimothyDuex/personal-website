import { useState, useCallback, useRef } from "react";

export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentText, setCurrentText] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speak = useCallback(
    async (text: string) => {
      if (isPlaying && currentText === text) {
        // Stop current audio if same text
        audioRef.current?.pause();
        setIsPlaying(false);
        setCurrentText("");
        return;
      }

      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }

      setCurrentText(text);
      setIsLoading(true);

      try {
        const response = await fetch("/api/text-to-speech", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.slice(0, 1000) }),
        });

        if (!response.ok) throw new Error("TTS failed");

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        if (audioRef.current) {
          audioRef.current.src = audioUrl;
        } else {
          audioRef.current = new Audio(audioUrl);
        }

        audioRef.current.onended = () => {
          setIsPlaying(false);
          setCurrentText("");
          URL.revokeObjectURL(audioUrl);
        };

        audioRef.current.onerror = () => {
          setIsPlaying(false);
          setCurrentText("");
          setIsLoading(false);
          URL.revokeObjectURL(audioUrl);
        };

        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("TTS Error:", error);
        setCurrentText("");
      } finally {
        setIsLoading(false);
      }
    },
    [isPlaying, currentText],
  );

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentText("");
  }, []);

  return {
    speak,
    stop,
    isPlaying: isPlaying && currentText !== "",
    isLoading,
    currentText,
  };
};
