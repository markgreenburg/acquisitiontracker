import React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Footer from './Footer';
import '../../public/css/app.css';

/**
 * Functional React component that controls the app's layout
 */
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
