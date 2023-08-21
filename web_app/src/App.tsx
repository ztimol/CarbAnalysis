import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import BasePage from './components/BasePage';

function App() {
    return (
        <Router>
          <BasePage/>
        </Router>              
    );
}

export default App;
