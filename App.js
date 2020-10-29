import React from 'react';
import MyAppProvider from './app/provider/myAppProvider'
import Home from './app/home'

const App = () => {
  return (
    <MyAppProvider>
      <Home />
    </MyAppProvider>
  );
};


export default App;