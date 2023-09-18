import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../Views/Home/home';
import Dashboard from '../Views/Dashboard/dashboard';
import Profile from '../Views/Profile/profile';


function RouterContent () {
    return<div>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
         </Routes>
      </div>;
  }

export default RouterContent