import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'

function Home() {
  const[postList, setpostList] = useState([])
  const postCollectionRef = collection(db, "posts")
  useEffect(()=>{
   const getPosts = async ()=>{
    const data = await getDocs(postCollectionRef);
    setpostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
   }
   getPosts();
  },[])

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }
  

  return (
    <div className="homePage">
      <h1>Hello This is Blog App, Here you can write blogs that will display on homepage</h1>
      {postList.map((posts)=>{
        return(
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{posts.title}</h1>
              </div>
              <div className="deletePost">
                  <button onClick={()=> deletePost(posts.id)}>Delete</button>
                </div>
            </div>
            <div className="title">
              <h3>{posts.posttext}</h3>
              <h3>@{posts.author.name}</h3>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default Home
