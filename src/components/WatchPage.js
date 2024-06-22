import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsBox from "./CommentsBox";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [details, setDetails] = useState("");
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const videoId = searchParams.get('v');

  const getDetails = useCallback(async () => {
    if (!videoId) return;

    const data = await fetch(`https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=${videoId}`);
    const json = await data.json();
    setDetails(json);
  }, [videoId]);

  useEffect(() => {
    getDetails();
    dispatch(closeMenu());
  }, [dispatch, getDetails]);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="mx-8 my-3">
          <iframe
            className="rounded-3xl"
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-3 w-96 h-[500px] m-2 p-2 bg-slate-100 rounded-xl whitespace-nowrap overflow-y-scroll flex flex-col-reverse">
          <LiveChat />
        </div>
      </div>
      <div className="m-3 mx-6 w-[1000px] p-3">
        <h1 className="text-2xl font-bold">{details.title}</h1>
        <p className="text-l font-semibold">By: <a href={details.author_url}>{details.author_name}</a></p>
      </div>
      <CommentsBox />
    </div>
  );
};

export default WatchPage;
