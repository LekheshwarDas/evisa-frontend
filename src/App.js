import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './my_component/home_links/home';
import { Hre } from './my_component/hre/hre_home';
import { User } from './my_component/user/user_home';
import { About } from './my_component/home_links/about';
import { Disclaimer } from './my_component/home_links/disclaimer';
import { Contact } from './my_component/home_links/contact';
import { Footer } from './my_component/home_links/footer';
import { Admin } from './my_component/admin/admin_home';

function App() {
  return (
    <div>

      <BrowserRouter>  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="admin" element={<Admin/>}/>
          <Route path='hre' element={<Hre />}/>
          <Route path='user' element={<User />} />
          <Route path='about' element={<About/>} />
          <Route path='disclaimer' element={<Disclaimer/>}admin />
          <Route path='contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
