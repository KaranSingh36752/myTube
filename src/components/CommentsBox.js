import React from "react";

const CommmetData = [
    {
        name: "Karan singh",
        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
        replies: [
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [{
                    name: "Karan singh",
                    text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                    replies: [
                    ]
                },
                    {
                        name: "Karan singh",
                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                        replies: [
                        ]
                    },
                    {
                        name: "Karan singh",
                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                        replies: [
                            {
                                name: "Karan singh",
                                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                                replies: [
                                ]
                            },  ]
                    },
                ]
            },
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [
                    {
                        name: "Karan singh",
                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                        replies: [
                        ]
                    },
                ]
            },
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [
                ]
            },
        ]
    },
    {
        name: "Karan singh",
        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
        replies: [
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [
                    {
                        name: "Karan singh",
                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                        replies: [
                        ]
                    },  ]
            },
        ]
    },
    {
        name: "Karan singh",
        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
        replies: [
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [
                ]
            },
        ]
    },
    {
        name: "Karan singh",
        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
        replies: [
            {
                name: "Karan singh",
                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                replies: [
                    {
                        name: "Karan singh",
                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                        replies: [
                            {
                                name: "Karan singh",
                                text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                                replies: [
                                    {
                                        name: "Karan singh",
                                        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
                                        replies: [
                                        ]
                                    },  ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Karan singh",
        text: "Fusce interdum, mi sit amet laoreet suscipit, nulla arcu cursus nisi",
        replies: [
        ]
    },
];

const Comment = ({data}) => {
    const { name , text } = data;
     return(
        <div className="flex m-1 p-2 bg-gray-100 rounded-md">
            
            <img
          className="h-8 mt-2 flex "
          alt="signin-icon"
          src="https://toppng.com/uploads/preview/loginsignupwishlist-transparent-login-ico-11563142477cgauetoem7.png"
        />
        <div className="text-l font-semibold ml-2">
          <p>{name}</p>
          <p>{text}</p>
          </div>
        </div>
     )
}

const CommentsList = ({comments}) => {
    return comments.map((comment) => (
    <div>
    <Comment data={comment} key={comment.name} />
    <div className="pl-5 border border-l-black ml-2">
    <CommentsList comments={comment.replies}/>
    </div>
</div>  
    ))
}


const CommentsBox = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommmetData}/>
    </div>
  );
};

export default CommentsBox;
