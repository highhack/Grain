import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let PostData = [
    {message: 'Hi, how are you?', id: 1 ,likecount: "15"},
    {message: "It's my first post" , id: 2 , likecount:"16"}
    ]

    let PostsElements = PostData.map(p => <Post message={p.message} id={p.id} likecount={p.likecount} />)

  return (
    <div className={s.mypost}>
      <h3>My posts</h3>
      <textarea></textarea>
      <button>add post</button>
      {PostsElements}
    </div>
  )
};

export default MyPosts;