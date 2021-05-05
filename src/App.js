import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menuu from './components/Menuu/Menuu';
export const isLoggedInContext = React.createContext(false)
function App() {
const isloggedin = false
  return (
    <div className="App">
    <isLoggedInContext.Provider value={isloggedin}>
      <Header />
    </isLoggedInContext.Provider>
    <isLoggedInContext.Provider value={isloggedin}>
      <Menuu />
    </isLoggedInContext.Provider>
      <Main/>
          </div>
  );
}

export default App;
