import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';

import './App.css';

function App() {



  return (
    <div className='App'>
      <Router>
      <Header />
          <Route exact path="/"> <Feeling/> </Route>
          <Route exact path="/Understanding"> <Understanding/> </Route>
          <Route exact path="/Suport"> <Support/> </Route>
      </Router>

    </div>
  );
}

export default App;
