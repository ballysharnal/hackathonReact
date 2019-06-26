import React from 'react';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Authent/Login';
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/Game" component={Game} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
