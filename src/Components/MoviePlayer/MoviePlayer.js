import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiService from "../../Services/ApiService";
import VideoJS from "../Movies-Info/video";
import "./MoviePlayer.css";

export const MoviePlayer = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { moviesData, loading } = ApiService(
    "https://api.tvmaze.com/shows/" + id
  );
  const playerRef = useRef(null);
  let videoJsOptions = {
    autoplay: true,
    height: "100%",
    width: "100%",
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4"
      }
    ]
  };

  const handleClose = () => {
    navigate("/movies/" + id);
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      VideoJS.log("player is waiting");
    });

    player.on("dispose", () => {});
  };

  return (
    <div className="movieComponent">
      <div className="moviePlayer">
        <div className="moviePlayerTitle">
          <i className="fas fa-times" onClick={handleClose}></i>
          <p className="Movietitle">{moviesData?.name}</p>
        </div>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  );
};
