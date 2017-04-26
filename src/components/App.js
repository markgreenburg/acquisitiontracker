import React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Footer from './Footer';

// Use stateless component for App since Redux will handle state
const App = () => {
  const appTemplate = (
    <div>
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
  return appTemplate;
};

export default App;
