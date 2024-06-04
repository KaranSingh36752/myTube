import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../utils/chatSlice";
import { randomMessage, randomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatTexts = useSelector((store) => store.chat.text);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Api polling");
      dispatch(
        addText({
          name: randomName(),
          text: randomMessage(20),
        })
      );
    }, 3000);
    return () => clearInterval(i);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onsubit", liveMessage);
    if (!liveMessage.trim()) return;
    dispatch(
      addText({
        name: "Karan Singh",
        text: liveMessage,
      })
    );
    setLiveMessage("");
  }

  return (
    <div className="">
      <div className="flex flex-col-reverse ml-2">
        {/* disclaimer dont use index as key*/}
        {chatTexts.map((c, index) => (
          <ChatMessage key={`${c.name}-${index}`} name={c.name} text={c.text} />
        ))}
      </div>
      {/* <div className="rounded-md p-2 my-1 mx-0  content-baseline bg-slate-200 ">
        <span className="justify-center">hide chat</span>
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="w-full p-2 m-1 border border-gray-700"
      >
        <input
          className="px-2 py-1 w-[268px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 mx-2 bg-slate-400 rounded-md">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
