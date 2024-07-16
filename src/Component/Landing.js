import React from "react";
import Header from "./Header";
import AllImages from "./AllImages";
import { Routes, Route } from "react-router-dom";
// import AllVideos from './AllVideos';

const Landing = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<AllImages />}></Route>
        {/* <Route exact path="/videos" element={<AllVideos />}></Route> */}
      </Routes>
    </div>
  );
};

export default Landing;
