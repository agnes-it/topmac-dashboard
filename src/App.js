import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import TabsList from './components/TabList';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <TabsList />      
    </div>
  );
}

export default App;