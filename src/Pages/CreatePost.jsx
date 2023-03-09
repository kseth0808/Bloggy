import React, { useEffect, useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { db, auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

function CreatePost({isAuth}) {
  const[title, setTitle] = useState("")
  const[posttext, setPostText] = useState("")

  const postscollectionRef = collection(db, "posts")
  let navigate = useNavigate();
  const createPost = async ()=>{
    await addDoc(postscollectionRef, {title, posttext, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}
    })
    navigate("/");
  }
  useEffect(() => { 
    if (!isAuth) {
      navigate("/Login");
    }
  }, [isAuth]);
  return (
    <div className="createPostPage">
    <div className="cpContainer">
      <h1>Create A Post</h1>
      <div className="inputGp">
        <label> Title:</label>
        <input
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="inputGp">
        <label> Post:</label>
        <textarea
          placeholder="Post..."
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        />
      </div>
      <button onClick={createPost}> Submit Post</button>
    </div>
  </div>

  )
}

export default CreatePost
