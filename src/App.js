import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Game from './pages/Game';
import HomePage from './pages/HomePage';

import Login from './components/UserManage/Login';
import CreateAccount from './components/UserManage/CreateAccount';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/Game" component={Game} />
          <Route path="/CreateAccount" component={CreateAccount} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
