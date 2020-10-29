import React from 'react';
import MyAppProvider from './app/provider/myAppProvider'
import NetworkStatus from './app/netStatus'
import Home from './app/home'

const App = () => {
  return (
    <MyAppProvider>
      <NetworkStatus />
      <Home />
    </MyAppProvider>
  );
};


export default App;