import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

function NonAuthRouter() {

    return (
        <Routes>
          <Route path="/" element={<LoginPage/>} />
        </Routes>
    );
}

export default NonAuthRouter;
