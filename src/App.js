import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import YouMain from './components/YouMain/YouMain';


const App = () => {

  return (
    <div className="App">
      <Header />
      <YouMain />
    </div>
  );
}

export default App;
