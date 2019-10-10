import React from 'react';
import './App.css';
import DataProvider from './context/Context';
import Navigation from './utils/navigation';

function App() {
  return (
    <DataProvider>
      <Navigation />
    </DataProvider>
  );
}

export default App;
