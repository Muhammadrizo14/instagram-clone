import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Explore from './Components/Explore/Explore'
import Inbox from './Components/Chat/Inbox'
import Ayub from './Components/Chat/ayukhan_x'
import Login from "./Components/Registration/Login";
import Slick from "./Components/Slick";
import Register from "./Components/Registration/Register";

function App() {
  return (
    <div className="App">
      <Routes>
          {/*  Home page  */}
          <Route path={"/"} element={<Home />} />

          {/* Registration */}
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Register />} />


          {/* Profle page */}
          <Route path={"/profile"} element={<Profile />} />

          {/* Test new technologies page */}
          <Route path={"/test"} element={<Slick />} />


          {/* Explore */}
          <Route path={"/explore"} element={<Explore />} />

          {/* Chat */}
          <Route path={"/inbox"} element={<Inbox />} />

          {/* zxc ayub */}
          <Route path={"/inbox/14564"} element={<Ayub />} />


      </Routes>
    </div>
  );
}

export default App;
