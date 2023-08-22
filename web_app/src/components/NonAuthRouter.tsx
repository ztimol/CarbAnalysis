import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';

function NonAuthRouter() {

    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
    );
}

export default NonAuthRouter;
