import React, {useState} from 'react'
import {useCookies} from 'react-cookie'
import { Dashboard_hr } from './pages/navbar';
import { Login } from './pages/login';
export const Hre = () => {
  const [Loggedin, setLoggedin] = useState(false);
  const [selectedUser, setSelectedUser] = useState([])

  return (
    <div>
      {
        Loggedin?<Dashboard_hr user={selectedUser}/>:<Login setLoggedin={setLoggedin} setSelectedUser={setSelectedUser}/>
      }
    </div>
  )
}
