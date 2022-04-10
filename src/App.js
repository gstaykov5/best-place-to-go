import React, { useEffect } from 'react';
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
import Details from './components/pages/details/Details';
import Edit from './components/pages/details/Edit';

import store from './features/store/store'
import Search from './components/pages/Search/Search';
import { getAllPlaces } from './features/actions/actionPlace';
import { useDispatch } from 'react-redux';
import Footer from './components/shared/Footer';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(getAllPlaces());
  }, [])
  
  const a = store.getState()
  
  console.log('this is first', a)
  // yarn add cors indicative mongodb jsonwebtoken bcryptjs morgan
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BestPlaceToGo" element={<BestPlaceToGo />} />
        <Route path="/Meetup" element={<Meetup />} />
        <Route path="/WhereHaveYouBeen" element={<WhereHaveYouBeen />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path='/Favorite/Details/:id' element={<Details />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/BestPlaceToGo/Details/:id' element={<Details />} />
        <Route path='/BestPlaceToGo/Details/:id/Edit' element={<Edit />} />
        <Route path='/ControlUsers' element={<ControlUsers />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Search/Details/:id' element={<Details />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;











// import React, { Suspense } from 'react';
// import { Routes ,Route } from 'react-router-dom';


// import store from './features/store/store'
// import { getPlaces } from './features/actions/actionPlace';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// const Navbar = (() => import ('./components/shared/Navbar'));
// const BestPlaceToGo = (() => import ('./components/pages/best-place-to-go/BestPlaceToGo'));
// const Favorite = (() => import ('./components/pages/favorite/Favorite'));
// const Home = (() => import ('./components/pages/home/Home'));
// const Login = (() => import ('./components/pages/login/Login'));
// const Logout = (() => import ('./components/pages/logout/Logout'));
// const Meetup = (() => import ('./components/pages/meet-up/Meetup'));
// const Register = (() => import ('./components/pages/register/Register'));
// const Account = (() => import ('./components/pages/account/left-side-content/Account'));
// const ControlUsers = (() => import ('./components/pages/control-users/ControlUsers'));
// const WhereHaveYouBeen = (() => import ('./components/pages/add-new-place/WhereHaveYouBeen'));
// const Profile = (() => import ('./components/pages/profile/Profile'));
// const Details = (() => import ('./components/pages/details/Details'));

// function App() {
//   const dispatch = useDispatch();
//   // const { isLoggedIn } = useSelector(state => state.registeLoginReducer);
//   // console.log('isLoggedIn from App.js:',isLoggedIn);

//   const a = store.getState()
//   console.log(a)
//   dispatch(getPlaces());
  
//   console.log(a)
  
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Home" element={<Home />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/BestPlaceToGo" element={<BestPlaceToGo />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Meetup" element={<Meetup />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/WhereHaveYouBeen" element={<WhereHaveYouBeen />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Favorite" element={<Favorite />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path='/Account' element={<Account />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path='/Profile' element={<Profile />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path='/Details/:id' element={<Details />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path='/ControlUsers' element={<ControlUsers />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Login" element={<Login />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Register" element={<Register />} />
//         </Suspense>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/Logout" element={<Logout />} />
//         </Suspense>
//       </Routes>
//     </div>
//   );
// }

// export default App;
