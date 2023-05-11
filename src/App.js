import './App.css';
import Header from './Component/Header';
import Homepage from './Component/Homepage';
import About from './Component/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook,FaInstagram,FaYoutube } from 'react-icons/fa';
import {GiHamburgerMenu } from 'react-icons/gi';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Loginpanel from './Component/Loginpanel';
import Adminpanel from './Component/Adminpanel';
import Adddish from './Component/Adddish';
import AdminViewitem from './Component/AdminViewitem';
import Usermenu from './Component/Usermenu';
import Cartitem from './Component/Cartitem';
import { icons } from 'react-icons';
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Homepage />}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/loginpanel' element={<Loginpanel />}></Route>
          <Route path='/adminpanel' element={<Adminpanel />}></Route>

          <Route path='/adddish' element={<Adddish />}></Route>
          <Route path='/adminpanel' element={<Adminpanel />}></Route>
          <Route path='/viewitem' element={<AdminViewitem />}></Route>
          <Route path='/usermenu' element={<Usermenu />}></Route>
          <Route path='/cartitem' element={<Cartitem />}></Route>

        </Routes>
      </BrowserRouter>

      {/* <Loginpanel /> */}
      {/* <Header /> */}
      {/* <Homepage />
        <About /> */}


      {/* <Base64 /> */}

      {/* <Loginwithoutauth/> */}

    </>
  );
}

export default App;
