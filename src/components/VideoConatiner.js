import React, { useEffect, useState } from "react";
import { YT_DATA_API } from "../utils/helper";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_DATA_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className=" ">
      <div className="flex flex-wrap justify-start ">
        {video.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>       
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};
//  always remember the link can be used inside the map functions
export default VideoConatiner;
