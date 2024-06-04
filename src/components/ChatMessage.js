import React from 'react'

const ChatMessage = ({name,text}) => {
  return (
    <div className='flex  p-1 whitespace-nowrap '>
        <img
          className="h-8 mt-2 flex "
          alt="signin-icon"
          src="https://toppng.com/uploads/preview/loginsignupwishlist-transparent-login-ico-11563142477cgauetoem7.png"
        />
        <div className='m-1 p-1  flex'>
        <p className='mx-1 font-normal text-slate-500' >{name}</p>
        <p>{text}</p>
        </div>
    </div>
  )
}

export default ChatMessage