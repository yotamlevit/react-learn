import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import CenteredTabs from './components/center-tabs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

//"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" 
function App() {
  return (
    <div className='App' style={{"backgroundColor: #9835B0"}}>
        <Router>
          <CenteredTabs/>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
