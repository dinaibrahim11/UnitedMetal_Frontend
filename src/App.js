import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useSelector, useDispatch } from 'react-redux';
import { sendFavedPhoto } from './store/user-actions';


const App = () => {
  const dispatch = useDispatch();
  const favedPhotos = useSelector(state => state.user.favedPhotos);

  useEffect(() => {
    dispatch(sendFavedPhoto(favedPhotos));
    
  }, [favedPhotos, dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
