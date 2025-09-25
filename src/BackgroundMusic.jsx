import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
// 👉 Import nhạc
import weddingMusic from "./assets/wedding.mp4";  

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Không phát được nhạc:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Nhạc nền */}
      <audio ref={audioRef} src={weddingMusic} loop />

      {/* Nút bật/tắt nhạc */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}

export default BackgroundMusic;
