import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Searchbar from './components/Search/Searchbar';
import SearchPage from './components/Search/SearchPage';
import images1 from './components/Search/images1';
import images2 from './components/Search/images2';
import images3 from './components/Search/images3';
import images4 from './components/Search/images4';
import images5 from './components/Search/images5';
import images6 from './components/Search/images6';
import images7 from './components/Search/images7';
import images8 from './components/Search/images8';
import images9 from './components/Search/images9';
import images10 from './components/Search/images10';
import images11 from './components/Search/images11';
import images12 from './components/Search/images12';
import people1 from './components/Search/people1';
import people2 from './components/Search/people2';
import people3 from './components/Search/people3';
import people4 from './components/Search/people4';

import Group1 from './components/Search/Group1';
import Group2 from './components/Search/Group2';
import Group3 from './components/Search/Group3';
import Group4 from './components/Search/Group4';


import Photos from './components/Search/Photos';
import Main from './components/Main/Main';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>

    <div className="App">

      <Header />
      {/*<Main /> */}
      <Searchbar/>
      
     <Switch>
    <Route path="/SearchPage" component={SearchPage}/>
    <Route path="/images1" component={images1}/>
    <Route path="/images2" component={images2}/>
    <Route path="/images3" component={images3}/>
    <Route path="/images4" component={images4}/>
    <Route path="/images5" component={images5}/>
    <Route path="/images6" component={images6}/>
    <Route path="/images7" component={images7}/>
    <Route path="/images8" component={images8}/>
    <Route path="/images9" component={images9}/>
    <Route path="/images10" component={images10}/>
    <Route path="/images11" component={images11}/>
    <Route path="/images12" component={images12}/>
    <Route path="/people1" component={people1}/>
    <Route path="/people2" component={people2}/>
    <Route path="/people3" component={people3}/>
    <Route path="/people4" component={people4}/>

    <Route path="/Group1" component={Group1}/>
    <Route path="/pGroup2" component={Group2}/>
    <Route path="/Group3" component={Group3}/>
    <Route path="/Group4" component={Group4}/>

    
      
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
