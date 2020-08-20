import React from 'react';

import NavBar from './components/NavBar';
import Container from './components/Container';

import { Router } from 'react-router-dom';
import history from './Utils/history';

function App() {

  return (
    <Router history={history}>
    <div className="App">
      <NavBar/>
      <Container/>
    </div>
    </Router>
  );
}

export default App;
