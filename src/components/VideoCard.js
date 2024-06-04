import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    // <h1>sdhyigefuy</h1>
    
    <div className="w-72 p-2 m-2 overflow-hidden shadow-lg" >
      <img className=" w-full h-44 rounded-lg " alt="thumbnail" src={thumbnails.medium.url} />
      <h3 className="font-bold text-wrap ">{title}</h3>
      <h4 className="font-semibold text-m">{channelTitle}</h4>
      <span className="text-sm">{Math.floor(viewCount / 100000)}K views</span>
    </div>
    
  );
};

export default VideoCard;
