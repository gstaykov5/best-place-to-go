import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/shared/Navbar';
import BestPlaceToGo from './components/pages/best-place-to-go/BestPlaceToGo';
import Favorite from './components/pages/favorite/Favorite';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Logout from './components/pages/logout/Logout';
import Meetup from './components/pages/meet-up/Meetup';
import Register from './components/pages/register/Register';
import Account from './components/pages/account/left-side-content/Account';
import ControlUsers from './components/pages/control-users/ControlUsers';
import WhereHaveYouBeen from './components/pages/add-new-place/WhereHaveYouBeen';
import Profile from './components/pages/profile/Profile';

// import { useSelector } from 'react-redux';
import store from './features/store/store'

function App() {
  // const { isLoggedIn } = useSelector(state => state.registeLoginReducer);
  // console.log('isLoggedIn from App.js:',isLoggedIn);
  const a = store.getState()
  console.log(a)
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BestPlaceToGo" element={<BestPlaceToGo />} />
        <Route path="/Meetup" element={<Meetup />} />
        <Route path="/WhereHaveYouBeen" element={<WhereHaveYouBeen />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/ControlUsers' element={<ControlUsers />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
