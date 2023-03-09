import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "../Firebase";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { signOut } from "firebase/auth";
import CreatePost from "../Pages/CreatePost";

function App(){
    const[isAuth,  setisAuth] = useState(false);
    const signout = ()=>{
        signOut(auth).then(() =>{
            localStorage.clear()
            setisAuth(false)
            window.location.pathname="/Login";
        })
    }
    return(
        <Router>
            <nav>
                <Link to="/">Home</Link>
                
                {!isAuth ?(<Link to="Login">Login</Link>) : (<><Link to="/CreatePost">CreatePost</Link>
                <button className="signOut" onClick={signout}> SignOut</button></>)}
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login setIsAuth={setisAuth}/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/CreatePost" element={<CreatePost isAuth={isAuth}/>}/>
            </Routes>
        </Router>
    )
}

export default App;