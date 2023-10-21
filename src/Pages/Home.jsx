import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import TopBlogs from './TopBlogs';

function Home() {
  const [postList, setpostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

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
  // ... (your existing code for fetching and deleting posts)

  const homePageStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const postStyle = {
    border: '1px solid #ccc',
    margin: '20px',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  };

  const postHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    flex: 1,
  };

  const deleteButtonStyle = {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const postContentStyle = {
    marginTop: '10px',
  };

  const authorStyle = {
    fontStyle: 'italic',
    color: '#555',
  };

  return (
    <div style={homePageStyle} className="homePage">
      <h1>Hello, This is a Blog App. Write and Share Your Blogs!</h1>
      <TopBlogs topBlogs={postList} />
      {postList.map((post) => (
        <div style={postStyle} key={post.id}>
          <div style={postHeaderStyle} className="postHeader">
            <div style={titleStyle} className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              <button style={deleteButtonStyle} onClick={() => deletePost(post.id)}>
                Delete
              </button>
            </div>
          </div>
          <div style={postContentStyle} className="postContent">
            <p>{post.posttext}</p>
            <p style={authorStyle}>@{post.author.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
