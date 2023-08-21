import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analysis from './Analysis';

function AuthRouter() {

    return (
        <Routes>
          <Route path="/" element={<Analysis/>} />
        </Routes>
    );
}

export default AuthRouter;
