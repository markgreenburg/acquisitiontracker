import React from 'react';
import logo from '../../public/img/logo.svg';
import '../../public/css/App.css';

// Use stateless component for App since Redux will handle state
const App = () => {
  const appRootDiv = (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
  return appRootDiv;
};

export default App;
