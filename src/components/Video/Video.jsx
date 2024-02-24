import { useState, useRef } from "react";
import "./Video.css";

function Video({ url, title, description, likes }) {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progress = useRef(0);

  const handlePlayPause = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
      setPlaying((play) => !play);
    }
  };
  const handleVideoProgress = (event) => {
    progress.current = (event.target.currentTime / event.target.duration) * 100;
    progressRef.current.value = progress.current;
  };
  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="h-[95dvh] relative snap-start flex flex-row">
      <div className="w-[550px]">
        <video
          className="object-contain w-full h-[90%] rounded-xl"
          src={url}
          onClick={handlePlayPause}
          ref={videoRef}
          onTimeUpdate={handleVideoProgress}
        ></video>
        <progress
          max={100}
          value={progress.current}
          ref={progressRef}
          className=" w-full pl-2 pr-2 h-1 align-top"
        ></progress>
        <h3 className="text-white text-xl font-bold pt-4 text-center">
          {title}
        </h3>
      </div>
      <div className="flex flex-col-reverse items-center gap-4 mb-32">
        <button onClick={toggleLiked}>
          <img
            src={liked ? "../../assets/liked.svg" : "../../assets/unliked.svg"}
            alt=""
            width={32}
            className="rounded "
          />
        </button>
        <button onClick={handlePlayPause}>
          <img
            src={playing ? "../../assets/pause.svg" : "../../assets/play.svg"}
            alt=""
            width={48}
            className="rounded "
          />
        </button>
      </div>
    </div>
  );
}

export default Video;
