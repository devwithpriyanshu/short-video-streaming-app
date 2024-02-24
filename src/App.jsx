import videodata from "./data/videodata";
import Video from "./components/Video/Video";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos(videodata);
  }, []);

  return (
    <>
      <div className="app">
        <div className="app__videos">
          {videos.map((video) => {
            return (
              <Video
                key={video.id}
                url={video.url}
                title={video.title}
                description={video.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
