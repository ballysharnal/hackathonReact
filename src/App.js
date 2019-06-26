import React from 'react';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/UserManage/Login';
import Game from './pages/Game';
import CreateAccount from './components/UserManage/CreateAccount';

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
