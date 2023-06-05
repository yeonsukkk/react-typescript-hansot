import React from 'react';
import { Nav } from './Nav';
import Footer from './Footer';

type AppProps = {
  children: JSX.Element;
};

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div id='allWrap'>{children}</div>
      <Footer />
    </>
  );
};

export default App;
